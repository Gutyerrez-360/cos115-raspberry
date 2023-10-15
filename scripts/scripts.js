window.addEventListener('scroll', function () {
    var footer = document.querySelector('.footer');
    var footerPosition = footer.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
  
    if (footerPosition < screenPosition) {
      footer.classList.add('visible');
    } else {
      footer.classList.remove('visible');
    }
  });