$(function() {

  function changeConsultingArea() {
    var width = $(window).width();
    if(width >= 850) {
      $(".consulting-areas-wrapper").removeClass("twelve").addClass("six");
    } else {
      $(".consulting-areas-wrapper").addClass("twelve").removeClass("six");
    };
  };

  function change750() {
    var width = $(window).width();
    if(width >= 750) {
      $(".client-logos").removeClass("one").addClass("two");
      $("#swb-img-wrapper").addClass("four columns");
      $("#about-content-wrapper").addClass("eight columns");
      $(".book-area").removeClass("twelve").addClass("six");
    } else {
      $(".client-logos").removeClass("one");
      $("#swb-img-wrapper").removeClass("four columns");
      $("#about-content-wrapper").removeClass("eight columns");
      $(".book-area").removeClass("six").addClass("twelve");
    };
  };

  changeConsultingArea();
  change750();
  $( window ).resize(function() {
    changeConsultingArea();
    change750();
  });

});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        };
      });
    }
  }
});




