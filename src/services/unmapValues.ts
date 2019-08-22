import { Value } from "../types";

export const unmapValues = (mapObject): Value => {
  const values = {};

  for (let [key, value] of mapObject) {
    values[key] = value instanceof Map ? unmapValues(value) : value;
  }

  return values;
};
