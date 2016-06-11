jQuery(function ($) {

    'use strict';

    


     // -------------------------------------------------------------
    //  Owl Carousel
    // -------------------------------------------------------------
        
        $('.owl-carousel').owlCarousel({
            items: 1,
            center:true,
            autoplay:true,
            nav:true,
            loop:true,
			autoplayTimeout:5000
        });  

    // -------------------------------------------------------------
    //  magnificPopup
    // -------------------------------------------------------------

    (function () {

        $('.popup').magnificPopup({
          type: 'image',
          gallery:{enabled:true}
          // other options
        });

    }());
	
	
	// -------------------------------------------------------------
    // Wow Animation
    // -------------------------------------------------------------
	
	   jQuery(function ($) {
			var wow = new WOW({
			mobile:       false
			});
			wow.init();
		}());
	
    // -------------------------------------------------------------
    // Scroll Menu / Navigation Scroll
    // -------------------------------------------------------------
        
        (function () {

            $(window).scroll(function(event) {
                 Scroll();
            }); 
            
			
			$('.navbar-collapse ul li').on('click', 'a', function() {
				 $('html, body').animate({scrollTop: $(this.hash).offset().top -0}, {duration: 1000,specialEasing: {height: "easeOutBounce"}} );
                 return false;
            });
			            
            // User define function
            function Scroll() {
                var contentTop      =   [];
                var contentBottom   =   [];
                var winTop      =   $(window).scrollTop();
                var rangeTop    =   200;
                var rangeBottom =   500;
                $('.navbar-collapse').find('.scroll a').each(function(){
                    contentTop.push( $( $(this).attr('href') ).offset().top);
                    contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
                    

                })
                $.each( contentTop, function(i){
                    if ( winTop > contentTop[i] - rangeTop ){
                        
                        $('.navbar-collapse li.scroll')
                        .removeClass('active')
                        .eq(i).addClass('active');          
                                            }
                })

            };
            
        }());
		
		
		
    // -------------------------------------------------------------
    //  Isotope Setup
    // -------------------------------------------------------------

    (function () {

        //Isotope
        var winDow = $(window);
        // Needed variables
        var $container=$('.breed-items');
        var $filter=$('.filter');

        try{
            $container.imagesLoaded( function(){
                $container.show();
                $container.isotope({
                    filter:'*',
                    layoutMode:'masonry',
                    animationOptions:{
                        duration:750,
                        easing:'linear'
                    }
                });
            });
        } catch(err) {
        }

        winDow.bind('resize', function(){
            var selector = $filter.find('a.active').attr('data-filter');

            try {
                $container.isotope({ 
                    filter  : selector,
                    animationOptions: {
                        duration: 750,
                        easing  : 'linear',
                        queue   : false,
                    }
                });
            } catch(err) {
            }
            return false;
        });
        
        // Isotope Filter 
        $filter.find('a').click(function(){
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({ 
                    filter  : selector,
                    animationOptions: {
                        duration: 750,
                        easing  : 'linear',
                        queue   : false,
                    }
                });
            } catch(err) {

            }
            return false;
        });


        var filterItemA = $('.filter a');

        filterItemA.on('click', function(){
            var $this = $(this);
            if ( !$this.hasClass('active')) {
                filterItemA.removeClass('active');
                $this.addClass('active');
            }
        });

    }());


    // -------------------------------------------------------------
    //  Hover Direction Animation
    // -------------------------------------------------------------

        (function () {
            
            $('.staff-image ').each( function() { $(this).hoverdir(); } );

        }());


 // -------------------------------------------------------------
    // Accordion
    // -------------------------------------------------------------

        (function () {
        
            $('.collapse').on('show.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-about');
                $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-caret-down"></i>');
            });
            $('.collapse').on('hide.bs.collapse', function() {
                var id = $(this).attr('id');
                $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-about');
                $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-caret-right"></i>');
            });

        }());



    // -------------------------------------------------------------
    //  Counter Initialize
    // -------------------------------------------------------------

        (function () {

            $('.counter').each(function(){
                var counter = $(this).data('counter');
                var $this = $(this);
                $this.waypoint(function(direction) {
                    if( !$(this).hasClass('animated') ) {    
                        $(this).countTo({
                            from: 0,
                            to: counter,
                            speed: 2000,
                            refreshInterval: 100,
                            onComplete: function() {
                                $(this).addClass('animated');
                            }
                        });
                    }
                } , { offset: '100%' } );
            });

        }());
		

    // -------------------------------------------------------------
	// Contact form
	// -------------------------------------------------------------
	
	//Ajax contact

		$(function() {
		$('#contact-form').submit(function() {
		var name = $('#name').val();
		var email =$('#email').val();
		var subject =$('#subject').val();
		var message =$('#message').val();
				$.ajax({
					type: 'POST',
					url: './sendemail.php',
					data: { name:name, email:email, subject:subject, message:message,  }
				});
				$('#contact-form').trigger('reset');
				$('.thank-you').addClass("show-on-success");
				return false;
			}); 
		});
}); // end custom jQuery 