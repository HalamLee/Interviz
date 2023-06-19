import 'styled-components';
import { ColorsTypes, ShadowsTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    shadows: ShadowsTypes;
  }
}
