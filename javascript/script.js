const dropdown=document.querySelectorAll('.dropdown-submenu > a');

dropdown.forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.nextElementSibling.classList.toggle('show');
    });
});


const button = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        button.classList.add("active")
    }
    else {
        button.classList.remove("active")
    }
});


const links = document.querySelectorAll(".navbar-nav .nav-link");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('color-active');
    }
});

new PureCounter();

AOS.init();