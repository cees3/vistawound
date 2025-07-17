/* =====================================================
Template Name   : Medicare
Description     : Medical and Doctor Bootstrap 5 HTML5 Template
Author          : Youtoview
Version         : 1.1
=======================================================*/

(function ($) {
  "use strict";

  /*====================================
			Header Sticky JS
		======================================*/
  jQuery(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  /*====================================
			Nice Select JS
		======================================*/
  $("select").niceSelect();

  /*=====================================
			Date Picker JS
		======================================*/
  $(function () {
    $("#datepicker").datepicker();
  });

  /*====================================
			Mobile Menu JS
		======================================*/
  $(".mobile-menu").slicknav({
    prependTo: ".mobile-nav",
    label: "",
    duration: 500,
  });

  /*================================
			Hero Slider JS
		==================================*/
  $(".hero-slider").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplay: 6000,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    merge: true,
    nav: true,
    navText: [
      '<i class="far fa-long-arrow-left" aria-hidden="true"></i>',
      '<i class="far fa-long-arrow-right" aria-hidden="true"></i>',
    ],
    dots: false,
  });

  /*================================
			Partner Slider JS
		==================================*/
  $(".partner-slider").owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 500,
    merge: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
      300: {
        items: 2,
      },
      480: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 6,
      },
    },
  });

  /*================================
			Testimonial Slider JS
		==================================*/
  $(".testimonial-slider").owlCarousel({
    items: 3,
    autoplay: false,
    loop: true,
    margin: 30,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 500,
    merge: true,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    dots: true,
    responsive: {
      300: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

  /*================================
			Doctors Slider JS
		==================================*/
  $(".doctors-slider").owlCarousel({
    items: 4,
    autoplay: false,
    loop: true,
    margin: 30,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    smartSpeed: 500,
    merge: true,
    nav: false,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    dots: false,
    responsive: {
      300: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 4,
      },
    },
  });

  /*====================================
			CounterUp Js
		======================================*/
  $(".counter").counterUp({
    time: 1000,
  });

  /*=====================================
			Video Popup JS
		======================================*/
  $(".video-popup").magnificPopup({
    type: "iframe",
    removalDelay: 300,
    mainClass: "mfp-fade",
  });

  /*====================================
			Wow JS
		======================================*/
  new WOW({
    mobile: true, // ✅ Enable animations on mobile
  }).init();

  /*================================
			ScrollUp JS
		==================================*/
  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    scrollDistance: 500, // Distance from top/bottom before showing element (px)
    scrollFrom: "top", // 'top' or 'bottom'
    scrollSpeed: 1000, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationSpeed: 50, // Animation speed (ms)
    scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
    scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
    easing: "easeInOut",
    scrollText: ["<i class='far fa-angle-double-up'></i>"], // Text for element, can contain HTML
    scrollTitle: false, // Set a custom <a> title if required.
    scrollImg: false, // Set true to use image
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 1, // Z-Index for the overlay
  });

  /*================================
			Preeloader JS
		==================================*/
  var date = new Date().getFullYear();
  $("#date").html(date);

  /*================================
			Copyright Date
		==================================*/
  $(window).on("load", function (event) {
    $(".preloader").delay(800).fadeOut(500);
  });

  /*================================
			search box toggle
		==================================*/
  $(".search-btn").on("click", function (event) {
    $(".popup-search-box").addClass("show");
  });
  $(".searchClose").on("click", function (event) {
    $(".popup-search-box").removeClass("show");
  });
})(jQuery);
