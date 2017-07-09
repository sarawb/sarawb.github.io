$(function() {

  function changeConsultingArea() {
    var width = $(window).width();
    if(width >= 850) {
      $(".consulting-areas-wrapper").removeClass("twelve").addClass("six");
    } else {
      $(".consulting-areas-wrapper").addClass("twelve").removeClass("six");
    };
  };

  changeConsultingArea();
  $( window ).resize(function() {
    changeConsultingArea();;
  });

});
