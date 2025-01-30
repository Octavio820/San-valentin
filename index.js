const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabes lo mucho que te amo mi amor quiero que este sea el primero de muchos, gracias a vos volvi a escribir codigos ya no recordaba casi nada pero aca estoy escribiendo los codigo y te amo mucho amor de mi vida no dejo de pensar en vos todo el tiempo no sabes lo mucho que te amo, te quiero para siempre conmigo')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',traslate);
})