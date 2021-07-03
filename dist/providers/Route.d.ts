import { Controller } from '../contracts/interface';
import IProvider from '../contracts/interface/Provider';
import IRoute from '../contracts/interface/Route';
import Provider from './Provider';
export default abstract class Route extends Provider implements IProvider {
    register(): void;
    abstract routes(): Array<IRoute>;
    abstract errorHandler(): Controller;
}
