import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { baseButtonStyles, buttonText } from '../utils/button.utils';
import { colors } from '../../utils/color.utils';

const primaryButtonBackgroundColorSet = {
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
    this.el.nativeElement.style.backgroundColor =
      primaryButtonBackgroundColorSet.hover;
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.backgroundColor =
      primaryButtonBackgroundColorSet.default;
  }

  @HostListener('mousedown') onMouseDown() {
    this.el.nativeElement.style.backgroundColor =
      primaryButtonBackgroundColorSet.active;
    this.el.nativeElement.style.borderStyle = 'none';
  }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.boxShadow = 'rgba(46, 139, 87, 0.35) 0 0 0 3px';
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.boxShadow = baseButtonStyles['box-shadow'];
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.isDisabled = el.nativeElement.hasAttribute('disabled');

    this.initPrimaryButtonStyles(this.isDisabled);
  }

  initPrimaryButtonStyles(isDisabled: boolean): void {
    const primaryButtonStyles = {
      ...baseButtonStyles,
      ...buttonText,
      color: colors.white,
      'background-color': isDisabled
        ? primaryButtonBackgroundColorSet.disabled
        : primaryButtonBackgroundColorSet.default,
    };

    Object.keys(primaryButtonStyles).forEach((style) => {
      this.renderer.setStyle(
        this.el.nativeElement,
        style,
        primaryButtonStyles[style]
      );
    });

    if (isDisabled) {
      this.el.nativeElement.style.cursor = 'not-allowed';
      this.el.nativeElement.style.boxShadow = 'none';
    }
  }
}
