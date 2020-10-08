import { Color, hexToRgb } from '@altenull/foret-core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { baseButtonStyles, buttonText } from '../utils/button.utils';

const dangerButtonBackgroundColorSet = {
  default: Color.Sun,
  hover: Color.SunDarken1,
  active: Color.SunDarken2,
  disabled: Color.SunLighten,
};

@Directive({
  selector: '[foretDangerButton]',
})
export class DangerButtonDirective {
  isDisabled: boolean = false;

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = dangerButtonBackgroundColorSet.hover;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = dangerButtonBackgroundColorSet.default;
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.backgroundColor = dangerButtonBackgroundColorSet.active;
    this.el.nativeElement.style.borderStyle = 'none';
  }

  @HostListener('focus') onFocus() {
    const sunRgb = hexToRgb(Color.Sun);
    this.el.nativeElement.style.boxShadow = `rgba(${sunRgb.r}, ${sunRgb.g}, ${sunRgb.b}, 0.35) 0 0 0 3px`;
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.boxShadow = baseButtonStyles['box-shadow'];
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.isDisabled = el.nativeElement.hasAttribute('disabled');

    this.initDangerButtonStyles(this.isDisabled);
  }

  private initDangerButtonStyles(isDisabled: boolean): void {
    const dangerButtonStyles = {
      ...baseButtonStyles,
      ...buttonText,
      color: Color.White,
      'background-color': isDisabled ? dangerButtonBackgroundColorSet.disabled : dangerButtonBackgroundColorSet.default,
    };

    Object.keys(dangerButtonStyles).forEach((style) => {
      this.renderer.setStyle(this.el.nativeElement, style, dangerButtonStyles[style]);
    });

    if (isDisabled) {
      this.el.nativeElement.style.cursor = 'not-allowed';
      this.el.nativeElement.style.boxShadow = 'none';
    }
  }
}
