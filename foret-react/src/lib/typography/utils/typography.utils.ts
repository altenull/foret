import { css } from '@emotion/core';
import { FontWeight, Color } from '@altenull/foret-core';

// https://meyerweb.com/eric/tools/css/reset/
export const resetTypography = css({
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
});

export const setFontFace = css`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

  font-family: 'Overpass', sans-serif;
`;

export const heading1Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.light,
  fontSize: '72px',
  color: Color.Ink,
  lineHeight: 1.25,
  letterSpacing: '-1.2px',
});

export const heading2Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.semiBold,
  fontSize: '48px',
  color: Color.Ink,
  lineHeight: 1.375,
  letterSpacing: '-0.25px',
});

export const heading3Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.regular,
  fontSize: '36px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '-0.5px',
});

export const paragraphStyles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.regular,
  fontSize: '20px',
  color: Color.Ink,
  lineHeight: 1.8,
});

export const smallTextStyles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.light,
  fontSize: '15px',
  color: Color.Ink,
  lineHeight: 1.35,
  letterSpacing: '0.8px',
});

export const subtitle1Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.light,
  fontSize: '18px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '0.5px',
});

export const subtitle2Styles = css(resetTypography, setFontFace, {
  fontStyle: 'normal',
  fontWeight: FontWeight.semiBold,
  fontSize: '16px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '0.25px',
});
