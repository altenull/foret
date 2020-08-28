import { FontWeight } from '@altenull/foret-core';
import { css } from '@emotion/core';
import { setFontFace } from '../../../typography/utils/typography.utils';

const buttonTextStyles = css(setFontFace(), {
  fontStyle: 'normal',
  fontWeight: FontWeight.semiBold,
  fontSize: '18px',
  textTransform: 'uppercase',
  lineHeight: '1.25',
  letterSpacing: '1.1px',
});

const baseButonEffectStyles = css({
  '&:hover': {
    cursor: 'pointer',
  },
  '&:active': {
    borderStyle: 'none',
  },
  '&:disabled': {
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
});

export const baseButtonStyles = css(buttonTextStyles, baseButonEffectStyles, {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  borderStyle: 'none',
  boxSizing: 'border-box',
  outline: 'none',
  padding: '12px 26px',
  boxShadow: '0 1px 2px rgba(170, 183, 178, 0.6)',
  transition: 'all 0.15s ease-in-out',
});
