import App from '../application';
import IProvider from '../interface/provider.interface';
import Provider from './provider';
export default abstract class Application extends Provider implements IProvider {
    constructor(app: App);
    private doRegister;
}
