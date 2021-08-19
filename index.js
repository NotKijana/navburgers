const burgerList = [...document.querySelectorAll('.burger')];

for(let i = 0; i < burgerList.length; i++) {
    burgerList[i].addEventListener('click', function() {
        burgerList[i].classList.toggle('open');
    })
}