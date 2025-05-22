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
            block: "start",
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

document.addEventListener("scroll", updateNav);