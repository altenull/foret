import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { baseButtonStyles, buttonText } from '../utils/button.utils';
import { colors } from '../../utils/color.utils';

const backgroundColorSet = {
  default: colors.foretGreen,
  hover: colors.foretGreenDarken1,
  active: colors.foretGreenDarken2,
  disabled: colors.foretGreenLighten,
};

@Directive({
  selector: '[foretPrimaryButton]',
})
export class PrimaryButtonDirective {
  isDisabled: boolean = false;

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = backgroundColorSet.hover;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor = backgroundColorSet.default;
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.backgroundColor = backgroundColorSet.active;
    this.el.nativeElement.style.borderStyle = 'none';
  }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.boxShadow = 'rgba(46, 139, 87, 0.35) 0 0 0 3px';
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.boxShadow = baseButtonStyles['box-shadow'];
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const nativeElement = el.nativeElement;

    this.isDisabled = nativeElement.hasAttribute('disabled');

    const primaryButtonStyles = {
      ...baseButtonStyles,
      ...buttonText,
      color: colors.white,
      'background-color': this.isDisabled
        ? backgroundColorSet.disabled
        : backgroundColorSet.default,
    };

    Object.keys(primaryButtonStyles).forEach((style) => {
      renderer.setStyle(nativeElement, style, primaryButtonStyles[style]);
    });

    if (this.isDisabled) {
      this.el.nativeElement.style.cursor = 'not-allowed';
    }
  }
}
