// document.addEventListener('DOMContentLoaded', () => {
//     // Functions to open and close a modal
//     function openModal($el) {
//       $el.classList.add('is-active');
//     }
  
//     function closeModal($el) {
//       $el.classList.remove('is-active');
//     }
  
//     function closeAllModals() {
//       (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//         closeModal($modal);
//       });
//     }


// })

var button = document.getElementById('button')
var modal = document.getElementById('Go-Modal')

button.onclick = function() {
    modal.style.display = 'block';

}