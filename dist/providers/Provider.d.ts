import App from '../Application';
import IProvider from '../contracts/interface/Provider';
export default abstract class Provider implements IProvider {
    app: App;
    constructor(app: App);
    abstract register(): void;
}
