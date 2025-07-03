// const toggler = document.querySelector('.custom-toggler');
// const navCollapse = document.getElementById('navbarNav');

// toggler.addEventListener('click', () => {
//   toggler.classList.toggle('open');
//   navCollapse.classList.toggle('show');
// });

//---------------------- Footer text ----------------------//
const footer_message = document.querySelector(".footer-message");

footer_message.innerHTML = `${new Date().getFullYear()} developer0311, Inc. All rights reserved.`;

//---------------------- Scroll reveal ----------------------//

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".top", { origin: `top` });
ScrollReveal().reveal(".bottom", { origin: `bottom` });
ScrollReveal().reveal(".left", { origin: `left` });
ScrollReveal().reveal(".right", { origin: `right` });
