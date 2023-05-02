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
function size() {
    return Math.floor(Math.random() * 200);
}
function animtime() {
    return Math.floor(Math.random() * 12);
}
function element() {
    const element = document.createElement('div');
    element.classList.add('circle');
    body.appendChild(element);
    var sizeEL = size();
    element.style.backgroundColor = hexcolor();
    element.style.width = sizeEL + 'px';
    element.style.height = sizeEL + 'px';
    element.animation = `shrink ${animtime()}s linear infinite`
    setTimeout(() => {
        body.removeChild(element);
    }, animtime() * 1000);
    return element;
}
var circle = element();
window.addEventListener("mousemove", (event) => {
    circle.style.left = `${event.clientX - circle.offsetWidth / 2}px`;
    circle.style.top = `${event.clientY - circle.offsetHeight / 2}px`;
});
body.addEventListener("click", (event) => {
    circle = element();
    // console.log(typeof circle.style.width);
    circle.style.left = `${event.clientX - circle.offsetWidth / 2}px`;
    circle.style.top = `${event.clientY - circle.offsetHeight / 2}px`;

    
});

