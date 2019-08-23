export interface Instance {
  setDefaultValues(values: Value): void;
  setValues(values: Value, localeCode?: string): void;
  setLocale(localeCode: string): void;
  getValue(key: string, params?: Array<any>, cb?: any): any;
  getValues(): Value;
  getLocale(): string | void;
  getValueByKey(key: string): string | undefined;
  hasTranslations(localeCode: string): boolean;
  hasValue(key?: string): boolean;
  clear(): void;
  value(key: string, params?: Array<any>): any;
  interpolate(key: string, params?: Array<any>): any;
  [name: string]: any;
}

export interface Options {
  plugins?: Array<any>;
  [name: string]: any;
}

export interface Value {
  [key: string]: string;
}
