import React from 'react';

const PARAMS_TEST_PATTERN = /{(.*?)}/g;
const PARAMS_MATCH_PATTERN = /{*[^{}]+}*/g;
const MARKER_TEST_PATTERN = /{\d{1,}}/;
const MARKER_REPLACE_PATTERN = /[{}]/g;

export default (options, instance) => {
  instance.interpolate = function interpolateExtended(key, params) {
    return instance.getValue(key, params, interpolateReact);
  };
};

const interpolateReact = (message = '', params = []) => {
  if (message && params && PARAMS_TEST_PATTERN.test(message)) {
    const values = message.match(PARAMS_MATCH_PATTERN);

    return values.reduce((acc, item, i) => {
      const fragment = isMarker(item) ? createFragment(params, item, i) : item;

      if (acc.length && isPrimitive(fragment)) mergeFragments(acc, fragment);
      else acc.push(fragment);

      return acc;
    }, []);
  }

  return message;
};

const mergeFragments = (fragments, current) => {
  const last = fragments.pop();

  if (isPrimitive(last)) fragments.push(`${last}${current}`);
  else [].push.apply(fragments, [last, current]);
};

const createFragment = (params, item, key) => {
  const index = item.replace(MARKER_REPLACE_PATTERN, '');
  const fragment = params[index];

  if (React.isValidElement(fragment)) {
    return <React.Fragment key={key}>{fragment}</React.Fragment>;
  }

  return fragment;
};

const isMarker = (item) => {
  return MARKER_TEST_PATTERN.test(item);
};

const isPrimitive = (item) => {
  return typeof item === 'string' || typeof item === 'number';
};
