import 'styled-components';
import { ColorsTypes, ShadowsTypes } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    shadows: ShadowsTypes;
  }
}
