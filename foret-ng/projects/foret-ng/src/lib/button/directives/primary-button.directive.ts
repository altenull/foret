import { Color, hexToRgb } from '@altenull/foret-core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { baseButtonStyles, buttonText } from '../utils/button.utils';

const primaryButtonBackgroundColorSet = {
  default: Color.ForetGreen,
  hover: Color.ForetGreenDarken1,
  active: Color.ForetGreenDarken2,
  disabled: Color.ForetGreenLighten,
};

@Directive({
  selector: '[foretPrimaryButton]',
})
export class PrimaryButtonDirective {
  isDisabled: boolean = false;

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = primaryButtonBackgroundColorSet.hover;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = primaryButtonBackgroundColorSet.default;
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.backgroundColor = primaryButtonBackgroundColorSet.active;
    this.el.nativeElement.style.borderStyle = 'none';
  }

  @HostListener('focus') onFocus() {
    const foretGreenRgb = hexToRgb(Color.ForetGreen);
    this.el.nativeElement.style.boxShadow = `rgba(${foretGreenRgb.r}, ${foretGreenRgb.g}, ${foretGreenRgb.b}, 0.35) 0 0 0 3px`;
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.boxShadow = baseButtonStyles['box-shadow'];
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.isDisabled = el.nativeElement.hasAttribute('disabled');

    this.initPrimaryButtonStyles(this.isDisabled);
  }

  private initPrimaryButtonStyles(isDisabled: boolean): void {
    const primaryButtonStyles = {
      ...baseButtonStyles,
      ...buttonText,
      color: Color.White,
      'background-color': isDisabled
        ? primaryButtonBackgroundColorSet.disabled
        : primaryButtonBackgroundColorSet.default,
    };

    Object.keys(primaryButtonStyles).forEach((style) => {
      this.renderer.setStyle(this.el.nativeElement, style, primaryButtonStyles[style]);
    });

    if (isDisabled) {
      this.el.nativeElement.style.cursor = 'not-allowed';
      this.el.nativeElement.style.boxShadow = 'none';
    }
  }
}
