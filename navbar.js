window.onscroll = function() {
    myFunction();
};

var navbar = document.getElementById("navbar");

function myFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}




document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("pop-up");
        } else {
            navbar.classList.remove("pop-up");
        }
    });
});

