const list = document.querySelector('.list');
const links = document.querySelector('.links');
const main = document.getElementById('main');
const menu = document.getElementById('menu');
const animation = document.getElementById('animation');
const graph = document.getElementById('graph');
const td = document.getElementById('td');
//
window.onscroll = function(){
    if(scrollY > 200) {
        main.classList.add('ll');
    } else {
        main.classList.remove('ll');
    }
    console.log("fff");

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

