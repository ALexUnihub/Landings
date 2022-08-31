'use strict'

let techMenuTitles = document.querySelectorAll(".tech__menu__title");

for (let item of techMenuTitles) {
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
    document.querySelector(".tech__item").remove();

    let itemName = event.currentTarget.textContent;

    document.querySelector(".tech__menu").insertAdjacentHTML('afterend', itemsMap.get(itemName));
}

// ticker animation:

// let tickerDiv = document.querySelector(".discount");
// tickerDiv.addEventListener('mouseover', enterTicker);
// tickerDiv.addEventListener('mouseout', leaveTicker);

// function enterTicker(event) {
//     if (!event.currentTarget.classList.contains("active")) {
//         event.currentTarget.classList.add("active");
//         let tickerItems = event.currentTarget.querySelectorAll('.discount__line__text');
//         for (let item of tickerItems) {
//             item.classList.add("active");
//         }
//     }
// }

// function leaveTicker(event) {
//     if (event.currentTarget.classList.contains("active")) {
//         event.currentTarget.classList.remove("active");
//         let tickerItems = event.currentTarget.querySelectorAll('.discount__line__text');
//         for (let item of tickerItems) {

//             item.classList.remove("active");
//         }
//     }
// }
