import { ValidationError } from "./contract.type";
import Factory from "../contract/factory.interface";
import ValidationLanguage from './validation-language.interface';
export default class ErrorTranslation implements Factory<Array<ValidationError>> {
    /**
     * @description
     *  Translate error list if there's translation available,
     *  otherwise use the default translation or it's original value
     */
    make(language: ValidationLanguage, errors: Array<ValidationError>): Array<ValidationError>;
    private static translate;
    /**
     * @description
     * Replace field with `.*.` if it's array pattern, e.g:
     * - attachments[m]file_id => attachments.*.file_id
     * - users[m]attachments[n]file_id => users.*.attachments.*.file_id
     */
    private static replaceFieldName;
    /**
     * @description
     * Replace `:attribute` with default or custom translation (if any)
     */
    private static replaceMessageAttribute;
    /**
     * @description
     * Replace `:value` with default or custom translation (if any)
     */
    private static replaceMessageValue;
}
