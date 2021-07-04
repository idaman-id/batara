import IProvider from '../interface/provider.interface';
import Provider from './provider';
export default class Application extends Provider implements IProvider {
    register(): void;
}
