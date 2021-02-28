
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
