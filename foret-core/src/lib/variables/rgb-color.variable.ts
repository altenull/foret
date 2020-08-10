import { Color } from "../enums/color.enum";
import { hexToRgb } from "../functions/hexToRgb";
import { RgbColor } from "../models/rgb-color";

export const rgbColor = Object.keys(Color).reduce(
  (
    acc: {
      [color: string]: RgbColor;
    },
    color: string
  ) => {
    const convertedColor: RgbColor = hexToRgb(Color[color]);

    return {
      ...acc,
      [color]: {
        r: convertedColor.r,
        g: convertedColor.g,
        b: convertedColor.b,
      },
    };
  },
  {}
);
