function toggleText() {
  const button = document.querySelector('.toggle-text-button') ;

  button.onclick = function(event) {
      text.hidden = !text.hidden;
   }
}
