import i18n, { configure } from '../src';
import pluralPlugin from '../src/plugins/pluralize';

const data = {
  value: 'Some text',
  value2: 'Some text {0}',
  plural: {
    one: '1 Question',
    other: '{0} Questions',
  },
};

configure({
  plugins: [pluralPlugin],
  defaultValues: data,
});

describe('value', () => {
  it('should return exprcted value', () => {
    expect(i18n.value('value')).toEqual('Some text');
  });

  it('should return exprcted value 2', () => {
    expect(i18n.value('value2', [2])).toEqual('Some text 2');
  });
});

describe('pluralize', () => {
  it('should return exprcted value', () => {
    expect(i18n.pluralize('plural', { value: 20 })).toEqual('20 Questions');
  });
});
