import { extend } from './services';
import { instance } from './instance';
import { Options, Instance } from './types';

const i18n = instance();

const configure = (options: Options): Instance => {
  const { plugins = [] } = options;
  extend(plugins, options, i18n);

  return i18n;
};

export { configure };
export default i18n;
