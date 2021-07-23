export default interface Command<Result> {
    execute(...args: any): Result;
}
