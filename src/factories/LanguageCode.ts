
import { LanguageCode as LANGUAGE_CODE } from '../contracts/constant/Language';

export default class LanguageCode
{

  make(code: string): LANGUAGE_CODE
  {
    if (code === LANGUAGE_CODE.ENGLISH) {
      return LANGUAGE_CODE.ENGLISH;
    }
    return LANGUAGE_CODE.INDONESIAN;
  }

}