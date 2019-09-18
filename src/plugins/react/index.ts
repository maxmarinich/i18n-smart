import reactInterpolate from 'react-interpolate-plugin';

import { Options, Instance } from '../../types';

export default (options: Options, instance: Instance) => {
  instance.interpolate = function interpolateExtended(key, params) {
    return instance.getValue(key, params, reactInterpolate);
  };
};
