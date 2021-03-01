
<?php
$paths = getDirContents(dirname(__FILE__));
cachedFileList($paths, dirname(__FILE__));
createServiceWorker();

function getDirContents($dir, &$results = [])
{
  $exclude_files = [".gitignore", ".DS_Store"];
  $exclude_dirs = [".", "..", "node_modules","public_html",".git", ".idea"];
  $include_ext = ["html", "js", "svg","png","css"];
  $items = array_diff(array_diff(scandir($dir), $exclude_files), $exclude_dirs);
  foreach($items as $item) {
    $path = realpath($dir . DIRECTORY_SEPARATOR . $item);
    if (is_dir($path)) {
        getDirContents($path, $results);
    } else {
      if (isset(pathinfo($path)['extension']) && in_array(pathinfo($path)['extension'], $include_ext)) {
        $results[] = $path;
      }
    }
  }
  return $results;
}

function cachedFileList($paths, $webdir) {
  $list = "
  var cacheName = 'CSv".rand(1000,9999)."';\n
  var cachedFiles = [";
  foreach($paths as $path) {
    $list .= "'".str_replace($webdir, "", $path)."',\n";
  }
  echo $list."];";
}

function createServiceWorker() {
  echo <<<EOT

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

  EOT;
}

//print_r(getDirContents('/path/to/dir'));

//getDirContents(dirname(__FILE__));
?>
