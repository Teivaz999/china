$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 1, 
    centerMode: true, 
    centerPadding: '350px',
    focusOnSelect: true, 
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerPadding: 'none'
        }
      },
      /* {
      breakpoint: 900,
        settings: {
          centerPadding: 'none'
        }
      }, */
      /* {
        breakpoint: 800,
        settings: {
          centerPadding: 'none'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      } */
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__mobile-menu'),
  menuItem = document.querySelectorAll('.header__item'),
  hamburger = document.querySelector('.header__hamburger'),
  connect = document.querySelector('.header__connect'),
  row = document.querySelector('.header__row'),
  descr = document.querySelector('.header__descr');


  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('header__hamburger_active');
      menu.classList.toggle('header__mobile-menu_active');
      connect.classList.toggle('header__connect_active');
      row.classList.toggle('header__row-fixed');
      descr.classList.toggle('header__descr-mt0');
  });

  

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('top-menu_active');
          connect.classList.toggle('header__connect_active');
      });
  });
$('[data-modal=application]').on('click', function() {
  $('.overlay').fadeIn();
});
$('.popup-call__close').on('click', function (){
  $('.overlay').fadeOut();
});

$(document).ready(function () {
  $('input,textarea').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'));
    $(this).attr('placeholder','');
  });
  $('input,textarea').blur(function(){
    $(this).attr('placeholder',$(this).data('placeholder'));
  });
  });

$('.consultation__form').validate( {
  rules: {
    name:{
      required: true,
      minlength: 3
    },
    phone:"required",
    email: {
      required:true,
      email:true
    }
  },
  messages: {
    name: {
      required: "Напишите как вас зовут",
      minlength: jQuery.validator.format("Поле должно содержать больше {0} символов")
    },
    email: {
      required: "Для связи нужна ваша почта",
      email: "Ваша почта должна быть в формате name@domain.com"
    }
  }
});
$('.popup-call__form').validate();


});