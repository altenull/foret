import { Duration } from './duration';
import { TextStyle } from './test-style';

export interface ForetPayload {
  theme?: any;
  children: React.ReactNode;
}

export interface Theme {
  duration: Duration;
  colors: { [colorInCamelCase: string]: string };
  fontWeights: { [fontWeightInCamelCase: string]: number };
  mediaQueries: { [breakpoint: string]: string };
  textStyles: { [text: string]: TextStyle };
}
