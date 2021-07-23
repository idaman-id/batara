export default interface Factory<Result> {
    make(...args: any): Result;
}
