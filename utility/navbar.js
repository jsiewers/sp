

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

var menuOpener = document.getElementById('menu-opener');
var menu = document.getElementById('navbar-menu');
var menuItems = document.getElementsByClassName('menu-item');
var oldMenuItems = [];
var oldClass = menu.className;
var oldMenuClass = menu.className;

window.onresize = function() {
    checkIfItsDone = false;
    if (document.body.clientWidth > 600 && !checkIfItsDone) {
        /* Things to do */
        for (var i = 0; i < menuItems.length; i++) {
            this.menuItems[i].style = this.oldMenuItems[i];
        }
        this.menu.className = oldClass;
        this.menu.removeAttribute("style");
        this.menuOpener.className = "fas fa-bars fa-1x";
        /* Done */
        checkIfItsDone = true;
    }
};

// window.onscroll = function () {
//     console.log("scrolling");
//      makeNavbarStick()
// };

menuOpener.addEventListener('click', function () {
    console.log("menu-opener was clicked!");
    if (this.className === "fas fa-bars fa-1x") {
        this.className = "fas fa-times fa-1x";
        menu.style.display = "block";
        menu.className = "navbar-menu-sm";
        console.log(document.getElementById('navbar-menu').className);
        for (var i = 0; i < menuItems.length; i++) {
            oldMenuItems[i] = menuItems[i].style;
            menuItems[i].style.display = "block";
        }

    } else {
        this.className = "fas fa-bars fa-1x";
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style = oldMenuItems[i];
        }
        menu.className = oldMenuClass;
        menu.style.display = "none";
    }
});

function makeNavbarStick() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
