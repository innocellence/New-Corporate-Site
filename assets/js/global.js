---
---
// -------------------------------------------------------------- //
// Detect                                                         //
// -------------------------------------------------------------- //

///////////
// Layout Check
///////////
var $pageLayout = $('body').attr('class');


///////////
// Mobile Check
///////////
if ($('.mobile').css('display') === 'block') {
  
	var isMobile = true;

} else {}

///////////
// Touch Device Check
///////////
function isTouchDevice() {

  return 'ontouchstart' in window ||
    'onmsgesturechange' in window;

}

///////////
// Resize Check
///////////
var browser_w = $(window).innerWidth(), 
    browser_h = $(window).innerHeight(),
    resizeOverlay = "<div class='resize__content'><h2>Oops, your browser window is too small!</h2><p>We have optimized our site for windows wider than 360px. Please resize your browser window.</p></div>";

//if (browser_w < 360) { 
//  $('.mobile').addClass('resize__overlay').html(resizeOverlay);
//} else {
//  $('.mobile').removeClass('resize__overlay').html('');
//}
//if (browser_h < 768) { 
//  $('.mobile').addClass('resize__overlay').html(resizeOverlay);
//} else {
//  $('.mobile').removeClass('resize__overlay').html('');
//}
//if ( (browser_w > 768)  && (browser_h < 540 ) ) {
//  $('.mobile').addClass('resize__overlay').html(resizeOverlay);
//} else {
//  $('.mobile').removeClass('resize__overlay').html('');
//}
//if ( (browser_w > 1200)  && (browser_h < 700 ) ) {
//  $('.mobile').addClass('resize__overlay').html(resizeOverlay);
//} else {
//  $('.mobile').removeClass('resize__overlay').html('');
//}

$(window).resize(function() {
  var browserW = $(window).innerWidth(), 
      browserH = $(window).innerHeight(),
      overlay = $(".resize_overlay");
  
  // Width Check
//  if ( browserW < 360 ) {
//    if (overlay.length == 0) {
//      $('.mobile').addClass('resize__overlay').html(resizeOverlay);
//    }
//  } else {
//    $('.mobile').removeClass('resize__overlay').html('');
//  }
  // Height Check
//  if ( (browserW > 768)  && (browserH < 540 ) ) {
//    if (overlay.length == 0) {
//      $('.mobile').addClass('resize__overlay').html(resizeOverlay);
//    }
//  } else {
//    $('.mobile').removeClass('resize__overlay').html('');
//  }
});

// -------------------------------------------------------------- //
// Basic Functions                                                //
// -------------------------------------------------------------- //

///////////
// IE9+ support forEach
///////////
function forEach() {
  if (typeof NodeList.prototype.forEach === "function")
    return false;
  else
    NodeList.prototype.forEach = Array.prototype.forEach;
}

///////////
// External Links
///////////
function externalLinks() {
  $("a[href^='http']").attr("target","_blank").addClass("ext");
}

///////////
// Custom Generator
///////////
function cursorGenerate() {
  $('body').prepend('<div class="cursor"></div>');
}

///////////
// Replace Cursor
///////////
function cursorReplace() {
  $('a').on({
    mouseenter: function() {
      $('.cursor').addClass('active');
    },
    mouseleave: function() {
      $(".cursor").removeClass('active');
    }
  });
  $(document).bind('mousemove', function(e) {
    $('.cursor').css({
      left: e.pageX,
      top: e.pageY
    });
  });
}

///////////
// Smooth Scroll
///////////
function smoothScroll () {
  $('a[href^="#"]').click(function() {
    var $target = $(this.hash);
    var hash = this.hash;
    if ($target.length == 0) $target = $('a[name="' + this.hash.substr(1) + '"]');
    if ($target.length == 0) $target = $('html');
    console.log('📜ing');
    // Scroll to the element
    $('html, body').animate({ scrollTop: $target.offset().top + (-54) }, 1000, function (){
        location.hash = hash;
    });
  return false;
  });
}


