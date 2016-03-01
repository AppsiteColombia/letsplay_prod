jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    //  1. Header Menu Sticky
    //  2. fidvids for video responsive
    //  3. Collapse menu on click (only for mobile)
    //  4. ScrollUp Minimum setup
    // -------------------------------------------------------------


    // -------------------------------------------------------------
    //  Header Menu Sticky
    // -------------------------------------------------------------

    (function () {
            $("#header").sticky({ topSpacing: 0, center:true, className:"sticky" });
    }());


   
    // -------------------------------------------------------------
    // fidvids for video responsive
    // -------------------------------------------------------------
        (function () {
            $(".post-image").fitVids();
        })();



    //-------------------------------------------------------------
    // ScrollUp Minimum setup 
    //-------------------------------------------------------------

     $(function () {

        $.scrollUp();

     });

$(window).load(function(){ $('.preloader').fadeOut("slow"); });

}); // end custom jQuery 