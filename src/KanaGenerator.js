import { sampleSize, isEmpty } from 'lodash';
import hiragana from './text/hiragana';
import katakana from './text/katakana';

const isNonEmpty = c => !isEmpty(c);

const hiraganaSet = hiragana.split('\n').filter(isNonEmpty);
const katakanaSet = katakana.split('\n').filter(isNonEmpty);

export default {
  generateCharacters(count) {
    return sampleSize(hiraganaSet.concat(katakanaSet), count);
  },
};
