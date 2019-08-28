## i18n-smart

Smart and lightweight module for localization with dynamic storage.

### Features

- Easily expandable
- Easily configurable
- Plugins support
- TypeScript
- React integration (optional)

### Note:
The library always relies on the global `Map` object to handle data storage. For browsers that do not support that, you'll need to include a polyfill, such as core-js:

```javascript
import "core-js/es6/map";
```

### Methods

- `setLocale(localeCode: string): void` - set specified locale for the storage

- `setValues = (values: { [key: string]: string }, localeCode?: string): void` - set translations for the specified locale, if no locale is specified, the previously set locale is used

- `setDefaultValues = (values: Value): void` - set default translations

- `getValue(key: string, params?: Array<any>, cb?: void): any` - get value for interpolation

- `getValues(): { [key: string]: string }` - get all data from storage

- `getLocale(): string | void` - get current locale

- `getValueByKey(key: string): string | undefined` - get raw value by key

- `hasTranslations(localeCode: string): boolean` - check are there translations for the specified locale

- `hasValue(key: string): boolean` - check is there a value in the storage

- `clear(): void` - clear the data storage

- `value(key: string, params: Array<any>): string` - interpolate values with specified parameters

### API

- `configure(options: Options): Instanse` - configure(extends) instance

### Types

```typescript
type Instance = {
  setDefaultValues(values: Value): void;
  setValues(values: Value, localeCode?: string): void;
  setLocale(localeCode: string): void;
  getValue(key: string, params?: Array<any>, cb?: any): any;
  getValues(): Value;
  getLocale(): string | void;
  getValueByKey(key: string): string | undefined;
  hasTranslations(localeCode: string): boolean;
  hasValue(key: string): boolean;
  clear(): void;
  value(key: string, params?: Array<any>): any;
  interpolate(key: string, params?: Array<any>): any;
  [name: string]: any;
};

type Options = {
  plugins?: Array<any>;
  [name: string]: any;
};
```

### Quick start

```
npm i i18n-smart
```

```javascript
import i18n from "i18n-smart";

const locale = 'en';
const values = { 
  "key1": "Some text", 
  "key2": "Some {0} for {1}",
};

i18n.setValues(values, locale);
i18n.value("key1"); // Some text
i18n.value("key2", ["text", "interpolation"]); // Some text for interpolation
```

### Configure example (extends with react plugin)

```
npm i react i18n-smart
```

```javascript
import React from "react";
import i18n, { configure } from "i18n-smart";
import reactInterpolatePlugin from "i18n-smart/lib/plugins/react";

configure({
  plugins: [reactInterpolatePlugin]
});

const values = { "key": "Some {0}"};
const element = <span>text</spam>;

i18n.setDefaultValues(values);
i18n.interpolate('key', [element]) // Some text
```
