const textareaEL = document.getElementById('textarea');
const totalEl = document.getElementById('total-counter');
const remainEl = document.getElementById('remaining-counter');
const warEl = document.getElementById('war');



textareaEL.addEventListener('keyup', () => {
    updateCounter();
});

function updateCounter() {
    totalEl.textContent = textareaEL.value.length
    remainEl.textContent = 50 - textareaEL.value.length;

    if ( textareaEL.value.length === 50) {
        warEl.style.display = 'block';
    }else {
        warEl.style.display = 'none';
    }
};


setTimeout(updateCounter, 1000);
