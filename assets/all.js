const imgs = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelector('.control_prev');
const nextBtn = document.querySelector('.control-next');
const scrollContainer = document.querySelectorAll('.products');


let n = 0;

function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prevBtn.addEventListener('click', () => {
    if(n > 0){
      n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
});
nextBtn.addEventListener('click', () => {
    if(n < imgs.length - 1){
      n++;
    }
    else{
        n = 0;
    }
    changeSlide();
});

for(const item of scrollContainer){
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}