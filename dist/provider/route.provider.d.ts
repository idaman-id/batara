import { Controller } from '../controller';
import IRoute from '../interface/route.interface';
import Provider from './provider';
export default abstract class Route extends Provider {
    register(): void;
    abstract routes(): Array<IRoute>;
    abstract errorHandler(): Controller;
}
