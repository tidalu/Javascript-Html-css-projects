const body = document.querySelector('body');
const hex = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
];

function hexcolor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * hex.length)];
    }
    return color;
}
function size(min, max) {
    return Math.floor(Math.random() * (max-min)+min);
}
function animtime() {
    return Math.floor(Math.random() * 12);
}
function element() {
    const element = document.createElement('div');
    // element.addEventListener('mouseleave', function(){
    //     element.addEventListener('contextmenu', function(event){
    //         console.log('hello')
    //     });
    // });
    element.classList.add('circle');
    var sizeEL = size(50, 200);
    element.style.backgroundColor = hexcolor();
    element.style.width = sizeEL + 'px';
    element.style.height = sizeEL + 'px';
    element.style.display = 'block';
    body.appendChild(element);
    element.addEventListener('mouseenter', function(e){
        console.log(e.target);                                                                  
        // element.removeEventListener('mousemove', centerCircle, false);
    });
    return element;
}
function elementAnimation(circle){
    const time = animtime();
    circle.style.animation = `shrink`
    circle.style.animationFillMode = `forwards`
    circle.style.animationDuration = `${time}s`
    console.log(time);
    setTimeout(() => {
        circle.remove();
    },time * 1000);
}
var circle = element();
window.addEventListener("mousemove", centerCircle );
function centerCircle(event){
    circle.style.left = `${event.clientX - circle.offsetWidth / 2}px`;
    circle.style.top = `${event.clientY - circle.offsetHeight / 2}px`;
}
body.addEventListener("click", (event) => {
    // elementAnimation(circle);
    circle.style.left = `${event.clientX - circle.offsetWidth / 2}px`;
    circle.style.top = `${event.clientY - circle.offsetHeight / 2}px`;
    // circle = {}
    // circle.style.zIndex = 1;
    circle = element();
    // circle.style.left = `${event.clientX - circle.offsetWidth / 2}px`;
    // circle.style.top = `${event.clientY - circle.offsetHeight / 2}px`;
});

// 