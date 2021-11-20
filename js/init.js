(function($) {
  $(function() {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $(".dropdown-trigger").dropdown();
    $(".carousel").carousel({
      indicators: true,
      dist: 25,
      shift: -3
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
