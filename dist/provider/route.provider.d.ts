import { Handler } from '../interface/http.interface';
import IRoute from '../interface/route.interface';
import Provider from './provider';
export default abstract class Route extends Provider {
    abstract routes(): Array<IRoute>;
    abstract errorHandler(): Handler;
    protected abstract registerRoute(): void;
    register(): void;
    private registerTemplate;
}
