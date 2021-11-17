// Slider section start
const leftArrow = document.querySelector(".slider .bi-chevron-left")
const rightArrow = document.querySelector(".slider .bi-chevron-right")
const slides = Array.from(document.querySelectorAll(".slider-item"))

// const clearActiveSlider = () => {
//     slides.forEach(slide => {
//         slide.classList.remove('active');
//     });

// }

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

// slider section finish

///////////////////////////////////////

// Testimonials section start

const left = document.querySelector(".testimonials .bi-chevron-left")
const right = document.querySelector(".testimonials .bi-chevron-right")
const feedbackBoxes = Array.from(document.querySelectorAll(".feedback-box"))

const clearActives = () => {
    feedbackBoxes.forEach(feedbackBox => {
        feedbackBox.classList.remove('active');
    });

}

right.onclick = function () {
    const currentActive = document.querySelector('.testimonials .feedback-box.active');
    if (currentActive == feedbackBoxes[feedbackBoxes.length-1]) {
        currentActive.classList.remove('active');
        feedbackBoxes[0].classList.add('active');

    }else{
        currentActive.classList.remove('active');
        currentActive.nextElementSibling.classList.add('active');
    }

}

left.onclick = function () {
    const currentActive = document.querySelector('.testimonials .feedback-box.active');
    if (currentActive == feedbackBoxes[0]) {
        currentActive.classList.remove('active');
        feedbackBoxes[feedbackBoxes.length-1].classList.add('active');

    }else{
        currentActive.classList.remove('active');
        currentActive.previousElementSibling.classList.add('active');
    }
}


// Testimonials section finish