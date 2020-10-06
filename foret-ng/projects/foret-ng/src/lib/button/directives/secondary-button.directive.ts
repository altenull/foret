import { Color, hexToRgb } from '@altenull/foret-core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { baseButtonStyles, buttonText } from '../utils/button.utils';

const secondaryButtonBackgroundColorSet = {
  default: Color.Stone,
  hover: Color.StoneDarken1,
  active: Color.StoneDarken2,
  disabled: Color.StoneLighten,
};

@Directive({
  selector: '[foretSecondaryButton]',
})
export class SecondaryButtonDirective {
  isDisabled: boolean = false;

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = secondaryButtonBackgroundColorSet.hover;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = secondaryButtonBackgroundColorSet.default;
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.backgroundColor = secondaryButtonBackgroundColorSet.active;
    this.el.nativeElement.style.borderStyle = 'none';
  }

  @HostListener('focus') onFocus() {
    const stoneRgb = hexToRgb(Color.Stone);
    this.el.nativeElement.style.boxShadow = `rgba(${stoneRgb.r}, ${stoneRgb.g}, ${stoneRgb.b}, 0.35) 0 0 0 3px`;
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.boxShadow = baseButtonStyles['box-shadow'];
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.isDisabled = el.nativeElement.hasAttribute('disabled');

    this.initSecondaryButtonStyles(this.isDisabled);
  }

  private initSecondaryButtonStyles(isDisabled: boolean): void {
    const secondaryButtonStyles = {
      ...baseButtonStyles,
      ...buttonText,
      color: Color.White,
      'background-color': isDisabled
        ? secondaryButtonBackgroundColorSet.disabled
        : secondaryButtonBackgroundColorSet.default,
    };

    Object.keys(secondaryButtonStyles).forEach((style) => {
      this.renderer.setStyle(this.el.nativeElement, style, secondaryButtonStyles[style]);
    });

    if (isDisabled) {
      this.el.nativeElement.style.cursor = 'not-allowed';
      this.el.nativeElement.style.boxShadow = 'none';
    }
  }
}
