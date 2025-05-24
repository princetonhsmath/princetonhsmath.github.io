document.addEventListener("DOMContentLoaded", setTimeout.bind(this, () => document.body.classList.remove("hidden"), 50));

document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", () => {
        window.location.hash = el.id;
        goToSection();
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
    if (window.location.hash == "") return;
    console.log(window.location.hash);
    const el = document.querySelector(window.location.hash);
    if (!el) return;
    el.scrollIntoView({ block: "center" });
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

document.querySelectorAll("#menu-content a").forEach(el => el.addEventListener("click", hideMenu));

addEventListener("DOMContentLoaded", setTimeout.bind(this, goToSection, 400));
addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(el => {
        if (el.href.includes("#")) el.addEventListener("click", setTimeout.bind(this, goToSection, 0)); // i hate this
    })
})