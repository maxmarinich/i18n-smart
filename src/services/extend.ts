import { Instance, Options, Plugins } from '../types';

export const extend = (plugins: Plugins, options: Options, module: Instance): Instance => {
  if (Array.isArray(plugins)) {
    plugins.forEach((plugin) => {
      if (typeof plugin === 'function') plugin(options, module);
    });
  }

  return module;
};
