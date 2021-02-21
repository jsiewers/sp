import './views/not-found-view.js';
import './views/index-view.js';
import { routes } from './data/routes.js';
import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('main'));

    router.setRoutes(routes);
}
