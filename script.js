const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide] .classList.add('on')
}


function nextSlider() {
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
}


btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)




const slidechale1 = document.querySelectorAll('.slider1');
const btnPrev1 = document.getElementById('prev-button1');
const btnNext1 = document.getElementById('next-button1');

let currentSlide1 = 0;

function hideSlider1 () {
    slidechale1.forEach(item => item.classList.remove('onn'))
}

function showSlider1() {
    slidechale1[currentSlide1] .classList.add('onn')
}

function nextSlider1() {
    hideSlider1()
    if(currentSlide1 === slidechale1.length -1){
        currentSlide1 = 0
    } else {
        currentSlide1++
    }
    showSlider1()
}

function prevSlider1() {
    hideSlider1()
    if(currentSlide1 === 0){
        currentSlide1 = slidechale1.length -1
    } else {
        currentSlide1--
    }
    showSlider1()
}

btnNext1.addEventListener('click', nextSlider1)
btnPrev1.addEventListener('click', prevSlider1)


const chale2 = document.querySelectorAll('.slider2');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');

let currentSlide2 = 0

function hideSlider2() {
    chale2.forEach(item => item.classList.remove('onnn'))
}

function showSlider2() {
    chale2[currentSlide2] .classList.add('onnn')
}

function nextSlider2() {
    hideSlider2()
    if(currentSlide2 === chale2.length -1){
        currentSlide2 = 0
    } else {
        currentSlide2++
    }
    showSlider2()
}

function prevSlider2 () {
    hideSlider2()
    if(currentSlide2 === 0){
        currentSlide2 = chale2.length -1
    } else {
        currentSlide2--
    }
    showSlider2 ()
}

btnNext2.addEventListener('click', nextSlider2)
btnPrev2.addEventListener('click', prevSlider2)


const chale3 = document.querySelectorAll('.slider3');
const btnPrev3 = document.getElementById('prev-button3')
const btnNext3 = document.getElementById('next-button3')

let currentSlide3 = 0

function hideSlider3() {
    chale3.forEach(item=>item.classList.remove('onnnn'))
}

function showSlider3() {
    chale3[currentSlide3] .classList.add('onnnn')
}

function nextSlider3() {
    hideSlider3()
    if(currentSlide3 === chale3.length -1){
        currentSlide3 = 0
    } else {
        currentSlide3++
    }
    showSlider3()
}

function prevSlider3() {
    hideSlider3()
    if(currentSlide3 === 0){
        currentSlide3 = chale3.length -1
    } else {
        currentSlide3--
    }
    showSlider3()
}

btnNext3.addEventListener('click', nextSlider3)
btnPrev3.addEventListener('click', prevSlider3)

function showModal() {
    document.getElementById('myModal').style.display = 'block';
}


function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


document.querySelector('.modal .close').addEventListener('click', closeModal);


window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
});

function menuShow () {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open')
    }
}