document.addEventListener("DOMContentLoaded", function(event) {

  let mynav = document.querySelector('.mynav');

  window.addEventListener('scroll', () => {
    let top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    if (top > 120) {
      mynav.style.position = "fixed";
      mynav.style.top = "0";
    } else
      mynav.style.position = ""
  });
});