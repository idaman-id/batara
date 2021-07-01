import SystemError from "./SystemError";
export default class UnauthorizeError extends SystemError {
    constructor(message: string);
}
