
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
    installEvt.prompt();
    installEvt.userChoice.then(function(result){
        if(result.outcome === 'accepted')
            console.log('App Installed');
        else
            console.log('App Not Installed');
    });
}

window.addEventListener('appinstalled', function(evt){
    console.log('App Installed Event');
});

if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
}
