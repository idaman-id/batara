import { Handler } from '../router/http.interface';
import RouteItem from '../router/route.interface';
import Provider from './provider';
export default abstract class Route extends Provider {
    abstract routes(): Array<RouteItem>;
    abstract errorHandler(): Handler;
    protected abstract registerRoute(): void;
    register(): void;
    private registerTemplate;
}
