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
      $(".client-logos").addClass("one");
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
