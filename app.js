const list = document.querySelector('.list');
const links = document.querySelector('.links');
const main = document.getElementById('main');
const menu = document.getElementById('menu');
const animation = document.getElementById('animation');
const graph = document.getElementById('graph');
const td = document.getElementById('td');
const ac =document.querySelector('.ac');
const ap =document.querySelector('.ap');
const sv =document.querySelector('.sv');
const ct =document.querySelector('.ct');
const ac1 =document.querySelector('.ac1');
const ap1 =document.querySelector('.ap1');
const sv1 =document.querySelector('.sv1');
const ct1 =document.querySelector('.ct1');
//
window.onscroll = function(){
    if(scrollY > 200) {
        main.classList.add('ll');
    } else {
        main.classList.remove('ll');
    }

    if(scrollY > 1250) {
        menu.classList.add('menuShow');
        animation.classList.add('anim');
        graph.classList.add('anim');
        td.classList.add('anim');
    } else {
        menu.classList.remove('menuShow');
        animation.classList.remove('anim');
        graph.classList.remove('anim');
        td.classList.remove('anim');
    }
}
//
list.addEventListener('click', function(){
    links.classList.toggle('active');
    list.classList.toggle('active');
})
window.addEventListener('resize', () => {
    links.classList.remove('active');
    list.classList.remove('active');
});
window.addEventListener('scroll', () => {
    links.classList.remove('active');
    list.classList.remove('active');
});
//
const fb = document.getElementById('fb');
    const url = document.getElementById('url');
    const fbspan = document.getElementById('fbspan');
    fb.addEventListener('click', () => {
    url.classList.add('active');
    if(url.style.display == "block") {
        url.style.display = "none";
        fbspan.style.display = "block";
        fb.classList.remove('active');
    } else if (url.style.display = "none") {
        url.style.display = "block";
        fbspan.style.display = "none";
        fb.classList.add('active');
    }
});
//
ac.addEventListener('click', accueil);
ac1.addEventListener('click',accueil);

ap.addEventListener('click', propos);
ap1.addEventListener('click', propos);

sv.addEventListener('click', service);
sv1.addEventListener('click', service);

ct.addEventListener('click', contact);
ct1.addEventListener('click', contact);

function accueil() {
    ac.classList.add('active');
    ap.classList.remove('active');
    sv.classList.remove('active');
    ct.classList.remove('active');

    ac1.classList.add('active');
    ap1.classList.remove('active');
    sv1.classList.remove('active');
    ct1.classList.remove('active');
}

function propos() {
    ap.classList.add('active');
    ac.classList.remove('active');
    sv.classList.remove('active');
    ct.classList.remove('active');

    ap1.classList.add('active');
    ac1.classList.remove('active');
    sv1.classList.remove('active');
    ct1.classList.remove('active');
}

function service() {
    sv.classList.add('active');
    ap.classList.remove('active');
    ac.classList.remove('active');
    ct.classList.remove('active');

    sv1.classList.add('active');
    ap1.classList.remove('active');
    ac1.classList.remove('active');
    ct1.classList.remove('active');
}

function contact() {
    ct.classList.add('active');
    ap.classList.remove('active');
    sv.classList.remove('active');
    ac.classList.remove('active');

    ct1.classList.add('active');
    ap1.classList.remove('active');
    sv1.classList.remove('active');
    ac1.classList.remove('active');
}
