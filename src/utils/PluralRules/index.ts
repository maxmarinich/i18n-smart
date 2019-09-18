import rules from './rules';
import dictionary from './dictionary';
import { Locales, Options } from './types';

const PluralRules = (locales?: Locales, options?: Options) => {
  const LOCALE = locales;

  return {
    select: function(value?: number): string {
      const ruleIndex = dictionary(LOCALE);
      const pluralRule = rules(ruleIndex);

      return pluralRule(value);
    },
  };
};

export default PluralRules;
