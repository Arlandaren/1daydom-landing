// Сворачиваемое меню для мобильных
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.classList.toggle("open");
  document.body.classList.toggle("menu-opened");
});

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll("#nav-menu li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      menuToggle.classList.remove("open");
      document.body.classList.remove("menu-opened");
    }
  });
});

// Изменение навигации при скролле
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Анимация при скролле и инициализация AOS
AOS.init({
  duration: 1000,
  once: true,
});

$(document).on("load scroll", function () {
  $(".circle").each(function (index, element) {
      let circleTopOffset = $(element).offset().top - $(window).scrollTop();
      if (circleTopOffset < 250) {
          $(element).addClass("active");
      } else {
          $(element).removeClass("active");
      }
  });

  $(".steps__item").each(function (index, element) {
      let itemTopOffset = $(element).offset().top - $(window).scrollTop();
      if (itemTopOffset < 250) {
          $(element).addClass("active");
      } else {
          $(element).removeClass("active");
      }
  });
});
