const containerEl = document.querySelector('.container');

for (let i = 0; i < 32; i++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl);
    
}

const colorContainerEls = document.querySelectorAll('.color-container');
randomColor();
generateRandomColor();

function generateRandomColor() {
    colorContainerEls.forEach((colorContainerEl) => {
    const newColor = randomColor();
    console.log(newColor);
    colorContainerEl.style.backgroundColor = newColor;
    colorContainerEl.textContent = newColor;
    })

}
function randomColor() {
    const chars = '0123456789ABCDEF';
    const colorLength = 6;
    let  color = '#';
    for (let i = 0; i < colorLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNumber, randomNumber + 1);
    }
    return color;
}