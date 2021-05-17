$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 1, 
    centerMode: true, 
    centerPadding: '350px',
    focusOnSelect: true, 
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__menu'),
  menuItem = document.querySelectorAll('.header__item'),
  hamburger = document.querySelector('.header__hamburger'),
  connect = document.querySelector('.header__connect');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('header__hamburger_active');
      menu.classList.toggle('header__menu_active');
      connect.classList.toggle('header__connect_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('top-menu_active');
          connect.classList.toggle('header__connect_active');
      })
  })
});