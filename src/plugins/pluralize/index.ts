import PluralRules from '../../utils/PluralRules';
import { interpolate } from '../../services';
import { Options, Instance, PluralizeOptions } from '../../types';

export default (options: Options, instance: Instance) => {
  instance.pluralize = function pluralizeExtended(key: any, props?: PluralizeOptions): string {
    const value = props && props.value;
    const locale = instance.getLocale();
    const keys = instance.getValue(key);

    const Pluralize = PluralRules(locale);
    const select = Pluralize.select(props && props.value);

    return interpolate(keys[select], [value]);
  };
};
