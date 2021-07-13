import { Controller } from '../controller';
import IRoute from '../interface/route.interface';
import Provider from './provider';
export default abstract class Route extends Provider {
    abstract routes(): Array<IRoute>;
    abstract errorHandler(): Controller;
    register(): void;
    protected abstract registerRoute(): void;
    private registerTemplate;
}
