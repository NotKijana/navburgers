const disappearBurger = document.querySelector('#disappear');
const collapseBurger = document.querySelector('#collapse')

disappearBurger.addEventListener('click', function() {
    disappearBurger.classList.toggle('open')
})

collapseBurger.addEventListener('click', function() {
    collapseBurger.classList.toggle('open')
})