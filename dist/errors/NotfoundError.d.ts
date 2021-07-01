import SystemError from "./SystemError";
export default class NotfoundError extends SystemError {
    constructor(message: string);
}
