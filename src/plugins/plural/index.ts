import Pluralize from '../pluralize';
import { interpolate } from '../../services';

import { Options, Instance, PluralizeOptions } from '../../types';

export default (options: Options, instance: Instance) => {
  instance.pluralize = function pluralizeExtended(key: any, props?: PluralizeOptions): string {
    let Plural;
    const value = props && props.value;
    const locale = instance.getLocale();
    const keys = instance.getValue(key);

    Plural = Pluralize(locale);
    const select = Plural.select(props && props.value);

    return interpolate(keys[select], [value]);
  };
};
