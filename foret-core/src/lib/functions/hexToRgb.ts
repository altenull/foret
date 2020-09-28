import { RgbColor } from "../models/rgb-color";

/**
 * Converts a hex color to rgb
 *
 * @example hexToRgb('#2e8b57') => { r: 46, g: 139, b: 87 }
 *
 * @param {string} hex The color to transform to rgb
 *
 * @returns {RgbColor} The color in rgb object
 */
export const hexToRgb = (hex: string): RgbColor => {
  const rgbArray = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r: string, g: string, b: string) => `#${r}${r}${g}${g}${b}${b}`
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x: string) => parseInt(x, 16));

  return {
    r: rgbArray[0],
    g: rgbArray[1],
    b: rgbArray[2],
  };
};
