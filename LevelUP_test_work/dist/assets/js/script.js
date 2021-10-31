$('.header-block__nav a').click(function() {
  $('.header-block__nav a').removeClass('active');
  $(this).addClass('active');
});

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;

    
    $('html, body').animate({scrollTop: dn}, 1000);

  });
});

// фиксированное меню начало
$(function($) {
  $(window).scroll(function(){
      if($(this).scrollTop()>50){
          $('.header').addClass('fixed-nav'),
          $('.header-block__logo-link').addClass('w-logo');
          $('.header-button').addClass('b-small');
          $('.toggle-menu').addClass('toggle-menu-fixed');
      }
      else if ($(this).scrollTop()<50){
          $('.header').removeClass('fixed-nav'),
          $('.header-block__logo-link').removeClass('w-logo');
          $('.header-button').removeClass('b-small');
          $('.toggle-menu').removeClass('toggle-menu-fixed');
      }
  });
});
// фиксированное меню конец

// мобильное меню начало
$(document).ready(function(){
  $('.toggle-menu').click(function () {
    $('.menu-container').toggleClass('menu-open');
    $(this).toggleClass('active-m');
  });
});
// мобильное меню конец

// toggle class container start
$(window).on('resize', function(e){
     if (window.matchMedia('(min-width: 768px)').matches) {
        $(".container-fluid").removeClass("container-fluid").addClass("container");
    }
    else if(window.matchMedia('(max-width: 768px)').matches) {
        $(".container").removeClass("container").addClass("container-fluid");
    }
});

$(document).ready(function(){
  $(window).resize();
});
// toggle class container end

// cut/paste block start
$(window).resize(function(e){
     if (window.matchMedia('(max-width: 768px)').matches) {
        $('.main-block__wrap-img img').appendTo('.main-block__wrap-img-mobile');
        $('.main-block__wrap-img').hide();
        $('.main-block__wrap-img-mobile').show();
    }
    else if(window.matchMedia('(min-width: 768px)').matches) {
        $('.main-block__wrap-img-mobile img').appendTo('.main-block__wrap-img');
        $('.main-block__wrap-img').show();
        $('.main-block__wrap-img-mobile').hide();
    }
});

$(document).ready(function(){
  $(window).resize();
});
// cut/paste block end

// comments slider start
jQuery(document).ready(function($) {
      $('.comments-block').slick({
          arrows: false,
          infinite: true,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          centerMode: true,
          speed: 1300,
          autoplaySpeed: 3000,
          responsive: [
         {
           breakpoint: 1300,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
              centerMode: true,
             slidesToScroll: 1
           }
         }
       ]


        });
});
// comments slider end

// timer
  $('#countdown_dashboard').countDown({
    targetOffset: {
      'day':      0,
      'month':    0,
      'year':     0,
      'hour':     0,
      'min':      30,
      'sec':      0
    },
    omitWeeks: true
    });

// input
$('.input-name').focus(function(){
  $('.wrap-label__name').addClass('input-help');
});
$('.input-name').blur(function(){
  $('.wrap-label__name').removeClass('input-help');
});

$('.input-phone').focus(function(){
  $('.wrap-label__tel').addClass('input-help');
});
$('.input-phone').blur(function(){
  $('.wrap-label__tel').removeClass('input-help');
});

$(".input-phone").keyup(function(e){
  this.value = this.value.replace(/[^0-9\.]/g, '');
});










