import { LanguageCode as LANGUAGE_CODE } from '../configs/Constant';

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