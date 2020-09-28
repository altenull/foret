export const isObject = (target: any) => target && typeof target === 'object' && !Array.isArray(target);

export const deepMerge = (target: any, ...sources: any) => {
  if (!sources.length) {
    return target;
  }

  let copiedTarget = { ...target };

  sources.forEach((source: any) => {
    if (isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key])) {
          copiedTarget[key] = !copiedTarget[key] ? { ...source[key] } : deepMerge(copiedTarget[key], source[key]);
        } else {
          copiedTarget[key] = source[key];
        }
      });
    }
  });

  return copiedTarget;
};
