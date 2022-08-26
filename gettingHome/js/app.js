let elems = document.querySelectorAll(".value__info__item");
let info = `<p class="value__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Congue dolor, justo mauris augue. Lectus sed diam sit urna. Vel cursus 
placerat arcu id tristique. Feugiat molestie id dolor sed placerat tortor, 
magnis.</p>`

function showInfo(event) {
    if (!event.currentTarget.classList.contains('active')) {
        event.currentTarget.classList.add('active');

        let title = event.currentTarget.querySelector('.value__item__title');
        title.classList.add('active');
        title.insertAdjacentHTML('afterend', info);
    } else {
        event.currentTarget.classList.remove('active');

        let title = event.currentTarget.querySelector('.value__item__title');
        title.classList.remove('active');
        event.currentTarget.querySelector('.value__item__text').remove();
    }
}

for (let index = 0; index < elems.length; index++) {
    elems[index].addEventListener("click", showInfo);
    
}