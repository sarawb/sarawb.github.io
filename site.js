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

  changeConsultingArea();
  changeClients();
  $( window ).resize(function() {
    changeConsultingArea();
    changeClients();
  });

});
