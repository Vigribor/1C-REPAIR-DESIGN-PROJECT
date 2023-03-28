// просто запрашиваем DOM... будто просим разрешение у босса!
var links = document.querySelectorAll(".itemLinks_1");
var links_1 = document.querySelectorAll(".itemLinks_2");
var wrapper = document.querySelector("#wrapper");

// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем отслеживание событий
for (var i = 0; i < links_1.length; i++) {
    var link = links_1[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент в качестве активного
links_1[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links_1.length; i++) {
        links_1[i].classList.remove("active");
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}

// устанавливаем отслеживание событий
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент в качестве активного
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}

var sliderArrowLeft = document.querySelector(".slider_arrow_left");
var sliderArrowRight = document.querySelector(".slider_arrow_right");
let offset = 0;

document.querySelector('.slider_arrow_left').addEventListener('click', function(){
    offset = offset + 1740;
    if (offset > 3480) {
        offset = 0;
    }
    wrapper.style.left = -offset + 'px';
});

document.querySelector('.slider_arrow_right').addEventListener('click', function () {
    offset = offset - 1740;
    if (offset < 0) {
        offset = 3480;
    }
    wrapper.style.left = -offset + 'px';
});