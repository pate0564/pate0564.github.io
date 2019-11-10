$(document).ready(function ($) {

    // Scroll to section
    $('a[href^="#"]').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
          jQuery('html,body').animate({
            scrollTop: target.offset().top
          }, 1000, 'easeInOutExpo');
          return false;
        }
      });

      // Navbar background color on scroll
      $(function () {
        $(document).scroll(function () {
          var $nav = $(".fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
      
});
