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

// Scroll button start

const scrollTop = document.querySelector('.scroll-top');

scrollTop.onclick = function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        scrollTop.classList.add("active");
    } else {
        scrollTop.classList.remove("active");
    }
  })



// Scroll button finish



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






const wishlistButtons = Array.from(document.querySelectorAll('.wishlist-button'))
const heart = document.querySelector('.wishlist-button .far.fa-heart')

for (let i = 0; i < wishlistButtons.length; i++) {
    wishlistButtons[i].onclick=function(e){
        e.preventDefault();
        if(wishlistButtons[i].firstElementChild.className=="far fa-heart"){
            wishlistButtons[i].firstElementChild.className="fas fa-heart"
        }
        else{
            wishlistButtons[i].firstElementChild.className="far fa-heart"
        }

    }
}


// Feature products section finish