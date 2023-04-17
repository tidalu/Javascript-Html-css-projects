const menuIcon = document.querySelector('.header__apps');
const foldersContainer = document.getElementById('folder-apps')

menuIcon.addEventListener('click', function(){
  foldersContainer.classList.toggle('show-folders')
})


const searchButtons = document.querySelectorAll(".search__buttons");
const input = document.querySelector("input");
let inputValue =  input.value;
searchButtons.forEach((btn) => {
  btn.addEventListener('click', (btn)=> {
    inputValue = btn.target.textContent;
    input.value = inputValue;
  })
})