// -------------------------------------------------------------- //
// Navigation + Progress                                          //
// -------------------------------------------------------------- //

function navigation () {

  // Variables
  var $n = $('nav'),
      $t = $('#mobileMenuTrigger'),
      $l = $('.mobile_navigation a'),
      $h = $('html'),
      $b = $('body'),
      $p = $('.progress'),
      $i = $('.progress__indicate'),
      $w = $('.wrapper > .section:first-child'),
      previousScroll = 0,
      menuOffset = $('.main_navigation').outerHeight(),
      hideShowOffset = 6; // scrolling value after which triggers hide/show menu
  
  // Close Moble Menu on link select
  $l.click(function() {
    $n.removeClass('expanded');
    $h.removeClass('no_scroll');
    $('.mobile_navigation').slideUp();
    console.log('Shut the front🚪');
  })

  // Define mobile trigger
  $t.click(function() {
    if ($n.hasClass('expanded')) {
      $n.removeClass('expanded');
      $h.removeClass('no_scroll');
      $('.mobile_navigation').slideUp();
      console.log('Shut the front🚪');
    } else {
      $n.removeClass('invisible').addClass('expanded');
      $h.addClass('no_scroll');
      $('.mobile_navigation').slideDown();
      console.log('🧞 Open sesame');
    }
  })

  // Offset the page content
  $w.css({ paddingTop : menuOffset + 'px' });
  $(window).resize(function() {
    var menuOffset = $('.main_navigation').outerHeight();
    $w.css({ paddingTop : menuOffset + 'px' });
  })

  // Reset the Nav onLoad
  $p.removeClass('invisible');
  $n.removeClass('invisible');
  
  // On scroll hide/show
  $(window).scroll(function() {
    if ($n.hasClass('expanded')) {
    } else {
      var currentScroll = $(this).scrollTop(),
          scrollDifference = Math.abs(currentScroll - previousScroll);
      // if scrolled past menu
      if (currentScroll > menuOffset) {
        // if scrolling faster than hideShowOffset hide/show menu
        if (scrollDifference >= hideShowOffset) {
          if (currentScroll > previousScroll) {
            // scrolling down; hide menu
            $p.addClass('invisible');
            $n.addClass('invisible');
          } else {
            // scrolling up; show menu
            $p.removeClass('invisible');
            $n.removeClass('invisible');
          }
        }
      } else {

      }

      // if user is at the bottom of document show menu
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $p.removeClass('invisible');
        $n.removeClass('invisible');
      }

      // replace previous scroll position with new one
      previousScroll = currentScroll;
    }
  })

  // Map the progess
  $(window).scroll(function() {
    var scrollDistance = $b.height() - ($b.height() - $(document).scrollTop());
    var pageH = $b.height() - $(window).height();
    var pageP = scrollDistance / pageH * 100;
    if (pageP >= 100){
      $i.css({ width : "100vw" });
    } else {
      $i.css({ width : pageP + "vw" });
    }
  });
  
  // Append sections to pagename
  var $section = $($('*[data-title]').get().reverse());  
  $section.each(function(){
    var el = $(this),
        i = el.attr('id'),
        t = el.attr('data-title'),
        p = $('.pagename');
    
    // Append the sections
      p.append('<div data-section="' + i + '">' + t + '</div>');  
  });
  
  // Highlight the current section
  function highlightSection() {
    var scrollPosition = $(window).scrollTop(),
        p = ($('.pagename').position().top) + ($('.pagename').height()),
        $section = $($('*[data-title]').get().reverse()); 

    // Iterate each section
    $section.each(function() {
      var sectionTop = $(this).offset().top,
          sectionH = $(this).outerHeight();

      // if scrolled to the section  
      if ( scrollPosition >= sectionTop - p ){
        var i = $(this).attr('id'),
            $match = $('.pagename div[data-section=' + i +']');
        
        if ( $match ) {
          // If not active
          if (!$match.hasClass('active')) {
            if (i === 'footer') {
              console.log('✋ End of page');
            } else {
              console.log('👀 Viewing > #' + i);
            }
            $('.pagename div').removeClass('active');
            $match.addClass('active');
          }
        } else {}
          // Exit the each loop
          return false;
      }
    });
  }
  
  // Run the highlighter
  highlightSection();
  $(window).scroll( highlightSection );
}


