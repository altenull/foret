import { Breakpoint } from '../enums/breakpoint.enum';

const transformMinWidthToMediaQuery = (minWidth: string) => `@media screen and (min-width:${minWidth})`;

export const createMediaQueries = () => {
  // Breakpoint references
  // https://dev.to/rstacruz/what-media-query-breakpoints-should-i-use-292c
  // https://flaviocopes.com/css-breakpoints/
  const breakpointMinWidthMap = {
    [Breakpoint.ViewPort4]: '480px', // mobile(landscape) ~ tablet(portrait)
    [Breakpoint.ViewPort9]: '992px', // tablet(landscape) ~ desktop
    [Breakpoint.ViewPort12]: '1200px', // fullhd ~
  };

  return Object.keys(Breakpoint).reduce((acc, key) => {
    return {
      ...acc,
      [Breakpoint[key]]: transformMinWidthToMediaQuery(breakpointMinWidthMap[Breakpoint[key]]),
    };
  }, {});
};
