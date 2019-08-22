import { Instance, Options } from "../types";

export const extend = (
  plugins: Array<(options, module) => void>,
  options: Options,
  module: Instance
): Instance => {
  if (Array.isArray(plugins)) {
    plugins.forEach(plugin => plugin(options, module));
  }

  return module;
};
