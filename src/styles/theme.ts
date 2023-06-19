import { DefaultTheme } from 'styled-components';

const colors = {
  main: '#56819C',
  sub: '#ABBDD2',
  green: '#00B894',
  red: '#C23E3E',
  white: '#FFFFFF',
  black: '#000000',
};

const shadows = {
  large: `box-shadow: 0px 84px 34px rgba(0, 0, 0, 0.01), 0px 47px 28px rgba(0, 0, 0, 0.03), 0px 21px 21px rgba(0, 0, 0, 0.05), 0px 5px 12px rgba(0, 0, 0, 0.06), 0px 0px 0px rgba(0, 0, 0, 0.06)`,
  small: `box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16)`,
  btnBig: `box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06)`,
  btnSmall: `box-shadow: 0px 1.83814px 1.83814px rgba(50, 50, 71, 0.08), 0px 1.83814px 3.67628px rgba(50, 50, 71, 0.06)`,
};

const center = `
display:flex;
justify-content: center;
align-items: center;
`;

const breakpoints = {
  mobile1: '375px',
  mobile2: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
} as const;

const mediaQuery = (maxWidth: string) => `@media (max-width: ${maxWidth})`;

const media = {
  mobile1: mediaQuery(breakpoints.mobile1),
  mobile2: mediaQuery(breakpoints.mobile2),
  tablet: mediaQuery(breakpoints.tablet),
  laptop: mediaQuery(breakpoints.laptop),
  desktop: mediaQuery(breakpoints.desktop),
} as const;

export type ColorsTypes = typeof colors;
export type ShadowsTypes = typeof shadows;
export type MediaTypes = typeof media;

export const theme: DefaultTheme = {
  colors,
  shadows,
  media,
  center,
};
