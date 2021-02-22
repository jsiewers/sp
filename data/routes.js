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
    component: 'course-index',
    action: () => import('/views/courses/course-index.js'),
    label:'Alle cursussen'
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
    path: '/courses/git',
    component: 'git-intro',
    action: () => import('/views/courses/git/git-intro.js'),
    label:'Starten met Git'
},
{
    path: '/courses/git/git-installeren',
    component: 'git-installeren',
    action: () => import('/views/courses/git/git-installeren.js'),
    label:'Opdracht 1: Git installeren'
},
{
    path: '/courses/git/git-commit',
    component: 'git-commit',
    action: () => import('/views/courses/git/git-commit.js'),
    label:'Opdracht 2: Een Git repository beheren'
},
{
    path: '(.*)',
    component: 'not-found-view',
    action: () => import('/views/not-found-view.js')
}

];
