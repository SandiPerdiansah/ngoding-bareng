document.addEventListener('scroll', function () {
   const windowScroll = Math.floor(window.scrollY) > 50;
   document.querySelector('.navbar').classList.toggle('scroll-active', windowScroll);
});

document.addEventListener('click', function (e) {
   const navbarToggler = document.querySelector('.navbar-toggler');
   const navbarCollapse = document.querySelector('.navbar-collapse');

   if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
      navbarCollapse.classList.remove('show');
   }
});

// Animate.css
(function () {
   const navbar = document.querySelector('.navbar');
   navbar.classList.add('animate__animated', 'animate__fadeInDown');

   const heroHeading1 = document.querySelector('.hero h1');
   heroHeading1.classList.add('animate__animated', 'animate__fadeInUp');

   const heroParagraf = document.querySelector('.hero p');
   heroParagraf.classList.add('animate__animated', 'animate__fadeInUp');

   const heroButton = document.querySelectorAll('.hero button');
   heroButton.forEach((button) => button.classList.add('animate__animated', 'animate__fadeInUp'));

   // const
})();
