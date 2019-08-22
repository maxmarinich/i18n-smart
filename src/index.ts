import { extend } from './services';
import { instance } from './instance';
import { Options } from './types';

const configure = (options: Options): any => {
  const { plugins = [] } = options;
  extend(plugins, options, instance);

  return instance;
};

export { configure };
export default instance;
