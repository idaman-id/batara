import IProvider from '../contracts/interface/Provider';
import Provider from './Provider';
export default class Application extends Provider implements IProvider {
    register(): void;
}
