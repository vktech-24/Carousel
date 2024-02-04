let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
let totalSlider=sliders.length;
const btnPrev=document.querySelector('#btn-prev')
const btnNext=document.querySelector('#btn-next')

btnNext.addEventListener('click',function(){
      nextSlide();
})

btnPrev.addEventListener('click',function(){
      prevSlide();
})

function  updatePosition(){
    sliders.forEach(slide=>{
        slide.classList.remove('active');
        slide.classList.add('hidden')
    })
    sliders[slidePosition].classList.add('active');



    dots.forEach(dot=>{
        dot.classList.remove('dot-active');
        
    })

    dots[slidePosition].classList.add('dot-active')
}

function nextSlide(){
    if(slidePosition==totalSlider-1){
        slidePosition=0
    }else{
        slidePosition++;
    }
    updatePosition()
}

function prevSlide(){
    if(slidePosition==0){
        slidePosition=totalSlider-1;
    }else{
        slidePosition--;
    }
   
    updatePosition()
}

const dotContainer=document.querySelector('.dots');
sliders.forEach(slide=>{
   const dot=document.createElement('div')
   dot.classList.add('dot');
   dotContainer.appendChild(dot);
})

const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');

dots.forEach((dot,index)=>{
    dot.addEventListener('click',function(){
        slidePosition=index;
        updatePosition()
    })
})

setInterval(()=>{
    if(slidePosition==totalSlider-1){
        slidePosition=0;
    }else{
        slidePosition++;
    }
    updatePosition()
},5000)