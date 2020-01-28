import { sample, isEmpty, fill } from 'lodash';
import hiragana from './text/hiragana';
import katakana from './text/katakana';

const isNonEmpty = c => !isEmpty(c);

const hiraganaSet = hiragana.split('\n').filter(isNonEmpty);
const katakanaSet = katakana.split('\n').filter(isNonEmpty);
const kanaSet = hiraganaSet.concat(katakanaSet);

export default {
  generateCharacters(count, symbols) {
    let characterSet = kanaSet;
    const characters = fill(new Array(count), undefined);

    if (symbols === 'hiragana') {
      characterSet = hiraganaSet;
    } else if (symbols === 'katakana') {
      characterSet = katakanaSet;
    }

    return characters.map(() => sample(characterSet));
  },
};
