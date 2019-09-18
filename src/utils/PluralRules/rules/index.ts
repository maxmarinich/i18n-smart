// List of Plural Rules
// https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals
import { endsIn } from '../services';
import { ONE, FEW, OTHER } from '../constants';

/*
Asian (Chinese, Japanese, Korean), Persian, Turkic/Altaic (Turkish), Thai, Lao
 */
const rule0 = (value: number) => {
  return OTHER;
};

/*
Germanic (Danish, Dutch, English, Faroese, Frisian, German, Norwegian, Swedish), Finno-Ugric (Estonian, Finnish, Hungarian), Language isolate (Basque), Latin/Greek (Greek), Semitic (Hebrew), Romanic (Italian, Portuguese, Spanish, Catalan), Vietnamese
*/
const rule1 = (value: number) => {
  return value === 1 ? ONE : OTHER;
};

/*
Belarusian, Russian, Ukrainian
 */
const rule7 = (value: number) => {
  const exclude = [11, 12, 13, 14];

  if (exclude.includes(value)) return OTHER;
  if (endsIn(value, [1])) return ONE;
  if (endsIn(value, [2, 3, 4])) return FEW;

  return OTHER;
};

const rules = [rule0, rule1, rule0, rule0, rule0, rule0, rule0, rule7];

export default (rule: number): Function => {
  return rules[rule] || rules[0];
};
