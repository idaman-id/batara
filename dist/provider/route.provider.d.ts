import { Handler } from '../router/http.interface';
import IRoute from '../router/route.interface';
import Provider from './provider';
export default abstract class Route extends Provider {
    abstract routes(): Array<IRoute>;
    abstract errorHandler(): Handler;
    protected abstract registerRoute(): void;
    register(): void;
    private registerTemplate;
}
