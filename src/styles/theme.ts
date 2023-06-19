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
};

export type ColorsTypes = typeof colors;
export type ShadowsTypes = typeof shadows;

export const theme: DefaultTheme = {
  colors,
  shadows,
};
