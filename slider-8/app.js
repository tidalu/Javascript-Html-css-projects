const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${100 * index}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function(){
    counter++;
    carusel();
    
    
});
prevBtn.addEventListener('click', function(){
    counter--;
    carusel();
    
});


function carusel(){

    // working with slides
    if(counter === slides.length){
        counter = 0;
    }

    if(counter < 0){
        counter = slides.length - 1;
    }

    // working with buttons
    if(counter < slides.length -1){
        nextBtn.style.display = 'block';

    }else {
        nextBtn.style.display = 'none';
    }
    if(counter > 0){
        prevBtn.style.display = 'block';
    }else {
        prevBtn.style.display = 'none';
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(${-100 * counter}%)`;
    });
};


prevBtn.style.display = 'none';