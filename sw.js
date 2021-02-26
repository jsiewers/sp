console.log("in serviceworker");
//registerSW
//install -- fill cache
//activate -- update of replace cached files claim() / skipWaiting()
//fetch
//add to homescreen - beforeInstallPromptEvent

var cacheName = 'CSv4';
var cachedFiles = [
  '/',
  '/index.html',
  '/index.js',
  '/manifest.webmanifest',
  '/styles/fontawesome.css',
  '/styles/index.css',
  '/styles/main-styles.js',
  '/styles/prism.css'
];
self.addEventListener('install', function(evt){
    console.log('Service Worker Install Event');
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
    console.log('Fetch Event' + evt.request.url);
    evt.respondWith(
       caches.match(evt.request).then(function(response){
           return response || fetch(evt.request);
       })
    );
});
