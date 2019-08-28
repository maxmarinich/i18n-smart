export const mapValues = (values: { [key: string]: any }): Map<any, any> => {
  const newMap = new Map();

  for (let key in values) {
    if (values.hasOwnProperty(key)) {
      newMap.set(key, values[key]);
    }
  }

  return newMap;
};
