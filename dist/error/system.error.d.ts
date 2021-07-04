export default abstract class SystemError extends Error {
    type: string;
    constructor(message: string);
}
