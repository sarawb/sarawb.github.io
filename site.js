$(function() {

  function changeConsultingArea() {
    var width = $(window).width();
    if(width >= 850) {
      $(".consulting-areas-wrapper").removeClass("twelve").addClass("six");
    } else {
      $(".consulting-areas-wrapper").addClass("twelve").removeClass("six");
    };
  };

  function changeClients() {
    var width = $(window).width();
    if(width >= 750) {
      $(".client-logos").addClass("one");
    } else {
      $(".client-logos").removeClass("one");
    };
  }

  function changeAbout() {
    var width = $(window).width();
    if(width >= 750) {
      $("#swb-img-wrapper").addClass("four columns");
      $("#about-content-wrapper").addClass("eight columns");
    } else {
      $("#swb-img-wrapper").removeClass("four columns");
      $("#about-content-wrapper").removeClass("eight columns");
    };
  };

  changeConsultingArea();
  changeClients();
  changeAbout();
  $( window ).resize(function() {
    changeConsultingArea();
    changeClients();
    changeAbout();
  });

});
