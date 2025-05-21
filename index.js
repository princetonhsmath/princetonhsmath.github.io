let selfieID = 0;
const flavorBox = document.getElementById("flavortext");

function spook() {
    const spookInner = "he's in your home".split("");
    let expanded = "";
    spookInner.forEach((c, i) => {
        expanded += (c == " " ? " " : `<span class="spooky" style="animation-delay:${Math.sin(i * 0.2)}s;">${c}</span>`);
    })
    return "(" + expanded + ")";
}

const flavorOptions = [
    `"a motivated junior who's interested in Computer Science"`,
    `a fellow human!`,
    `a "studious" student suspiciously standing still`,
    spook(),
    `a D1 procrastinator and mediocre achiever`,
    `a <i>very</i> cooked junior who decided to take 9 APs (😭)`,
    `(it's <i>so over</i>)`,
];

function addFlavorText() {
    const curr = Math.floor(Math.random() * flavorOptions.length);
    if (flavorOptions[curr][0] == "(") document.getElementById("gramer").innerText = "";
    else document.getElementById("gramer").innerText = ",";

    flavorBox.innerHTML = flavorOptions[curr];

    selfieID = Math.floor(Math.random() * 4.0);
    document.getElementById("img-container").className = "self" + (selfieID + 1);
}

addFlavorText();

document.getElementById("img-container").addEventListener("mousedown", () => {
    document.getElementById("img-container").className = "self" + (selfieID + 1) + " blurred";
    selfieID = (selfieID + 1) % 4;
});

function changePFP() {
    if (document.getElementById("img-container").className == "self" + (selfieID + 1)) return;
    document.getElementById("img-container").className = "self" + (selfieID + 1) + " blurred";
    setTimeout(() => {
        document.getElementById("img-container").className = "self" + (selfieID + 1);
    }, 100)
}

document.getElementById("img-container").addEventListener("mouseup", changePFP)
document.getElementById("img-container").addEventListener("mouseleave", changePFP)

document.addEventListener("DOMContentLoaded", setTimeout.bind(this, () => document.body.classList.add("show"), 50));

const infoBox = document.getElementById("info-box");

/** 
 * @param {string} name 
 * @param {HTMLElement} el
*/
function changeInfoContent(el) {
    for (const tmp of ["crc", "cpt", "bsa", "winners", "esp"]) infoBox.classList.remove(tmp);
    const active = el.getAttribute("selected");
    document.querySelectorAll("li.info-show").forEach(el => el.removeAttribute("selected"));
    if (active == null) {
        el.setAttribute("selected", "");
        infoBox.classList.add(el.getAttribute("name"));
    }
}

const infoShows = document.getElementsByClassName("info-show");
for (const el of infoShows) el.addEventListener("click", changeInfoContent.bind(this, el));

const updateGrid = () => {
    const container = document.querySelector(".bento-outer");
    if (!container) return;
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const width = container.clientWidth;

    // 18 * rem * i + rem * (i - 1) > width
    // 18 * rem * i + rem * i - rem > width
    // 19 * rem * i > width + 1*rem
    const numCols = Math.trunc((width + rem) / (19 * rem));
    container.style.setProperty("--cols", numCols);
}

document.addEventListener("DOMContentLoaded", updateGrid);
window.addEventListener("resize", updateGrid);

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