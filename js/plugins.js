/* 
 * Template Name      : Hmaitos Studio
 * Template Version   : V 1.0.0
 * Template Url       : .....................
 * Language           : HTML5, CSS3, jQuery 
 * Contact Me : Skaype   :- Hammani
 *				Facebook :- Ham mani
 *				Email    :- Ham47mani@gmail.com
 */

/*global $, window*/
$(function () {
    "use strict";
    
    /* ======================== Start Cashing Varriable ======================== */
    var myHeader        = $("header"),
        myIntro         = $(".intro"),
        myChivRight     = $(".testmonials .fa-chevron-right"),
        myChivLeft      = $(".testmonials .fa-chevron-left"),
        ColorLi         = $(".color-option ul li");
    /* ======================== End Cashing Varriable ======================== */
    
    /* ======================== Start Tool Box Color ======================== */
    //--> Show Color Option Div When Click On The Gear
    $(".gear-check").click(function () {
        $(".color-option").toggle('slow');
    });
    
    //--> Make Deffirent Color Inside The Color Option 
    ColorLi
        .eq(0).css("backgroundColor", "#F64747").end()
        .eq(1).css("backgroundColor", "#F62459").end()
        .eq(2).css("backgroundColor", "#9A12B3").end()
        .eq(3).css("backgroundColor", "#4183D7").end()
        .eq(4).css("backgroundColor", "#2ECC71");
    
    //--> Change The Main Color When Click In Option Color
    ColorLi.on("click", function () {
        $("body").get(0).style.setProperty("--main-color", $(this).css("backgroundColor"));
    });
    /* ======================== End Tool Box Color ======================== */
    
    /* ======================== Start Header ======================== */
    //--> Start Customize Header
    myHeader.height($(window).height());
    myIntro.css("paddingTop", ($(window).height() - myIntro.height()) / 2);
    
    //--> Customize Header On Resiza
    $(window).resize(function () {
        myHeader.height($(window).height());
        myIntro.css("paddingTop", ($(window).height() - myIntro.height()) / 2);
    });
    
    //--> Make Smoth Scroll On click To Icon Chevron
    $("header .fa-angle-double-down").click(function () {
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });
    
    //--> Make Smoth Scroll On click To Hure Us Button
    $("header .hure-us").click(function () {
        $("html, body").animate({
            scrollTop: $(".our-team").offset().top
        }, 1000);
    });
    
    //--> Make Smoth Scroll On click To Work Us Button
    $("header .ourWork").click(function () {
        $("html, body").animate({
            scrollTop: $(".work").offset().top
        }, 1000);
    });
    /* ======================== End Header ======================== */
    
    /* ======================== Start Our Work ======================== */
    //--> Show & Hide Item From Our Work
    $(".work .hover-btn").click(function () {
        if ($(this).text() === "Show More") {
            $(".work .hidden").slideDown(2000).addClass("visible");
            $(this).text("Hide Item");
        } else {
            $(".work .visible").slideUp(500).addClass("hidden");
            $(this).text("Show More");
        }
    });
    /* ======================== End Our Work ======================== */
    
    /* ======================== Start Testimonials ======================== */
    // Check Tesmonials
    function checkClients() {
        if ($(".client:first").hasClass("active")) { myChivLeft.fadeOut(); } else { myChivLeft.fadeIn(); }
        if ($(".client:last").hasClass("active")) { myChivRight.fadeOut(); } else { myChivRight.fadeIn(); }
    }
    
    //--> Call Function
    checkClients();
    
    //--> Make Action When Click In Chivron
    $(".testmonials i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".testmonials .active").fadeOut(1000, function () {
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                checkClients();
            });
        } else {
            $(".testmonials .active").fadeOut(1000, function () {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClients();
            });
        }
    });
    /* ======================== End Testimonials ======================== */
    
    /* ======================== Start Our Team ======================== */
    //--> Make An Auto Slide For Présent Our Team
    (function autoSlider() {
        $(".our-team .active").each(function () {
            if (!$(this).is(":last-child")) {
                $(this).delay(3000).fadeIn(0, function () {
                    $(this).removeClass("active").next(".persone").addClass("active");
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeIn(0, function () {
                    $(this).removeClass("active");
                    $(".our-team .persone").eq(0).addClass("active");
                    autoSlider();
                });
            }
        });
    }());
    /* ======================== End Our Team ======================== */
    
    /* ======================== Start Nice Scroll Library ======================== */
    $('html').niceScroll({
        cursorcolor: $("body").css("--main-color"),
        cursorborder: '1px solid var(--main-color)'
        
    });
    /* ======================== End Nice Scroll Library ======================== */
    
});

$(window).load(function () {
    "use strict";
    
    /* ======================== Start Loading ======================== */
    $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
    /* ======================== End Loading ======================== */
});