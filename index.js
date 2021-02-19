import './views/not-found-view.js';
import './views/index-view.js';
import './views/learningpaths/content-developer-view.js';
import './views/learningpaths/full-stack-developer-view.js';
import './views/learningpaths/frontend-developer-view.js';
import './views/courses/html/html-index.js';
import './views/courses/html/html-intro.js';
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
            path: '/content-developer',
            component: 'content-developer-view',
        },
        {
            path: '/full-stack-developer',
            component: 'full-stack-developer-view',
        },
        {
            path: '/frontend-developer',
            component: 'frontend-developer-view',
        },
        {
            path: '/course/html',
            component: 'html-index',
        },
        {
            path: '/course/html/intro',
            component: 'html-intro',
        },
        {
            path: '(.*)',
            component: 'not-found-view'
        }
    ]);
}
