$(document).ready(function(){

              $('.carousel[data-type="multi"] .item').each(function(){
		  var next = $(this).next();
		  if (!next.length) {
			next = $(this).siblings(':first');
		  }
		  next.children(':first-child').clone().appendTo($(this));

		  for (var i=0;i<4;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));
		  }
        });

        $(".show-more-button").on('click', function() {
            // If text is shown less, then show complete
            if($(this).attr('data-more') == 0) {
                $(this).attr('data-more', 1);
                $(this).css('display', 'inline');
                $(this).css('color', '#37c386');
                $(this).css('cursor', 'pointer');
                $(this).text('Read Less');

                $(this).prev().css('display', 'inline');
                $(this).prev().prev().css('display', 'none');
            }
            // If text is shown complete, then show less
            else if(this.getAttribute('data-more') == 1) {
                $(this).attr('data-more', 0);
                $(this).css('display', 'inline');
                $(this).css('color', '#37c386');
                $(this).css('cursor', 'pointer');
                $(this).text('Read More');

                $(this).prev().css('display', 'none');
                $(this).prev().prev().css('display', 'inline');
            }
        });

        // Slideshow 4
        $("#slider3").responsiveSlides({
            auto: true,
            pager: true,
            nav: true,
            speed: 500,
            namespace: "callbacks",
            before: function () {
        $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
            $('.events').append("<li>after event fired.</li>");
            }
        });

});
