//mostrar menu
const $nav = document.querySelector(".nav");
const $close = document.querySelector(".nav-close");
const $open = document.querySelector(".nav-toggle");

$open.addEventListener("click", () => {
    $nav.classList.add("show-menu");
});

$close.addEventListener("click", () => {
    $nav.classList.remove("show-menu");
});

/* remver el menu al escoger una opcion */
const navlist = document.querySelectorAll(".nav-link");

function removerMenu() {
    $nav.classList.remove("show-menu");
}

navlist.forEach((n) => n.addEventListener("click", removerMenu));

//cambiar la actividad de link
const linkColor = document.querySelectorAll(".nav-link");

function colorlink() {
    if (colorlink) {
        linkColor.forEach((i) => {
            i.classList.remove("active");
            this.classList.add("active");
        });
    }
}

linkColor.forEach((i) => {
    i.addEventListener("click", colorlink);
});
