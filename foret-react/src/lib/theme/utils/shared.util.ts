export const toCamelCase = (value: string) => {
  if (value.length <= 1) {
    return value.toLowerCase();
  } else {
    return `${value.substring(0, 1).toLowerCase()}${value.substring(1)}`;
  }
};
