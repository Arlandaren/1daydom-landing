// скролл навбара скрыть
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const delta = 5;
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Проверяем, что больше delta для производительности
  if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return;

  if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
    // Прокрутка вниз и позиция больше высоты navbar
    navbar.style.top = `-${navbarHeight}px`;
  } else if (scrollTop + window.innerHeight < document.body.scrollHeight) {
    // Прокрутка вверх
    navbar.style.top = '0';
  }

  lastScrollTop = scrollTop;
});

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