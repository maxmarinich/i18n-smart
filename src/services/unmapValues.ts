import { Value } from '../types';

export const unmapValues = (mapObject: Map<any, any>): Value => {
  const values: Value = {};

  for (const item of mapObject) {
    const [key, value] = item;

    values[key] = value instanceof Map ? unmapValues(value) : value;
  }

  return values;
};
