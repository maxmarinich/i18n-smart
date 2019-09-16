export interface Instance {
  setDefaultValues(values: Value): void;
  setValues(values: Value, localeCode?: string): void;
  setLocale(localeCode: string): void;
  getValue(key: string, params?: Array<any>, cb?: any): any;
  getValues(): Value;
  getLocale(): string | void;
  getValueByKey(key: string): string | void;
  hasTranslations(localeCode: string): boolean;
  hasValue(key: string): boolean;
  clear(): void;
  value(key: string, params?: Array<any>): string;
  interpolate(key: string, params?: Array<any>): any;
  pluralize(key: string, options?: PluralizeOptions): any;
  [name: string]: any;
}

export interface Options {
  plugins?: Plugins;
  locale?: string;
  defaultValues?: Value;
  [name: string]: any;
}

export interface Value {
  [key: string]: any;
}

export interface PluralizeOptions {
  value: number;
}

export type Plugins = Array<(options: Options, module: Instance) => void>;
