import App from '../entity/application.entity';
import Provider from './provider';
export default abstract class Application extends Provider {
    constructor(app: App);
    register(): void;
    protected abstract registerApp(): void;
    private registerTemplate;
}
