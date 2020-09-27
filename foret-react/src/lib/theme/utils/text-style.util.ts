import { Color, FontWeight } from '@altenull/foret-core';
import { TextStyle } from '../models/test-style';

export const heading1: TextStyle = {
  fontWeight: FontWeight.Light,
  fontSize: '72px',
  color: Color.Ink,
  lineHeight: 1.25,
  letterSpacing: '-1.2px',
};

export const heading2: TextStyle = {
  fontWeight: FontWeight.SemiBold,
  fontSize: '48px',
  color: Color.Ink,
  lineHeight: 1.375,
  letterSpacing: '-0.25px',
};

export const heading3: TextStyle = {
  fontWeight: FontWeight.Regular,
  fontSize: '36px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '-0.5px',
};

export const paragraph: TextStyle = {
  fontWeight: FontWeight.Regular,
  fontSize: '20px',
  color: Color.Ink,
  lineHeight: 1.8,
  letterSpacing: '0',
};

export const smallText: TextStyle = {
  fontWeight: FontWeight.Light,
  fontSize: '15px',
  color: Color.Ink,
  lineHeight: 1.35,
  letterSpacing: '0.8px',
};

export const subtitle1: TextStyle = {
  fontWeight: FontWeight.Light,
  fontSize: '18px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '0.5px',
};

export const subtitle2: TextStyle = {
  fontWeight: FontWeight.SemiBold,
  fontSize: '16px',
  color: Color.Ink,
  lineHeight: 1.5,
  letterSpacing: '0.25px',
};

export const createTextStyles: () => { [text: string]: TextStyle } = () => ({
  heading1,
  heading2,
  heading3,
  paragraph,
  smallText,
  subtitle1,
  subtitle2,
});
