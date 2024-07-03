/*-----------------------------------------------------------------------------------
    Template Name: Ygency - Web Agency HTML Template
    Template URI: https://webtend.net/demo/html/ygency/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    ## Header Style
    ## Dropdown menu
    ## Submenu
    ## Menu Hidden Sidebar
    ## Search Box
    ## Video Popup
    ## Project Slider
    ## Testimonial
    ## Testimonial Two
    ## Testimonial Three
    ## ## Work Gallery
    ## Fact Counter
    ## Circle Counter
    ## Scroll to Top
    ## Nice Select
    ## WOW Animation
    ## Preloader
    
-----------------------------------------------------------------------------------*/

(function ($) {
  "use strict";

  $(document).ready(function () {
    // ## Header Style and Scroll to Top
    function headerStyle() {
      if ($(".main-header").length) {
        var windowpos = $(window).scrollTop();
        var siteHeader = $(".main-header");
        var scrollLink = $(".scroll-top");
        if (windowpos >= 250) {
          siteHeader.addClass("fixed-header");
          scrollLink.fadeIn(300);
        } else {
          siteHeader.removeClass("fixed-header");
          scrollLink.fadeOut(300);
        }
      }
    }
    headerStyle();

    // ## Dropdown menu
    var mobileWidth = 992;
    var navcollapse = $(".navigation li.dropdown");

    navcollapse.hover(function () {
      if ($(window).innerWidth() >= mobileWidth) {
        $(this).children("ul").stop(true, false, true).slideToggle(300);
        $(this).children(".megamenu").stop(true, false, true).slideToggle(300);
      }
    });

    // ## Submenu Dropdown Toggle
    if ($(".main-header .navigation li.dropdown ul").length) {
      $(".main-header .navigation li.dropdown").append(
        '<div class="dropdown-btn"><span class="far fa-plus"></span></div>'
      );

      //Dropdown Button
      $(".main-header .navigation li.dropdown .dropdown-btn").on(
        "click",
        function () {
          $(this).prev("ul").slideToggle(500);
          $(this).prev(".megamenu").slideToggle(800);
        }
      );

      //Disable dropdown parent link
      $(".navigation li.dropdown > a").on("click", function (e) {
        e.preventDefault();
      });
    }

    //Submenu Dropdown Toggle
    if ($(".main-header .main-menu").length) {
      $(".main-header .main-menu .navbar-toggle").click(function () {
        $(this).prev().prev().next().next().children("li.dropdown").hide();
      });
    }

    // ## Menu Hidden Sidebar Content Toggle
    if ($(".menu-sidebar").length) {
      //Show Form
      $(".menu-sidebar").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("side-content-visible");
      });
      //Hide Form
      $(".hidden-bar .inner-box .cross-icon,.form-back-drop,.close-menu").on(
        "click",
        function (e) {
          e.preventDefault();
          $("body").removeClass("side-content-visible");
        }
      );
      //Dropdown Menu
      $(".fullscreen-menu .navigation li.dropdown > a").on(
        "click",
        function () {
          $(this).next("ul").slideToggle(500);
        }
      );
    }

    // ## Search Box
    $(".nav-search > button").on("click", function () {
      $(".nav-search form").toggleClass("hide");
    });

    // Hide Box Search WHEN CLICK OUTSIDE
    if ($(window).width() > 767) {
      $("body").on("click", function (event) {
        if (
          $(".nav-search > button").has(event.target).length == 0 &&
          !$(".nav-search > button").is(event.target) &&
          $(".nav-search form").has(event.target).length == 0 &&
          !$(".nav-search form").is(event.target)
        ) {
          if ($(".nav-search form").hasClass("hide") == false) {
            $(".nav-search form").toggleClass("hide");
          }
        }
      });
    }

    // ## Video Popup
    if ($(".video-play").length) {
      $(".video-play").magnificPopup({
        type: "video",
      });
    }

    // ## Project Slider
    if ($(".project-slider-active").length) {
      $(".project-slider-active").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: ".project-prev",
        nextArrow: ".project-next",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }

    // ## Testimonial Slider
    if ($(".testimonials-active").length) {
      $(".testimonials-active").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: ".testimonial-prev",
        nextArrow: ".testimonial-next",
        appendDots: ".testimonial-dots",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }

    // ## Testimonial Two Slider
    if ($(".testimonials-two-active").length) {
      $(".testimonials-two-active").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow:
          '<button class="prev-arrow"><i class="fal fa-chevron-left"></i></button>',
        nextArrow:
          '<button class="next-arrow"><i class="fal fa-chevron-right"></i></button>',
        appendDots: ".testimonial-two-dots",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }

    // ## Testimonial Three Slider
    if ($(".testimonials-three-active").length) {
      $(".testimonials-three-active").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: ".testimonial-three-prev",
        nextArrow: ".testimonial-three-next",
        appendDots: ".testimonial-three-dots",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }

    // ## Work Gallery Slider
    if ($(".work-gallery-active").length) {
      $(".work-gallery-active").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: ".work-gallery-prev",
        nextArrow: ".work-gallery-next",
        appendDots: ".work-gallery-dots",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }

    /* ## Fact Counter + Text Count - Our Success */
    if ($(".counter-text-wrap").length) {
      $(".counter-text-wrap").appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text(),
            }).animate(
              {
                countNum: n,
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                },
              }
            );
          }
        },
        {
          accY: 0,
        }
      );
    }

    /* ## Circle Counter */
    if ($.fn.circleProgress) {
      var progress1 = $(".one.progress-content");
      if ($.fn.circleProgress) {
        progress1.appear(function () {
          progress1
            .circleProgress({
              value: 0.7,
              size: 125,
              thickness: 25,
              fill: "#55E6A5",
              lineCap: "square",
              emptyFill: "white",
              startAngle: (-Math.PI / 4) * 2,
              animation: { duration: 2000 },
            })
            .on("circle-animation-progress", function (event, progress) {
              $(this)
                .find(".counting")
                .html(Math.round(89 * progress) + "<span>%</span>");
            });
        });
      }
    }

    if ($.fn.circleProgress) {
      var progress2 = $(".two.progress-content");
      if ($.fn.circleProgress) {
        progress2.appear(function () {
          progress2
            .circleProgress({
              value: 0.75,
              size: 125,
              thickness: 25,
              fill: "#55E6A5",
              lineCap: "square",
              emptyFill: "white",
              startAngle: (-Math.PI / 4) * 2,
              animation: { duration: 2000 },
            })
            .on("circle-animation-progress", function (event, progress) {
              $(this)
                .find(".counting")
                .html(Math.round(93 * progress) + "<span>%</span>");
            });
        });
      }
    }

    if ($.fn.circleProgress) {
      var progress3 = $(".three.progress-content");
      if ($.fn.circleProgress) {
        progress3.appear(function () {
          progress3
            .circleProgress({
              value: 0.6,
              size: 125,
              thickness: 25,
              fill: "#55E6A5",
              lineCap: "square",
              emptyFill: "white",
              startAngle: (-Math.PI / 4) * 2,
              animation: { duration: 2000 },
            })
            .on("circle-animation-progress", function (event, progress) {
              $(this)
                .find(".counting")
                .html(Math.round(75 * progress) + "<span>%</span>");
            });
        });
      }
    }

    // ## Scroll to Top
    if ($(".scroll-to-target").length) {
      $(".scroll-to-target").on("click", function () {
        var target = $(this).attr("data-target");
        // animate
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          1000
        );
      });
    }

    // ## Nice Select
    $("select").niceSelect();

    // ## WOW Animation
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  });

  /* ==========================================================================
       When document is resize, do
       ========================================================================== */

  $(window).on("resize", function () {
    var mobileWidth = 992;
    var navcollapse = $(".navigation li.dropdown");
    navcollapse.children("ul").hide();
    navcollapse.children(".megamenu").hide();
  });

  /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

  $(window).on("scroll", function () {
    // Header Style and Scroll to Top
    function headerStyle() {
      if ($(".main-header").length) {
        var windowpos = $(window).scrollTop();
        var siteHeader = $(".main-header");
        var scrollLink = $(".scroll-top");
        if (windowpos >= 100) {
          siteHeader.addClass("fixed-header");
          scrollLink.fadeIn(300);
        } else {
          siteHeader.removeClass("fixed-header");
          scrollLink.fadeOut(300);
        }
      }
    }

    headerStyle();
  });

  /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

  $(window).on("load", function () {
    // ## Preloader
    function handlePreloader() {
      if ($(".preloader").length) {
        // $('.preloader').delay(200).fadeOut(500);
        $(".preloader").fadeOut();
      }
    }
    handlePreloader();
  });
})(window.jQuery);
