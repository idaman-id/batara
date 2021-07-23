import App from '../entity/application.entity';
import IProvider from '../contract/provider.interface';
export default abstract class Provider implements IProvider {
    protected app: App;
    constructor(app: App);
    abstract register(): void;
}
