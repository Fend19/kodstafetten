 const nav = document.querySelector('.nav');

 nav.addEventListener('click', evt => {
   if (nav.className.indexOf('active') === -1) {
     nav.classList.add('nav--active');
   } else {
     nav.classList.remove('nav--active');
   }
 })