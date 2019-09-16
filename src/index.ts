import { extend } from './services';
import { instance } from './instance';
import { Options, Instance } from './types';

const i18n = instance();

const configure = (options: Options): Instance => {
  const { plugins = [], locale, defaultValues } = options;

  extend(plugins, options, i18n);

  if (locale) i18n.setLocale(locale);
  if (defaultValues) i18n.setDefaultValues(defaultValues);

  return i18n;
};

export { configure };
export default i18n;
