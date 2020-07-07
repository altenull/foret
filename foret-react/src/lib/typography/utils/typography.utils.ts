import { css } from '@emotion/core';

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
