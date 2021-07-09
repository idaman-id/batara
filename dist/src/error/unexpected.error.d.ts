import SystemError from "./system.error";
export default class UnexpectedError extends SystemError {
    constructor(message: string);
}
