document.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 170) { // Adjust the scroll value as needed
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }
  });

document.getElementById('scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});