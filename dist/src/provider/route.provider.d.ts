import { Controller } from '../controller';
import IProvider from '../interface/provider.interface';
import IRoute from '../interface/route.interface';
import Provider from './provider';
export default abstract class Route extends Provider implements IProvider {
    register(): void;
    abstract routes(): Array<IRoute>;
    abstract errorHandler(): Controller;
}
