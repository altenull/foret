import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { colors } from '../../utils/color.utils';
import { baseButtonStyles, buttonText } from '../utils/button.utils';

const secondaryButtonBackgroundColorSet = {
  default: colors.soil,
  hover: colors.soilDarken1,
  active: colors.soilDarken2,
  disabled: colors.soilLighten,
};

@Directive({
  selector: '[foretSecondaryButton]',
})
export class SecondaryButtonDirective {
  isDisabled: boolean = false;

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor =
      secondaryButtonBackgroundColorSet.hover;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor =
      secondaryButtonBackgroundColorSet.default;
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.backgroundColor =
      secondaryButtonBackgroundColorSet.active;
    this.el.nativeElement.style.borderStyle = 'none';
  }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.boxShadow = 'rgba(89, 55, 21, 0.35) 0 0 0 3px';
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.boxShadow = baseButtonStyles['box-shadow'];
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const nativeElement = el.nativeElement;

    this.isDisabled = nativeElement.hasAttribute('disabled');

    const secondaryButtonStyles = {
      ...baseButtonStyles,
      ...buttonText,
      color: colors.white,
      'background-color': this.isDisabled
        ? secondaryButtonBackgroundColorSet.disabled
        : secondaryButtonBackgroundColorSet.default,
    };

    Object.keys(secondaryButtonStyles).forEach((style) => {
      renderer.setStyle(nativeElement, style, secondaryButtonStyles[style]);
    });

    if (this.isDisabled) {
      this.el.nativeElement.style.cursor = 'not-allowed';
    }
  }
}
