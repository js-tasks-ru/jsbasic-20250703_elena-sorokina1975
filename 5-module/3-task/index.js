function initCarousel() {
  const countSlide = 4;  // кол-во слайдов в карусели
  const buttonArrowRight = document.querySelector('.carousel__arrow_right') ;
  const buttonArrowLeft = document.querySelector('.carousel__arrow_left') ;
  const inner = document.querySelector('.carousel__inner') ;  
  let i = 0;
  
  buttonArrowLeft.style.display = 'none';

  function paint(i){
    inner.style.transform = `translateX(-${(i*inner.offsetWidth)}px)`;
    
    if (i == countSlide-1) {
        buttonArrowRight.style.display = 'none';
      } else {
        buttonArrowRight.style.display = '';
      }    
    if (i == 0) {
        buttonArrowLeft.style.display = 'none';
      } else {
        buttonArrowLeft.style.display = '';
      } };

  buttonArrowRight.onclick = function(event) { 
      i++;  
      if (i > countSlide-1) {i = countSlide-1};
      paint(i);
    }  

  buttonArrowLeft.onclick = function(event) {  
       i--; 
       if (i < 0 ) {i = 0}
       paint(i);
      }  

      
}
