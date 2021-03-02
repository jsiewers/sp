
let pwaSupport;
let deferredPrompt;

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

window.addEventListener('beforeinstallprompt', function(e){
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
  console.log('Before Install Prompt');
});

window.addEventListener('appinstalled', (event) => {
  // Clear the deferredPrompt so it can be garbage collected
  hideInstallPromotion();
  deferredPrompt = null;
  console.log('👍', 'appinstalled', event);
});


function showInstallPromotion() {
  document.getElementById('aths').style.display = 'block';

}
function hideInstallPromotion() {
  document.getElementById('aths').style.display = 'none';

}



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
                    //document.getElementById('instructions').style.display = 'block';
                    localStorage.setItem('lastShown', now);
                }
            }
        }
    }
};

async function installApp(){
  hideInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;
  // Optionally, send analytics event with outcome of user choice
  console.log(`User response to the install prompt: ${outcome}`);
  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
}



if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
}
