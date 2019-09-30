const PARAMS_PATTERN = /{(.*?)}/g;

export const interpolate = (key: string, params?: Array<any>): string => {
  if (key && params && params.length && PARAMS_PATTERN.test(key)) {
    const replacer = (match: string, key: any): string => params[key];

    return key.replace(PARAMS_PATTERN, replacer);
  }

  return key;
};
