
if('serviceWorker' in navigator){
    pwaSupport = true;
    //register the service worker
    navigator.serviceWorker.register('/sw.js').then(function(result){
        console.log('Service Worker Registered');
        console.log('Scope: ' + result.scope);
        //subscribeToPush();
    }, function(error){
        console.log('Service Worker Registration Failed');
        console.log(error);
    });
}else{
    console.log('Service Workers Not Supported');
}

var installEvt;
window.addEventListener('beforeinstallprompt', function(evt){
    console.log('Before Install Prompt');
    installEvt = evt;
    evt.preventDefault();
    console.log(document.getElementById('aths'));
    document.getElementById('aths').style.display = 'block';
});

function hidePrompt(){
    console.log("hiding.......");
    //console.log(document.getElementById('aths'));
    document.getElementById('aths').style.display = 'none';
}

function installApp(){
    hidePrompt();
    if(installEvt) {
      installEvt.prompt();
      installEvt.userChoice.then(function(result){
          if(result.outcome === 'accepted')
              console.log('App Installed');
          else
              console.log('App Not Installed');
      });
    } else {
      console.log("Beforeinstallprompt event heeft niet plaatsgevonden");
    }
}

window.addEventListener('appinstalled', function(evt){
    console.log('App Installed Event');
    hidePrompt();
});

window.onload = function(){
    console.log("in window onload function, checking pwa support");
    if(pwaSupport){
        console.log("yes pwa support!");
        var p = navigator.platform;
        if(p === 'iPhone' || p === 'iPad' || p === 'iPod'){
            if(!navigator.standalone){
                var lastShown = parseInt(localStorage.getItem('lastShown'));
                var now = new Date().getTime();
                if(isNaN(lastShown) || (lastShown + 1000*60*60*24*7) <= now){
                    document.getElementById('instructions').style.display = 'block';
                    localStorage.setItem('lastShown', now);
                }
            }
        }
    }
};

if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
}
