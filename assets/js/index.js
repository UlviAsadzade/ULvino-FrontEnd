// Slider section start
const leftArrow = document.querySelector(".slider .bi-chevron-left")
const rightArrow = document.querySelector(".slider .bi-chevron-right")
const slides = Array.from(document.querySelectorAll(".slider-item"))

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


///////////////////////////////////////


// Feature Products section start

const targetButtons = Array.from(document.querySelectorAll('.target-buttons a'));
const productsBoxes = Array.from(document.querySelectorAll('.products-box'));
const clearActiveTargets = () => {
    targetButtons.forEach(targetButton => {
        targetButton.classList.remove('active');
    });
    productsBoxes.forEach(productsBox => {
        productsBox.classList.remove('active');
    });
}
targetButtons.forEach(targetButton => {
    targetButton.onclick = function (e) {
        e.preventDefault();
        clearActiveTargets();
        const targetId = targetButton.getAttribute('data-target')
        const targetContent = document.getElementById(targetId);
        targetButton.classList.add('active');
        targetContent.classList.add('active');
    }
});


const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")

minus.onclick = function(e){
    e.preventDefault();
    sum = minus.nextElementSibling.innerHTML;
    if (sum == 1) {
        minus.nextElementSibling.innerHTML = 1;
    }
    else {
        sum--;
        minus.nextElementSibling.innerHTML = sum;
    }
}

plus.onclick = function(e){
    e.preventDefault();
    sum = plus.previousElementSibling.innerHTML;
    sum++;
    plus.previousElementSibling.innerHTML = sum;
}

// Feature products section finish