const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

// console.log(sectBtn.length);
//this keyword is not exist in Arrow function
function PageTransition() {
    // button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            sectBtn[i].className += ' active-btn';
        })
    }

    //sections active class


    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if (id) {
            // remove selected from the other btn
            section.forEach((btn) => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active');

            // hide other sections
            section.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

}

PageTransition();