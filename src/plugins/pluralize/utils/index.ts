export const endsIn = (value: number, params: Array<number> = []): boolean => {
  const endChar = String(value).slice(-1);

  return params.includes(Number(endChar));
};

export const dictionary = (locale?: any) => {
  switch (locale) {
    case 'en':
      return 1;
    case 'ru':
      return 7;
    default:
      return 0;
  }
};
