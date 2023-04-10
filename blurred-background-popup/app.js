const btnJoinEl = document.querySelector('.btn');
const closeIconEl = document.querySelector('.close-icon');
const containerEl = document.querySelector('.container');
const popupContainerEl = document.querySelector('.popup-container');

btnJoinEl.addEventListener('click', ()=> {
    containerEl.classList.add('active');
    popupContainerEl.classList.remove('active');
})

closeIconEl.addEventListener('click', () => {
    containerEl.classList.remove('active');
    popupContainerEl.classList.add('active');
})