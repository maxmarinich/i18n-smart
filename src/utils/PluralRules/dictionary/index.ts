const dictionary = (locale?: any) => {
  switch (locale) {
    case 'zh':
    case 'ja':
    case 'ko':
    case 'tr':
    case 'th':
    case 'lo':
      return 0;
    case 'da':
    case 'nl':
    case 'en':
    case 'fo':
    case 'de':
    case 'nb':
    case 'nn':
    case 'sv':
    case 'et':
    case 'fi':
    case 'hu':
    case 'eu':
    case 'el':
    case 'he':
    case 'it':
    case 'pt':
    case 'es':
    case 'ca':
    case 'vi':
      return 1;
    case 'ru':
    case 'be':
    case 'uk':
      return 7;
    default:
      return 0;
  }
};

export default dictionary;
