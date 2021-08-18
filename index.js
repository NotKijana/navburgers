const disappearBurger = document.querySelector('#disappear');
const collapseBurger = document.querySelector('#collapse');
const spinBurger = document.querySelector('#spin');
const standBurger = document.querySelector('#stand');
const minusBurger = document.querySelector('#minus');
const basicBurger = document.querySelector('#basic');

disappearBurger.addEventListener('click', function() {
    disappearBurger.classList.toggle('open')
})

collapseBurger.addEventListener('click', function() {
    collapseBurger.classList.toggle('open')
})

spinBurger.addEventListener('click', function() {
    spinBurger.classList.toggle('open')
})

standBurger.addEventListener('click', function() {
    standBurger.classList.toggle('open')
})

minusBurger.addEventListener('click', function() {
    minusBurger.classList.toggle('open')
})

basicBurger.addEventListener('click', function() {
    basicBurger.classList.toggle('open')
})