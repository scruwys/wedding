
function setBackgroundImage(object, src) {
  var $img = $( '<img src="'+src+'">' );

  $img.bind('load', function() {
    object.css('background-image', 'url('+src+')');
  });

  if ( $img[0].width ){ $img.trigger( 'load' ); };
};

$(function() {
  if ( $('#registry').length > 0 ) $('body').css('background-color', '#CBE8E0');

  $('a[href*="#"]:not([href="#"])').click(function(e) {
    e.preventDefault();

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });

  var $header = $(".site-header");

  $(window).on("scroll", function(e) {
    var $winpos = $(window).scrollTop();
    var $offset = $header.offset().top - $winpos;
      
    if ( $offset <= 0 && $winpos > 50 ) {
      $header.addClass("fixed-navbar");
    } else {
      $header.removeClass("fixed-navbar");
    };
  }).scroll();


  var $cover = $('header#cover');
  var $about = $('header#about')

  if ( $cover.length > 0 ) setBackgroundImage($cover, '/images/intro-cover-large.png');
  if ( $about.length > 0 ) setBackgroundImage($about, '/images/about-cover-large.png');

});