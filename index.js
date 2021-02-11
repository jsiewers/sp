import './views/not-found-view.js';
import './views/index-view.js';
import './views/test-view.js';

import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('main'));

    router.setRoutes([
        {
            path: '/',
            component: 'index-view'
        },
        {
            path: '/test',
            component: 'test-view',
        },
        {
            path: '(.*)',
            component: 'not-found-view'
        }
    ]);

}
