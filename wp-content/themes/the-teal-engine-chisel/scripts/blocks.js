(function($) {


  $(function() {

  	const HTML = $('#html');

  	// Partners Marquee
    let $partners = $('.js-partners--list');

    if ($partners.length) {

      $partners.marquee({
        duration: 18000,
        gap: 20,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
      });

    }

    // Grid euqal column height
    $('.js-equal-height').matchHeight();


    // Select all links with hashes, smooth scroll
    $('.editor--styles a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });


     // Mobile Menu

     $('#js-menu--toggle').on('click', function(e) {
         e.stopPropagation();
         var $this = $(this);

         if ( HTML.hasClass('menu--opened')) {
             HTML.removeClass('menu--opened');
         } else {
             HTML.addClass('menu--opened');
         }

     });

     HTML.on('click', function() {
         HTML.removeClass('menu--opened');
     });

  });


})(jQuery);
