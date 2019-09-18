export interface Options {
  localeMatcher?: 'lookup' | 'best fit';
  type?: 'cardinal' | 'ordinal';
}

export type Locales = string | string[] | void;
