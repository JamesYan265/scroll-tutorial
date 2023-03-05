let point = document.getElementById('point');
let font = document.getElementById('font');
let back = document.getElementById('back');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let btn = document.getElementById('btn');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    point.style.left = value * 0.25 + 'px';
    moon.style.top = 180 + value * 1.05 + 'px';
    back.style.top = -100 + value * 0.5 + 'px';
    font.style.top = value * 0.5 + 'px';
    text.style.opacity = 1 - value * 0.001 ;
    btn.style.marginTop = value * 1.5 + 'px';
    btn.style.opacity = 1 - value * 0.005 ;
});