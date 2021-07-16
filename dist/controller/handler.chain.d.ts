interface Handler {
    handle(...args: any): any;
}
export default abstract class BaseHandler implements Handler {
    private next;
    constructor(next: Handler);
    handle(): any;
}
export {};
