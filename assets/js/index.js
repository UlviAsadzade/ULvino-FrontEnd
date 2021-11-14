const leftArrow = document.querySelector(".bi-chevron-left")
const rightArrow = document.querySelector(".bi-chevron-right")
const slides = Array.from(document.querySelectorAll(".slider-item"))

const clearActives = () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

}

rightArrow.onclick = function () {
    const currentActive = document.querySelector('main .slider-item.active');
    if (currentActive == slides[slides.length-1]) {
        currentActive.classList.remove('active');
        slides[0].classList.add('active');

    }else{
        currentActive.classList.remove('active');
        currentActive.nextElementSibling.classList.add('active');
    }

}

leftArrow.onclick = function () {
    const currentActive = document.querySelector('main .slider-item.active');
    if (currentActive == slides[0]) {
        currentActive.classList.remove('active');
        slides[slides.length-1].classList.add('active');

    }else{
        currentActive.classList.remove('active');
        currentActive.previousElementSibling.classList.add('active');
    }
}