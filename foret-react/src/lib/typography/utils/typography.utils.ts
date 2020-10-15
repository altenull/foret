import { css } from '@emotion/core';
import {
  heading1,
  heading2,
  heading3,
  paragraph,
  smallText,
  subtitle1,
  subtitle2
} from '../../theme/utils/text-style.util';
import { defaultTheme } from '../../theme/utils/theme.util';

// https://meyerweb.com/eric/tools/css/reset/
export const resetTypography = css({
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
});

export const setFontFace = () => {
  return css`
    @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

    @font-face {
      font-family: 'IBMPlexSansKR';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      unicode-range: U+AC00- U+D7A3;
    }
    @font-face {
      font-family: 'IBMPlexSansKR';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff')
        format('woff');
      font-weight: 400;
      font-style: normal;
      unicode-range: U+AC00- U+D7A3;
    }
    @font-face {
      font-family: 'IBMPlexSansKR';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff') format('woff');
      font-weight: 600;
      font-style: normal;
      unicode-range: U+AC00- U+D7A3;
    }

    font-family: 'Overpass', 'IBMPlexSansKR', sans-serif;
  `;
};

export const heading1Styles = css(resetTypography, setFontFace(), heading1 as any);
export const heading2Styles = css(resetTypography, setFontFace(), heading2 as any);
export const heading3Styles = css(resetTypography, setFontFace(), heading3 as any);
export const paragraphStyles = css(resetTypography, setFontFace(), paragraph as any);
export const smallTextStyles = css(resetTypography, setFontFace(), smallText as any);
export const subtitle1Styles = css(resetTypography, setFontFace(), subtitle1 as any);
export const subtitle2Styles = css(resetTypography, setFontFace(), subtitle2 as any);

export const getResponsiveTypographyStyles = (fontSize: string) => css`
  font-size: ${Math.round(parseInt(fontSize, 10) * 0.8)}px;

  ${defaultTheme.mediaQueries.viewPort9} {
    font-size: ${fontSize};
  }
`;