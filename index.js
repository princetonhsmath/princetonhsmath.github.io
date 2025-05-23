document.addEventListener("DOMContentLoaded", setTimeout.bind(this, () => document.body.classList.remove("hidden"), 50));

document.addEventListener("DOMContentLoaded", setTimeout.bind(this, () => {
    if (!window.location.hash) return;
    document.querySelector(window.location.hash).scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}, 500));

document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", () => {
        el.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setTimeout(() => { window.location.hash = el.id; }, 10);
    });
});

let pastTop = false;
const updateNav = () => {
    const below = (document.documentElement.scrollTop > window.innerHeight);
    const topNav = document.querySelector("nav");
    if (below) {
        if (pastTop) return;
        topNav.classList.remove("up")
        pastTop = true;
    }
    else {
        if (!pastTop) return;
        topNav.classList.add("up");
        pastTop = false;
    }
}

const goToSection = () => {
    if (!window.location.hash) return;
    el = document.querySelector(window.location.hash);
    if (!el) return;
    el.addEventListener("click", () => {
        el.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
        setTimeout(() => { window.location.hash = el.id; }, 10);
    });
}

document.addEventListener("scroll", updateNav);

let menuShown = false;
const menu = document.querySelector("#menu");

const hideMenu = () => {
    document.querySelector("nav").classList.remove("big");
    document.body.classList.remove("noscroll");
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-xmark");
}

const showMenu = () => {
    document.querySelector("nav").classList.add("big");
    document.body.classList.add("noscroll");
    menu.classList.add("fa-xmark");
    menu.classList.remove("fa-bars");
}

menu.addEventListener("click", () => {
    if (menuShown) hideMenu();
    else showMenu();
    menuShown = !menuShown;
});

setTimeout(updateNav, 1000);

window.addEventListener("hashchange", e => {
    e.preventDefault();
    goToSection();
});

goToSection();