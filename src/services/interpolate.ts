const PARAMS_PATTERN = /{(.*?)}/g;

export const interpolate = (key: string, params?: Array<any>): string => {
  if (key && params && PARAMS_PATTERN.test(key)) {
    const replacer = (match: string, key: any): string => params[key] || match;

    return key.replace(PARAMS_PATTERN, replacer);
  }

  return key;
};
