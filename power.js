
/*====================================
=            ON DOM READY            =
====================================*/
$(function(){
  $('.toogle-nav').on('click', function() {
    toggleNav();
    return false;
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      if ($('#site-wrapper').hasClass('show-nav')) {
        // Assuming you used the function I made from the demo
        toggleNav();
      }
    }
  });
});

/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
  if ($('#site-wrapper').hasClass('show-nav')) {
    $('#site-wrapper').removeClass('show-nav');
  } else {
    $('#site-wrapper').addClass('show-nav');
  }
}

// remove click delays on browsers with touch UIs
// https://github.com/ftlabs/fastclick

// tutorial on google
// https://developers.google.com/mobile/articles/fast_buttons