// -------------------------------------------------------------- //
// Parallax / Movement                                            //
// -------------------------------------------------------------- //

///////////
// Set Animation Frame
///////////

window.requestAnimFrame = (function() {
return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

///////////
// Parallax
///////////

function servicesParallax() {
  if (isMobile === true) {
  } else {
    var viewportTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      viewportBottom = windowHeight + viewportTop,
      sym = '-';

    if ($(window).width()) {
      $('#innovation-consulting img.fluid').each(function() {
        var distance = (viewportTop * .1).toFixed(2);
        $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
      });
    }
  }
}

function aboutParallax() {
  if (isMobile === true) {
  } else {
    var viewportTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      viewportBottom = windowHeight + viewportTop,
      sym = '-';

    if ($(window).width()) {
      $('#about img.fluid').each(function() {
        var distance = (viewportTop * .1).toFixed(2);
        $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
      });
    }
  }
}

function homeParallax() {
  if (isMobile === true) {
  } else {
    var viewportTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      viewportBottom = windowHeight + viewportTop,
      sym = '-';

    if ($(window).width()) {
      // Add homeParallax here
    }
  }
}

///////////
// Movement
///////////

function servicesMove() {
  requestAnimFrame(servicesMove);
  servicesParallax();
}
function aboutMove() {
  requestAnimFrame(aboutMove);
  aboutParallax();
}
function homeMove() {
  requestAnimFrame(homeMove);
  homeParallax();
}


// -------------------------------------------------------------- //
// Layouts                                                        //
// -------------------------------------------------------------- //


function layout() {
  
  var $pageLayout = $('body').attr('class');
  
  ///////////
  // Home Layout --------------------------------------------------
  ///////////
  
  if ($pageLayout === 'home') {
    
    ///////////
    // Masthead Split
    ///////////
    Splitting();
    
    ///////////
    // Masthead Animation
    ///////////
    
    var c = new ScrollMagic.Controller;
    
    $(function() {
      document.querySelectorAll("#masthead").forEach(function(t) {
        
        // Loading
        var load = new TimelineMax()
        .add([
          TweenMax.fromTo(".masthead__panel--top", .5, {autoAlpha: 0 }, { autoAlpha: 1 }),
          TweenMax.fromTo(".masthead__panel--bottom", .5, { autoAlpha: 0 }, { autoAlpha: 1 }),
          TweenMax.staggerFromTo(".masthead__panel--top .word", 1, { autoAlpha: 1 }, { autoAlpha: 1, className:"+=load" }, .1),
          TweenMax.staggerFromTo(".masthead__panel--bottom .word", 1, { autoAlpha: 1 }, { autoAlpha: 1, className:"+=load" }, .1),
        ])
        .add([
          TweenMax.fromTo(".masthead__panel--top .masthead__subline", .5, { autoAlpha: 0 }, { autoAlpha: 1 }),
          TweenMax.to($('.masthead__panel--top .word[data-word="design"] .char'), 1, { color: "#FFFFFF", textShadow: "-1px -1px 0 #375EB4, 1px -1px 0 #375EB4, -1px 1px 0 #375EB4, 1px 1px 0 #375EB4", ease: Power2.easeInOut, delay: .65 }),
          TweenMax.to($('.masthead__panel--bottom .word[data-word="design"] .char'), 1, { color: "#375EB4", ease: Power2.easeInOut, delay: .65 }),
          TweenMax.to($('.masthead__panel--top .word[data-word="develop"] .char'), 1, { color: "#FFFFFF", textShadow: "-1px -1px 0 #375EB4, 1px -1px 0 #375EB4, -1px 1px 0 #375EB4, 1px 1px 0 #375EB4", ease: Power2.easeInOut, delay: .65 }),
          TweenMax.to($('.masthead__panel--bottom .word[data-word="develop"] .char'), 1, { color: "#375EB4", ease: Power2.easeInOut, delay: .65 }),
          TweenMax.to($('.masthead__panel--top .word[data-word="succeed."] .char'), 1, { color: "#FFFFFF", textShadow: "-1px -1px 0 #375EB4, 1px -1px 0 #375EB4, -1px 1px 0 #375EB4, 1px 1px 0 #375EB4", ease: Power2.easeInOut, delay: .65 }),
          TweenMax.to($('.masthead__panel--bottom .word[data-word="succeed."] .char'), 1, { color: "#375EB4", ease: Power2.easeInOut, delay: .65 }),
          TweenMax.to(".masthead .link", 1, { className:"+=load", ease: Power2.easeInOut, delay: .65 }),
        ]);
        
        // Scatter
        var scatter = new TimelineMax()
          .add([
            TweenMax.staggerFromTo(".masthead__panel--top .word", 1, { y: 0, autoAlpha: 1 }, { y: "-80%", autoAlpha: 1, ease: Power2.easeInOut }, .1),
            TweenMax.staggerFromTo(".masthead__panel--bottom .word", 1, { y: 0, autoAlpha: 1 }, { y: "-80%", autoAlpha: 0, ease: Power2.easeInOut }, .1),
          ]);
        
        // Build Scene
        new ScrollMagic.Scene({
          triggerElement: t,
          duration: '0',
          triggerHook: 1,
          reverse: false,
        })
        .setTween(load).addTo(c);
        
        // Build Scene
        new ScrollMagic.Scene({
          triggerElement: t,
          duration: '70%',
          triggerHook: 0,
        })
        .setTween(scatter).addTo(c);
      })
    });
    
    ///////////
    // Stories Swiper
    ///////////
    
    if ($('#stories').length ) {
      
      $('#stories').imagesLoaded( function() {
        // Story images loaded > Intiate Swiper
        console.log('#stories 🖼️ loaded');

        var swiper = new Swiper ('#stories .swiper-container', {
          direction: 'horizontal',
          speed: 650,
          spaceBetween: 0,
          slidesPerView: 'auto',
          autoHeight: true,
          centeredSlides: true,
          freeMode: false,
          grabCursor: true,
          watchSlidesVisibility: true,
          disableOnInteraction: true,
          parallax: true,
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      });
    }
    
    ///////////
    // Load Movement
    ///////////
    
    homeMove();
    
  } else {}
  
  
  ///////////
  // About Layout --------------------------------------------------
  ///////////
  
  if ($pageLayout === 'about') {
    
    ///////////
    // Process Animation
    ///////////
    
    var c = new ScrollMagic.Controller();
    
    // Discover
    $(function () {
      document.querySelectorAll("#discover").forEach(function(t) {
        
        // Tween
        var discover = new TimelineMax()
          .add([
            TweenMax.staggerFromTo(".flow .mask", 1, {height: "100%"}, {height: "0", ease: Linear.ease}, 1),
            TweenMax.staggerFromTo(".notes", .5, {autoAlpha: 0}, {autoAlpha: 1, className: "+=show", delay: .5, ease: Power2.easeInOut}, 1),
          ]);

        // Build Scene
        new ScrollMagic.Scene({
          triggerElement: t,
          duration: '125%',
          triggerHook: .8,
        })
        .setTween(discover).addTo(c);  
      })
    }); 
    
    // Iterate
    $(function () {
      document.querySelectorAll("#develop").forEach(function(u) {
        
        // Tween
        var iterate = new TimelineMax()
          .add([
            TweenMax.fromTo("#iterate .pie", 0, {autoAlpha: 0}, {autoAlpha: 1}),
            TweenMax.fromTo("#iterate .pie-r .inner", .5, {rotation: 180}, {rotation: 0, ease: Linear.easeIn}),
          ])
          .add ([
            TweenMax.fromTo("#iterate .pie-l .inner", .5, {rotation: 180}, {rotation: 90, ease: Linear.ease}),
            TweenMax.fromTo("#iterate .triangle", .2, {autoAlpha: 1, scaleY: 0}, {autoAlpha: 1, scaleY: 1, delay: .5, ease: Linear.easeOut}),
          ]);

        // Build Scene
        new ScrollMagic.Scene({
          triggerElement: u,
          duration: '15%',
          triggerHook: .75,
        })
        .setTween(iterate).addTo(c);    
      })
    });  
    
    
    ///////////
    // Voices Swiper
    ///////////
    
    if ($('#voices').length ) {
      
      $('#voices').imagesLoaded( function() {
        // Voices images loaded > Intiate Swiper
        console.log('#voices 🖼️ loaded');

        var swiper = new Swiper ('#voices .swiper-container', {
          direction: 'horizontal',
          speed: 650,
          spaceBetween: 0,
          slidesPerView: 'auto',
          autoHeight: true,
          centeredSlides: true,
          freeMode: false,
          grabCursor: true,
          watchSlidesVisibility: true,
          disableOnInteraction: true,
          parallax: true,
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      });
    }
    
    ///////////
    // Load Movement
    ///////////
    
    aboutMove();
    
  } else {}
  
  
  ///////////
  // Services Layout --------------------------------------------------
  ///////////
  
  if ($pageLayout === 'services') {
    
    ///////////
    // Partners Swiper
    ///////////
    
    if ($('#partners').length ) {
      
      $('#partners').imagesLoaded( function() {
        // Story images loaded > Intiate Swiper
        console.log('#partners 🖼️ loaded');

        var swiper = new Swiper ('#partners .swiper-container', {
          direction: 'horizontal',
          speed: 650,
          spaceBetween: 0,
          slidesPerView: 5,
          breakpoints: {
            // when window width is mi
            425: {
              slidesPerView: 1
            },
            // when window width is sm
            768: {
              slidesPerView: 2
            },
            // when window width is xl
            1280: {
              slidesPerView: 3
            },
            // when window width is xxl
            1600: {
              slidesPerView: 4
            }
          },
          autoHeight: false,
          centeredSlides: false,
          freeMode: false,
          grabCursor: true,
          watchSlidesVisibility: true,
          disableOnInteraction: true,
          parallax: true,
          autoplay: {
            delay: 4000,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      });
    }
    
    ///////////
    // Load Movement
    ///////////
    
    servicesMove();
    
  } else {}
  
  
  ///////////
  // Contact Layout --------------------------------------------------
  ///////////

  if ($pageLayout === 'contact') {
    
    ///////////
    // Set Timezones
    ///////////
    
    $(function() {
      
      function timeZones() {
        var sin = moment().tz("Asia/Kuala_Lumpur").format('LT');    
        var tok = moment().tz("Asia/Tokyo").format('LT');   
        var lon = moment().tz("Europe/London").format('LT');   
        var cn = moment().tz("Asia/Shanghai").format('LT');   
        var chi = moment().tz("America/Chicago").format('LT');   
        $("#sgTime").html(sin);
        $("#jpTime").html(tok);
        $("#ukTime").html(lon);
        $("#shTime").html(cn);
        $("#dlTime").html(cn);
        $("#ciTime").html(chi);
      }

      // Set the refresh interval
      function firstPartialMinuteOnce(){
        setInterval(timeZones, 1000 * 60); // update once a minute
        timeZones();
      }

      // Load
      timeZones(); 

      // Count 60 seconds
      var seconds = (60 - (new Date().getSeconds()));
      if (seconds <= 0) {
        seconds = 60;
      }

      // Set a timeout for the first refresh
      setTimeout(firstPartialMinuteOnce, 1000 * seconds);
    });
    
  } else {}
  
  
  ///////////
  // Careers Layout --------------------------------------------------
  ///////////
  
  if ($pageLayout === 'careers') {
    
    ///////////
    // Jobs List
    ///////////
    
    $(function() {
      var $job = $('.job');
      
      // Expand the job on click
      $job.click(function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).children('.job__content').slideToggle();
      });    
    });
  
  } else {}
  
  
  ///////////
  // Whitepapers Layout --------------------------------------------------
  ///////////
  
  if ($pageLayout === 'whitepapers') {
    
    ///////////
    // Set Tile Height
    ///////////
    
    $(function() {
      $('.match').matchHeight();
    });
    
    ///////////
    // Change Menu
    ///////////
    
    var c = new ScrollMagic.Controller;
    
    $(function() {
      document.querySelectorAll("#archive").forEach(function(t) {
        
        // Calculate the window
        var $w = $(window).height(),
            $o = $w * .2; 
        
        // Build Scene
        new ScrollMagic.Scene({
          triggerElement: t,
          offset: -$o,
          triggerHook: 0,
        })
        .setClassToggle(".main_navigation", "default").addTo(c);  
      })
    }); 
    
  } else {}
}


// -------------------------------------------------------------- //
// Loading Animations                                             //
// -------------------------------------------------------------- //

function loadingAnimations() {
  var l = new ScrollMagic.Controller;
  
  // Fade From Below ----------------------------------------------
  
  $(function() {
    document.querySelectorAll(".fade-c-below").forEach(function(t) {
      var e = new TimelineMax();
      e.add("Start").to(t, 1, {
        className: "+=loaded"}, "Start"),
      new ScrollMagic.Scene({
        triggerElement: t,
        triggerHook: .75,
        reverse: false
      })
      .setTween(e).addTo(l)
    })
  });
  
  // Fade From Transparent ----------------------------------------
  
  $(function() {
    document.querySelectorAll(".fade-c-transparent").forEach(function(t) {
      var e = new TimelineMax();
      e.add("Start").to(t, 1, {
        className: "+=loaded"}, "Start"),
      new ScrollMagic.Scene({
        triggerElement: t,
        triggerHook: .75,
        reverse: false
      }).setTween(e).addTo(l)
    })
  });

  // Fade Elements From Below -------------------------------------
  
  $(function() {
    document.querySelectorAll(".fade-e-below").forEach(function(t) {
      var e = new TimelineMax();
        e.add("Start").staggerTo(t.querySelectorAll(".e"), .6, {
        className: "+=loaded"}, .15),
      new ScrollMagic.Scene({
        triggerElement: t,
        triggerHook: .85,
        reverse: false
      })
      .setTween(e).addTo(l)
    })
  });

  // Fade Elements From Transparent -------------------------------
  
  $(function() {
    document.querySelectorAll(".fade-e-transparent").forEach(function(t) {
      var e = new TimelineMax();
      e.add("Start").staggerTo(t.querySelectorAll(".e"), .6, {
        className: "+=loaded"}, .15),
      new ScrollMagic.Scene({
        triggerElement: t,
        triggerHook: .85,
        reverse: false
      }).setTween(e).addTo(l)
    })  
  });
}


// -------------------------------------------------------------- //
// Ajaxify                                                        //
// -------------------------------------------------------------- //

function ajaxify() {
  $(function(){
    jQuery('#navigation, #footer, #pagename, #store').ajaxify({
      // Config
      selector : "a:not(.no-ajaxy)", //Selector for elements to ajaxify - without being swapped - e.g. a selection of links
      maincontent : "#store", //Default main content is last element of selection, specify a value like "#content" to override
  //    forms : "form:not(.no-ajaxy)", // jQuery selection for ajaxifying forms - set to "false" to disable
      canonical : true, // Fetch current URL from "canonical" link if given, updating the History API.  In case of a re-direct...
      refresh : false, // Refresh the page if clicked link target current page

  /* visual effects settings */
      requestDelay : 0, //in msec - Delay of Pronto request
      aniTime : false, //in msec - must be set for animations to work
  //    aniParams: { //Animation parameters - see below.  Default = off
  //      opacity: 0, //no fade, set to 0 for maximum fade
  //      width: "100%", //in percent -  "100%" means no change
  //      height: "0%", //in percent -  "100%" means no change
  //    },
      previewoff : true, // Plugin previews prefetched pages - set to "false" to enable or provide a jQuery selection to selectively disable
      scrolltop : true, // Smart scroll, true = always scroll to top of page, false = no scroll
      bodyClasses : true, // Copy body classes from target page, set to "true" to enable
      idleTime: 0, //in msec - master switch for slideshow / carousel - default "off"
      slideTime: 0, //in msec - time between slides
      menu: false, //Selector for links in the menu
      addclass: "jqhover", //Class that gets added dynamically to the highlighted element in the slideshow
      toggleSlide: false, //Toggle slide parameters - see below.  Default = off

  /* script and style handling settings, prefetch */
      deltas : true, // true = deltas loaded, false = all scripts loaded
      asyncdef : false, // default async value for dynamically inserted external scripts, false = synchronous / true = asynchronous
      alwayshints : "", // strings, - separated by ", " - if matched in any external script URL - these are always loaded on every page load
      inline : true, // true = all inline scripts loaded, false = only specific inline scripts are loaded
      inlinehints : false, // strings - separated by ", " - if matched in any inline scripts - only these are executed - set "inline" to false beforehand
      inlineskip : "", // strings - separated by ", " - if matched in any inline scripts - these are NOT are executed - set "inline" to true beforehand 
      inlineappend : false, // append scripts to the main content div, instead of "eval"-ing them
      style : false, // true = all style tags in the head loaded, false = style tags on target page ignored
      prefetch : true, // Plugin pre-fetches pages on hoverIntent

  /* debugging & advanced settings*/
      verbosity : 0,  //Debugging level to console: default off.  Can be set to 10 and higher (in case of logging enabled)
      memoryoff : true, // strings - separated by ", " - if matched in any URLs - only these are NOT executed - set to "true" to disable memory completely
      cb : ax, // callback handler on completion of each Ajax request - default null
      pluginon : true // Plugin set "on" or "off" (==false) manually
    });

    function ax() {
      
      // NEED TO UPDATE THE LANGUAGE, DATA-LAYOUT AND PAGE META DATA, GOOGLE ANALYTICS
      
      
      // Set the destination
      var p = window.location.pathname;
      console.log("🚀 Travelling to ... " + p );      
      
      cursorReplace();
      loadingAnimations();
      smoothScroll();
      externalLinks();
      navigation();
      layout();
    }
  });
}

// -------------------------------------------------------------- //
// INIT                                                           //
// -------------------------------------------------------------- //

function init() {
  forEach();
  cursorGenerate();
  cursorReplace();
  loadingAnimations();
  smoothScroll();
  externalLinks();
  navigation();
  layout();
  ajaxify();
}


// -------------------------------------------------------------- //
// Document Ready                                                 //
// -------------------------------------------------------------- //

$(document).ready(function () {  
  
  ///////////
  // Captain's Log
  ///////////
  
  console.log('%c \u00A9 2018 & Beyond. InnoCellence', "background: #F8F9FC; font-size: 12px; color: #375EB4; padding:4px 8px 4px 0");
  console.log('%c Join our team: careers@innocellence.com', "font-size: 12px; color: #EF4B46; padding:2px 8px 2px 0; margin-bottom: 10px; border-bottom: 2px solid #EF4B46;");
  
  ///////////
  // Make it so
  ///////////
  console.log('🖖 Make it so Mr. Worf');
  init();
  console.log('💯 Ready');
});