$("#home-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1200);
    return false;
});

$("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1200);
    return false;
});

$("#services-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 1200);
    return false;
});

$("#process-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#process").offset().top
    }, 1200);
    return false;
});

$("#team-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#team").offset().top
    }, 1200);
    return false;
});

$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1200);
    return false;
});

// If user scrolls, change transparent menus to default menus
var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbar-default';
    navbarTransparent = 'navbar-transparent';

    fadeInDown = 'fadeInDown';

$document.scroll(function() {
  if ($document.scrollTop() >= 100) {
    //user scrolled more than 100 pixels
    $element.addClass(navbarDefault);
    $element.removeClass(navbarTransparent);

    $element.addClass(fadeInDown);
  } else {
    $element.addClass(navbarTransparent);
    $element.removeClass(navbarDefault);

    $element.removeClass(fadeInDown);
  }
});

$document.ready(function() {

});
