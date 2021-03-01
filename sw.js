

  var cacheName = 'CSv8447';

  var cachedFiles = ['/aths.js',
'/components/add-to-home-screen.js',
'/components/article-element.js',
'/components/article-head.js',
'/components/bread-crumbs.js',
'/components/card-element.js',
'/components/card-panel.js',
'/components/checked-item.js',
'/components/code-element.js',
'/components/course-element.js',
'/components/fa-icon.js',
'/components/link-item.js',
'/components/list-item.js',
'/components/my-element.js',
'/components/nav-bar.js',
'/components/nav-link.js',
'/components/photo-card.js',
'/components/tag-element.js',
'/components/test-element.js',
'/components/video-element.js',
'/data/courses.js',
'/data/external-routes.js',
'/data/routes.js',
'/fonts/fa-brands-400.svg',
'/fonts/fa-regular-400.svg',
'/fonts/fa-solid-900.svg',
'/img/android/edutorial-icon-128.png',
'/img/android/edutorial-icon-16.png',
'/img/android/edutorial-icon-160.png',
'/img/android/edutorial-icon-192.png',
'/img/android/edutorial-icon-256.png',
'/img/android/edutorial-icon-32.png',
'/img/android/edutorial-icon-384.png',
'/img/android/edutorial-icon-48.png',
'/img/android/edutorial-icon-512.png',
'/img/android/edutorial-icon-96.png',
'/img/courses/course_all_head.svg',
'/img/courses/course_css3.svg',
'/img/courses/course_git.svg',
'/img/courses/course_git_head.svg',
'/img/courses/course_github.svg',
'/img/courses/course_html5.svg',
'/img/courses/course_html5_head.svg',
'/img/courses/course_javascript.svg',
'/img/courses/course_linux.svg',
'/img/courses/course_linux_pro.svg',
'/img/courses/course_mysql.svg',
'/img/courses/course_mysql_design.svg',
'/img/courses/course_php8_beginners.svg',
'/img/courses/course_php_oo.svg',
'/img/courses/course_scrum.svg',
'/img/courses/course_seo.svg',
'/img/courses/course_slim.svg',
'/img/courses/course_webcomponents.svg',
'/img/courses/course_wp.svg',
'/img/courses/course_wp_php.svg',
'/img/courses/learningpath_mid.svg',
'/img/courses/learningpath_top.svg',
'/img/frontpage/content-developer.svg',
'/img/frontpage/frontend-developer.svg',
'/img/frontpage/full-stack-developer.svg',
'/img/frontpage/game-developer.svg',
'/img/frontpage/interaction-designer.svg',
'/img/ios/apple-launch-1000x2000.png',
'/img/ios/apple-launch-1080x1920.png',
'/img/ios/apple-launch-1125x2436.png',
'/img/ios/apple-launch-1136x640.png',
'/img/ios/apple-launch-1170x2532.png',
'/img/ios/apple-launch-1242x2688.png',
'/img/ios/apple-launch-1284x2778.png',
'/img/ios/apple-launch-1334x750.png',
'/img/ios/apple-launch-1536x2048.png',
'/img/ios/apple-launch-1620x2160.png',
'/img/ios/apple-launch-1668x2224.png',
'/img/ios/apple-launch-1668x2388.png',
'/img/ios/apple-launch-1792x828.png',
'/img/ios/apple-launch-180x180.png',
'/img/ios/apple-launch-1920x1080.png',
'/img/ios/apple-launch-2000x1000.png',
'/img/ios/apple-launch-2048x1536.png',
'/img/ios/apple-launch-2048x2732.png',
'/img/ios/apple-launch-2160x1620.png',
'/img/ios/apple-launch-2224x1668.png',
'/img/ios/apple-launch-2388x1668.png',
'/img/ios/apple-launch-2436x1125.png',
'/img/ios/apple-launch-2532x1170.png',
'/img/ios/apple-launch-2688x1242.png',
'/img/ios/apple-launch-2732x2048.png',
'/img/ios/apple-launch-2778x1284.png',
'/img/ios/apple-launch-640x1136.png',
'/img/ios/apple-launch-750x1334.png',
'/img/ios/apple-launch-828x1792.png',
'/img/ios/edutorial-splash.png',
'/img/ios/edutorial-splash.svg',
'/img/layout/edutorial-icon-orange-bg-white.svg',
'/img/layout/edutorial-icon-orange.svg',
'/img/layout/edutorial-orange-white.svg',
'/img/layout/edutorial-orange.svg',
'/img/learningpaths/frontend-developer.svg',
'/img/learningpaths/full-stack-developer.svg',
'/img/learningpaths/index-developer.svg',
'/index.html',
'/index.js',
'/snowpack.config.js',
'/styles/fontawesome.css',
'/styles/index.css',
'/styles/main-styles.js',
'/styles/prism.css',
'/sw.js',
'/utility/copy-to-clipboard.js',
'/utility/navbar.js',
'/utility/prism/prism.css',
'/utility/prism/prism.js',
'/views/base-view.js',
'/views/courses/course-index.js',
'/views/courses/git/git-commit.js',
'/views/courses/git/git-installeren.js',
'/views/courses/git/git-intro.js',
'/views/courses/git/git-workflow.js',
'/views/courses/html/html-browsers.js',
'/views/courses/html/html-intro.js',
'/views/courses/php/course-php-view.js',
'/views/index-view.js',
'/views/learningpaths/base-learningpath-view.js',
'/views/learningpaths/content-developer-view.js',
'/views/learningpaths/frontend-developer-view.js',
'/views/learningpaths/frontend-developer.html',
'/views/learningpaths/full-stack-developer-view.js',
'/views/learningpaths/full-stack-developer.svg',
'/views/not-found-view.js',
'/views/test-view.js',
];
console.log("in serviceworker");

self.addEventListener('install', function(evt){
    //console.log('Service Worker Install Event');
    //Add the file to the cache
    evt.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('Caching Files');
            return cache.addAll(cachedFiles);
        }).then(function(){
            return self.skipWaiting();
        }).catch(function(err){
            console.log('Cache Failed', err);
        })
    );
});

self.addEventListener('activate', function(evt){
    console.log('Service Worker Activated');
    evt.waitUntil(
       caches.keys().then(function(keyList){
           return Promise.all(keyList.map(function(key){
               if(key !== cacheName){
                   console.log('Removing Old Cache', key);
                   return caches.delete(key)
               }
           }));
       })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(evt){
    //console.log('Fetch Event' + evt.request.url);
    evt.respondWith(
       caches.match(evt.request).then(function(response){
           return response || fetch(evt.request);
       })
    );
});
