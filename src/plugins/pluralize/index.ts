import rules from './rules';
import { dictionary } from './utils';
import { Locales, Options } from './types';

const Pluralize = (locales?: Locales, options?: Options) => {
  const LOCALE = locales;

  return {
    select: function(value?: number): string {
      const rule = dictionary(LOCALE);
      const pluralRule = rules(rule);

      return pluralRule(value);
    },
  };
};

export default Pluralize;
