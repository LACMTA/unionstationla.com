var $ = jQuery.noConflict();
var height = screen.height / 2;

$(document).ready(function() {





    $(function() {
        setTimeout(function() {
            $(".splashOne").addClass("fadeOut");
        }, 2500);
    });
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 
  }
  else
  
  {
	// Lets you use background cover as well as a fixed position
    $(window).scroll(function() {
      var scrolledY = $(window).scrollTop();
      scrolledY = scrolledY / 4;
      $('.cycle-slide').css('background-position', 'center ' + ((scrolledY)) + 'px');
    });
  }

});




$(document).on("scroll", function() {
    if ($(document).scrollTop() > 100) {
        $(".topbar").addClass("shrink");
    } else {
        $(".topbar").removeClass("shrink");
    }
});




// JQ Masonry Layout

/*
	$(document).ready( function() {
	  // init Masonry
	  var $grid = $('#masonry').masonry({
	    itemSelector: '.hover',
	    percentPosition: true,
	    columnWidth: '.grid-sizer'
	  });
	  // layout Isotope after each image loads
	  $grid.on( 'progress', function() {
	    $grid.masonry();
	  }); 

	});
*/


$(document).ready(function() {
    imagesLoaded($('.grid'), function(instance) {
        var $grid = $('.grid').isotope({
            itemSelector: '.hover',
            percentPosition: true,
            transitionDuration: '0.7s',
            columnWidth: '.grid-sizer'
        });
        //Fix spaces below grids
        $grid.isotope('layout');
    })
});




(function($) {
    // VERTICALLY ALIGN FUNCTION
    $.fn.vAlign = function() {
        return this.each(function(i) {
            var ah = $(this).height();
            var ph = $(this).parent().height();
            var mh = Math.ceil((ph - ah) / 2);
            $(this).css('margin-top', mh);
        });
    };
})(jQuery);

$('.valign').vAlign();




    $('.jump a').click(function(event){
      event.preventDefault();
      var amount = $($(this).attr("href")).offset().top;

      // Offset for header height
      amount = amount - 210;     

      var amounttxt = amount + "px";
      if ($("nav").hasClass("open"))
      {
        close();
        $("html, body").delay(200).animate({ 
        scrollTop: amounttxt 
        }, 1200, "easeInOutQuint");
        
      }
      else
      {
        close();
        $("html, body").animate({ 
          scrollTop: amounttxt 
          }, 1200, "easeInOutQuint"
        );
      }
      
    });
