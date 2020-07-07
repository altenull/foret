import { fontWeights } from '../../utils/typography.utils';

export const baseButtonStyles = {
  display: 'inline-flex',
  'justify-content': 'center',
  'align-items': 'center',
  'border-radius': '4px',
  'border-style': 'none',
  'box-sizing': 'border-box',
  'box-shadow': '0 1px 2px rgba(170, 183, 178, 0.6)',
  outline: 'none',
  padding: '12px 26px',
  transition: 'all 0.15s ease-in-out',
};

export const buttonText = {
  'font-style': 'normal',
  'font-weight': fontWeights.semiBold,
  'font-size': '18px',
  'text-transform': 'uppercase',
  'line-height': 1.25,
  'letter-spacing': '1.1px',
};