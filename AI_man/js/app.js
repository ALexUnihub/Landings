'use strict'

initializeSlider();
addReviews();

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

// slider
let btns = document.querySelector(".support__header__buttons");
btns.querySelector(".left").addEventListener('click', moveLeftSlider);
btns.querySelector(".right").addEventListener('click', moveRightSlider);

function moveLeftSlider(event) {
    let items = document.querySelectorAll(".support__item");
    let delta = 240;
    let idx = 0;

    for (let item of items) {
        if (idx === 0) {
            if (parseInt(item.style.marginLeft) === 0) return;
            if (Math.abs(parseInt(item.style.marginLeft)) < item.offsetWidth) {
                delta = Math.abs((parseInt(item.style.marginLeft)));
            }
        }
        item.style.marginLeft = parseInt(item.style.marginLeft) + delta + 'px';
        idx++;
    }
}

function moveRightSlider(event) {
    let items = Array.from(document.querySelectorAll(".support__item"));
    let container = document.querySelector(".container");
    let delta = 240;
    let idx = 0;

    items = items.reverse();

    for (let item of items) {
        if (idx === 0) {
            if (Math.abs(parseInt(item.style.marginLeft)) + item.offsetWidth === container.offsetWidth) return;
            if (Math.abs(parseInt(item.style.marginLeft)) + item.offsetWidth - delta < container.offsetWidth) {
                delta = Math.abs(parseInt(item.style.marginLeft)) + item.offsetWidth - container.offsetWidth;
            }
        }
        item.style.marginLeft = parseInt(item.style.marginLeft) - delta + 'px';
        idx++;
    }
}

function initializeSlider() {
    let items = document.querySelectorAll('.support__item');
    let idx = 0;
    for (let item of items) {
        item.style.marginLeft = idx * 320 + 'px';
        idx++;
    }
}

// reviews
function addReviews() {
    document.querySelector(".reviews").querySelector(".left").addEventListener('click', moveLeftReviews);
    document.querySelector(".reviews").querySelector(".right").addEventListener('click', moveRightReviews);
}

function moveLeftReviews(event) {
    let reviewsBlock = document.querySelector(".reviews");
    let currReview = parseInt(reviewsBlock.querySelector(".review__text").dataset.id);
    if (currReview > 0) {
        currReview--;
        reviewsBlock.querySelector(".review__text").remove();
        reviewsBlock.querySelector(".review__reviewer").remove();

        reviewsBlock.querySelector(".reviews__title").insertAdjacentHTML("afterend", reviewsArray[currReview][0]);
        reviewsBlock.querySelector(".left").insertAdjacentHTML("afterend", reviewsArray[currReview][1]);
    }
}

function moveRightReviews(event) {
    let reviewsBlock = document.querySelector(".reviews");
    let currReview = parseInt(reviewsBlock.querySelector(".review__text").dataset.id);
    if (currReview < reviewsArray.length - 1) {
        currReview++;
        reviewsBlock.querySelector(".review__text").remove();
        reviewsBlock.querySelector(".review__reviewer").remove();

        reviewsBlock.querySelector(".reviews__title").insertAdjacentHTML("afterend", reviewsArray[currReview][0]);
        reviewsBlock.querySelector(".left").insertAdjacentHTML("afterend", reviewsArray[currReview][1]);
    }
}
