export const routes = [
{
    path: '/',
    component: 'index-view',
    action: () => import('/views/index-view.js'),
},
{
    path: '/test',
    component: 'test-view',
    action: () => import('/views/test-view.js'),
    label:'Just testing'
},
{
    path: '/content-developer',
    component: 'content-developer-view',
    action: () => import('/views/learningpaths/content-developer-view.js'),
    label:'Content developer'
},
{
    path: '/full-stack-developer',
    component: 'full-stack-developer-view',
    action: () => import('/views/learningpaths/full-stack-developer-view.js'),
    label:'Full stack developer'
},
{
    path: '/frontend-developer',
    component: 'frontend-developer-view',
    action: () => import('/views/learningpaths/frontend-developer-view.js'),
    label:'Frontend developer'
},
{
    path: '/courses',
    component: 'html-intro',
    action: () => import('/views/courses/html/html-intro.js'),
    label:'HTML-5 Cursus'
},
{
    path: '/courses/html-5',
    component: 'html-intro',
    action: () => import('/views/courses/html/html-intro.js'),
    label:'01-HTML-5 Introductie'
},

{
    path: '/courses/html-5/browsers',
    component: 'html-browsers',
    action: () => import('/views/courses/html/html-browsers.js'),
    label:'02-Browsers en HTML'
},
{
    path: '(.*)',
    component: 'not-found-view',
    action: () => import('/views/not-found-view.js')
}

];