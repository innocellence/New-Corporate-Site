// -------------------------------------------------------------- //
// Basic Functions                                                //
// -------------------------------------------------------------- //

// Print Copyright Message
console.log('Copyright 2018 & Beyond');

//Target External Links
$("a[href^='http']").attr("target","_blank");

// Detect Layout
var $pageLayout = $('body').attr('data-page_layout');

// Mobile Check
if ($('.mobile').css('display') === 'block') {
	var isMobile = true;
} else {}

// Touch Device Check
function isTouchDevice() {
  return 'ontouchstart' in window ||
    'onmsgesturechange' in window;
}



// Resize Detect
var browser_w = $(window).innerWidth(), 
    browser_h = $(window).innerHeight(),
    resizeOverlay = "<div class='resize__content'><h2>Oops, your browser window is too small!</h2><p>We have optimized our site for windows wider than 1200px. Please resize your browser window.</p><p>Our mobile site will be along shortly.</p></div>";


if (browser_w < 1200) { 
  $('.mobile').addClass('resize__overlay').html(resizeOverlay);
} 
else {
  $('.mobile').removeClass('resize__overlay').html('');
}


$(window).resize(function() {
  
  var browserW = $(window).innerWidth(), 
      browserH = $(window).innerHeight(),
      overlay = $(".resize_overlay");
  
  if (browserW < 1200) {
    if (overlay.length == 0) {
      $('.mobile').addClass('resize__overlay').html(resizeOverlay);
    }
  } 
  else {
    $('.mobile').removeClass('resize__overlay').html('');
  }
});




// -------------------------------------------------------------- //
// Layouts                                                        //
// -------------------------------------------------------------- //

// Home Layout --------------------------------------------------

if ($pageLayout === 'home') {
    // Init Scroll Actions -- MOVE TO MOVEMENT??? 
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {triggerHook: "onLeave"}
    });

    $(function () {
      var mastheadPin = new TimelineMax()
        .add([
//          TweenMax.fromTo(".masthead", 1, {autoApha: 0, y: "+=50"}, {autoAlpha: "#375EB4"}),
          TweenMax.fromTo(".masthead__panel--one", 1, {backgroundColor: "#EF4B46"}, {backgroundColor: "#375EB4"}),
          TweenMax.fromTo(".masthead__panel--two", 1, {x: "100%"}, {x: "0%", ease: Power2.easeInOut}),
          TweenMax.fromTo(".masthead__panel--two .masthead__container", 1, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}),
        ]);

      // Pin Masthead Scene
      new ScrollMagic.Scene({
        triggerElement: "#trigger_masthead",
        duration: '33%'
      })
      .setTween(mastheadPin)
      .setPin(".masthead")
      .addTo(controller);

      // Ready the Menu
      new ScrollMagic.Scene({triggerElement: "#trigger_menu"})
      .setClassToggle(".main_navigation", "ready")
      .addTo(controller);      
    });       
  
} else {}



// -------------------------------------------------------------- //
// Loading Animations                                             //
// -------------------------------------------------------------- //

var l = new ScrollMagic.Controller;
  
// Fade From Below
$(function() {
  document.querySelectorAll(".fade-c-below").forEach(function(t) {
    var e = new TimelineMax();
//    e.add("Start").fromTo(t, 1, {
//      y: "+=50", autoAlpha: 0, ease: Power2.easeInOut}, {className: "+=loaded", y: "0", autoAlpha: 1}, "Start"),
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
// Fade From Transparent
$(function() {
  document.querySelectorAll(".fade-c-transparent").forEach(function(t) {
    var e = new TimelineMax();
//    e.add("Start").fromTo(t, 1, {
//      autoAlpha: 0, ease: Power2.easeInOut}, {className: "+=loaded", autoAlpha: 1}, "Start"),
    e.add("Start").to(t, 1, {
      className: "+=loaded"}, "Start"),
    new ScrollMagic.Scene({
      triggerElement: t,
      triggerHook: .75,
      reverse: false
    }).setTween(e).addTo(l)
  })
});
  
// Fade Elements From Below
$(function() {
  document.querySelectorAll(".fade-e-below").forEach(function(t) {
    var e = new TimelineMax();
//    e.add("Start").staggerFromTo(t.querySelectorAll(".e"), .6, {
//      y: "+=50", autoAlpha: 0, ease: Power2.easeInOut}, {className: "+=loaded", y: "0", autoAlpha: 1}, .15),
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

  
// Fade Elements From Transparent
$(function() {
  document.querySelectorAll(".fade-e-transparent").forEach(function(t) {
    var e = new TimelineMax();
//    e.add("Start").staggerFromTo(t.querySelectorAll(".e"), .6, {
//      autoAlpha: 0, ease: Power2.easeInOut}, {className: "+=loaded", autoAlpha: 1}, .15),
    e.add("Start").staggerTo(t.querySelectorAll(".e"), .6, {
      className: "+=loaded"}, .15),
    new ScrollMagic.Scene({
      triggerElement: t,
      triggerHook: .85,
      reverse: false
    }).setTween(e).addTo(l)
  })  
});
