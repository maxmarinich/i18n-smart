import * as services from "../services";
import { LOCALE, DEFAULT } from "./constants";
import { Value, Instance } from "../types";

const STORE: Map<any, any> = new Map();

const setLocale = (localeCode: string): void => {
  STORE.set(LOCALE, localeCode);
};

const setValues = (values: Value, localeCode?: string): void => {
  localeCode && setLocale(localeCode);

  const locale = getLocale();
  const items = services.mapValues(values);
  STORE.set(locale, items);
};

const setDefaultValues = (values: Value): void => {
  const items = services.mapValues(values);
  STORE.set(DEFAULT, items);
};

const getValue = (key: string, params?: Array<any>, cb?: any): any => {
  const value = getValueByKey(key);

  if (value) {
    const interpolate =
      (typeof cb === "function" && cb) || services.interpolate;

    return interpolate(value, params);
  }
  console.warn("i18n.value: undefined key:", key);

  return key;
};

const getValueByKey = (key: string): string | undefined => {
  const translations = getTranslations();
  const defaultTranslations = getDefaultTranslations();

  return defaultTranslations.get(key) || translations.get(key);
};

const getDefaultTranslations = (): Map<any, any> => {
  return STORE.get(DEFAULT) || new Map();
};

const getTranslations = (localeCode?: string): Map<any, any> => {
  const locale = localeCode || getLocale();

  return STORE.get(locale) || new Map();
};

const getValues = (): Value => {
  return services.unmapValues(STORE);
};

const getLocale = (): string | void => {
  return (
    STORE.get(LOCALE) || console.warn("i18n-smart: `locale` has not been initialized")
  );
};

const hasTranslations = (localeCode: string): boolean => {
  return Boolean(STORE.get(localeCode));
};

const clear = (): void => {
  STORE.clear();
};

const interfaces = {
  interpolate: (key: string, params?: Array<any>) => getValue(key, params),
  value: (key: string, params?: Array<string>) => getValue(key, params)
};

export const instance: Instance = {
  setDefaultValues,
  setValues,
  setLocale,
  getValue,
  getValues,
  getLocale,
  getValueByKey,
  hasTranslations,
  clear,
  ...interfaces
};
