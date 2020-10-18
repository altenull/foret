/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { ForetPayload } from './models/theme';
import { createTheme } from './utils/theme.util';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    unicode-range: U+AC00-D7A3;
  }
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    unicode-range: U+AC00-D7A3;
  }

  body {
    font-family: 'Overpass', 'IBMPlexSansKR', sans-serif;
  }
`;

const Foret = ({ theme, children }: ForetPayload) => {
  const mergedTheme = createTheme(theme);

  return (
    <ThemeProvider theme={mergedTheme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default Foret;
