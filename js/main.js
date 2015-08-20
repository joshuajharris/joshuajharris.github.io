$('body').scrollspy({target: '#page-nav'});

$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $("#page-nav").height();
    ($(window).scrollTop() > navHeight) ? $('.nav').addClass('navbar-fixed-top') : $('.nav').removeClass('navbar-fixed-top');
  });
});
