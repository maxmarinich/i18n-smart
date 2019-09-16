import i18n, { configure } from '../src';
import pluralPlugin from '../src/plugins/plural';

const data = {
  translation: {
    one: '1 Question',
    other: '{0} Questions',
  },
};

configure({
  plugins: [pluralPlugin],
  defaultValues: data,
});

describe('pluralize', () => {
  it('should exist', () => {
    expect(i18n.pluralize('translation', { value: 20 })).toEqual('20 Questions');
  });
});
