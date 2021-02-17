import './views/not-found-view.js';
import './views/index-view.js';
import './views/learningpaths/content-developer-view.js';
import './views/learningpaths/full-stack-developer-view.js';
import './views/courses/course-php-view.js';
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
            path: '/course-php',
            component: 'course-php-view',
        },
        {
            path: '(.*)',
            component: 'not-found-view'
        }
    ]);

}
