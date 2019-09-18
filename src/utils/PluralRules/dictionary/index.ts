const dictionary = (locale?: any) => {
  switch (locale) {
    case 'en':
      return 1;
    case 'ru':
      return 7;
    default:
      return 0;
  }
};

export default dictionary;
