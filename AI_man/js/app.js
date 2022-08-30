'use strict'

let techMenu = document.querySelectorAll(".tech__menu__title");

for (let item of techMenu) {
    item.addEventListener('mouseover', enterElem);
    item.addEventListener('mouseout', leaveElem);
    item.addEventListener('click', chooseElem);
}

function enterElem(event) {
    if (!event.currentTarget.classList.contains("active")) {
        event.currentTarget.classList.add("hovered");
    }
}

function leaveElem(event) {
    if (event.currentTarget.classList.contains("hovered")) {
        event.currentTarget.classList.remove("hovered");
    }
}

function chooseElem(event) {
    let chosenElem = document.querySelector(".active");
    if (chosenElem) {
        chosenElem.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

