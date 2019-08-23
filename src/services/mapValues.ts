export const mapValues = (values: Object): Map<any, any> => {
  const newMap = new Map();

  for (let key in values) {
    if (values.hasOwnProperty(key)) {
      // @ts-ignore
      newMap.set(key, values[key]);
    }
  }

  return newMap;
};
