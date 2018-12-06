////////////////
// Prereq
////////////////

// favicon.min.js
// imagesloaded.pkgd.min.js
// instafeed.min.js
// jquery.fitvids.js
// jquery.history.js
// jquery.hoverintent.js
// mixitup.min.js
// plyr.js
// swiper.min.js
// velocity.min.js



// global variables --------------------------------------------------------------
var bezEasing = [0.19, 1, 0.22, 1],
  bezSwing = [1, 0, 0, 1],
  leftCursorPosition,
  topCursorPosition,
  emojis = ["\uD83D\uDE01", "\uD83D\uDE0B", "\u261D", "\u263A", "\uD83D\uDC4D"],
  $preloaderLogo = $('.big-logo'),
  $pageTemplate = $('.template').attr('data-page-template'),
  $videoPlay = $('.video-play');



// mobile test  --------------------------------------------------------------

if ($('.mobile-test').css('display') === 'block') {

  var isMobile = true;

} else {}

// tablet test  --------------------------------------------------------------

if ($('.tablet-test').css('display') === 'block') {

  var isTablet = true;

} else {}


// Touch device check--------------------------------------------------------------

function isTouchDevice() {
  return 'ontouchstart' in window ||
    'onmsgesturechange' in window;
}



// Functions --------------------------------------------------------------

var getBackgroundImageSize = function (el) {
  var imageUrl = $(el).css('background-image').match(/^url\(["']?(.+?)["']?\)$/);
  var dfd = new $.Deferred();

  if (imageUrl) {
    var image = new Image();
    image.onload = dfd.resolve;
    image.onerror = dfd.reject;
    image.src = imageUrl[1];
  } else {
    dfd.reject();
  }

  return dfd.then(function () {
    return {
      width: this.width,
      height: this.height
    };
  });
};



// Parallax

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function homeParrallax() {
  if (isMobile === true) {

  } else {


    var viewportTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      viewportBottom = windowHeight + viewportTop,
      sym = '-';

    if ($(window).width()) {


      $('.home-page-image-one .caption .caption-inner').each(function () {

        var distance = (viewportTop * 0.5).toFixed(2);
        $(this).css('transform', 'translate3d(' + distance + 'px,0,0)');
      });

      $('.home-page-image-two .caption .caption-inner').each(function () {

        var distance = (viewportTop * 0.2).toFixed(2);
        $(this).css('transform', 'translate3d(' + distance + 'px,0,0)');
      });

      $('.home-page-copy .caption .caption-inner').each(function () {

        var distance = (viewportTop * 0.2).toFixed(2);
        $(this).css('transform', 'translate3d(' + -distance + 'px,0,0)');
      });

      $('.home-page-image-two').each(function () {

        var distance = (viewportTop * 0.1).toFixed(2);
        $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');

      });


      $('.page-template-index .content-wrap').each(function () {

        var distance = (viewportTop * 0.1).toFixed(2);
        $(this).css('marginBottom', '' + sym + distance + 'px');

      });

    }


  }

}

function aboutParrallax() {
  if (isMobile === true) {

  } else {


    var viewportTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      viewportBottom = windowHeight + viewportTop,
      sym = '-';

    if ($(window).width()) {


      $('.about-page .image-one .caption .caption-inner').each(function () {

        var distance = (viewportTop * 0.5).toFixed(2);
        $(this).css('transform', 'translate3d(' + distance + 'px,0,0)');
      });

      $('.about-page .about-heading h1').each(function () {

        var distance = (viewportTop * 0.1).toFixed(2);
        $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
      });



    }


  }

}

function menuParrallax() {
  if (isMobile === true) {

  } else {


    var viewportTop = $(window).scrollTop(),
      windowHeight = $(window).height(),
      viewportBottom = windowHeight + viewportTop,
      sym = '-';

    if ($(window).width()) {

      $('.main-menu').each(function () {

        var distance = (viewportTop * 0.3).toFixed(2);
        $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
      });

      $('.filter-tags').each(function () {

        var distance = (viewportTop * 0.3).toFixed(2);
        $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
      });

      $('.filter-category').each(function () {

        var distance = (viewportTop * 0.3).toFixed(2);
        $(this).css('transform', 'translate3d(0, ' + sym + distance + 'px,0)');
      });

    }

  }

}

function menuMove() {
  requestAnimFrame(menuMove);
  menuParrallax();

}

function homeMove() {
  requestAnimFrame(homeMove);
  homeParrallax();
}

function aboutMove() {
  requestAnimFrame(aboutMove);
  aboutParrallax();
}

(function ($) {
  $.rand = function (arg) {
    if ($.isArray(arg)) {
      return arg[$.rand(arg.length)];
    } else if (typeof arg === "number") {
      return Math.floor(Math.random() * arg);
    } else {
      return 4; // chosen by fair dice roll
    }
  };
})(jQuery);


var pageCursor = function () {

  $(document).bind('mousemove', function (e) {
    $('.close-cursor').css({
      left: e.pageX,
      top: e.pageY
    });
  });

  $('.main-menu ul').on({
    mouseenter: function () {
      $(".close-cursor").addClass("hide-close-cursor");
    },
    mouseleave: function () {
      $(".close-cursor").removeClass("hide-close-cursor");
    }
  });

  $(document).bind('mousemove', function (e) {
    $('.text-cursor').css({
      left: e.pageX,
      top: e.pageY
    });
  });

  $(document).bind('mousemove', function (e) {
    $('.about-cursor').css({
      left: e.pageX,
      top: e.pageY
    });
  });

  $('.cursor-text').on({
    mouseenter: function () {
      var cursorText = $(this).attr('data-cursor-text');
      $(".text-cursor").html(cursorText);
    },
    mouseleave: function () {
      $(".text-cursor").html('');

    }
  });

  $('.look-good').hoverIntent({
    over: function () {
      var $imageURL = $('.about-image').attr('data-image-one');
      $('.about-cursor img').attr("src", $imageURL);

      $('.about-cursor').addClass('open-one');
    },
    out: function () {
      $('.about-cursor').removeClass('open-one');
      $('.about-cursor img').attr("src", 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');

    },
  });

  $('.feel-good').hoverIntent({
    over: function () {
      var $imageURLTwo = $('.about-image').attr('data-image-two');
      $('.about-cursor img').attr("src", $imageURLTwo);

      $('.about-cursor').addClass('open-two');
    },
    out: function () {
      $('.about-cursor').removeClass('open-two');
      $('.about-cursor img').attr("src", 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');

    },
  });

};

projectsShow = function () {

  var $projectsGridItemInner = $('.projects-grid .original-item .item-inner');
  var $projectsGridItemInnerImage = $('.projects-grid .original-item .image');




  if (isMobile === true) {

    $('.projects-grid').imagesLoaded({
      background: true
    }, function () {


      $projectsGridItemInner.each(function () {

        var $this = $(this);

        setTimeout(function () {

          $this.addClass('show');



        }, (Math.floor(Math.random() * 600) + 500));


      });
    });

  } else {
    var containerEl = document.querySelector('.container');

    if (containerEl) {

      var loadImages = function () {

        var $blankImage = $('.projects-grid .not-original');

        $('.projects-grid').imagesLoaded({
          background: true
        }, function () {




          $projectsGridItemInner.each(function () {

            var $this = $(this);

            setTimeout(function () {

              $this.addClass('show');



            }, (Math.floor(Math.random() * 600) + 500));


          });




          $blankImage.each(function () {

            var $this = $(this);
            var $imageTarget = $this.find('.image');

            var $dataImage = $imageTarget.attr('data-src');

            $imageTarget.attr("src", $dataImage);
            $imageTarget.css('background-image', 'url(' + $dataImage + ')');

            // Add Landscape Class	

            getBackgroundImageSize(jQuery($imageTarget)).then(function (size) {

              if (size.width > size.height) {
                $this.addClass('landscape');
              }

            });



          });




        });

      };

      mixer = mixitup(containerEl, {
        animation: {
          effects: 'fade stagger(100ms)',
          staggerSequence: function (i) {
            return i % 3;
          }
        },
        load: {
          filter: '.original-item',

        },
        callbacks: {
          onMixEnd: function (state) {

            var stateName = state.activeFilter.selector,
              stateNameNice = stateName.replace(/\./g, "");

            $('.projects-grid').attr('id', stateNameNice);

            if (stateName === '.original-item') {

              $('.filter-reset').velocity({
                opacity: 0,
              }, {
                duration: 650,
                delay: 0,
                display: 'none'
              });
            } else {

              $('.filter-reset').velocity({
                opacity: 1,
              }, {
                duration: 650,
                delay: 0,
                display: 'block'

              });

            }

          },

        },
      });


      loadImages();




    }
  }
}



var preloader = function () {

  $("html, body").animate({
    scrollTop: 0
  }, "slow");

  var $preloader = $('.preloader'),
    $homeGrid = $('.home-grid');


  $.fn.random = function () {
    var ret = $();

    if (this.length > 0)
      ret = ret.add(this[Math.floor((Math.random() * this.length))]);

    return ret;
  };



  $preloader.imagesLoaded(function () {


    if (isMobile === true) {

      $(".preloader .image-one img").random().velocity({
        height: 167,
        marginLeft: 75,
        marginTop: 75,

      }, {
        duration: 350,
        easing: 'easeInOutExpo',
        display: "block",
        delay: 300,

      }).velocity("reverse", {
        delay: 1700,
        duration: 250,
      });

      $(".preloader .image-two img").random().velocity({
        height: 167,
        marginLeft: -75,
        marginTop: -75,

      }, {
        duration: 350,
        easing: 'easeInOutExpo',
        display: "block",
        delay: 500
      }).velocity("reverse", {
        delay: 1400,
        duration: 250,

      });


    } else {
      $(".preloader .image-one img").random().velocity({
        height: 300,
        marginLeft: 115,
        marginTrandom spacingop: 115,

      }, {
        duration: 350,
        easing: 'easeInOutExpo',
        display: "block",
        delay: 300,

      }).velocity("reverse", {
        delay: 1400,
        duration: 250,
      });

      $(".preloader .image-two img").random().velocity({
        height: 300,
        marginLeft: -115,
        marginTop: -115,

      }, {
        duration: 350,
        easing: 'easeInOutExpo',
        display: "block",
        delay: 500
      }).velocity("reverse", {
        delay: 1100,
        duration: 250,

      });
    }

    $preloader.velocity('stop').velocity({
      opacity: '0',
    }, {
      duration: 600,
      display: "none",
      delay: 3000,
      complete: function () {
        if ($pageTemplate === 'projects') {

          projectsShow();

        }
      }
    });

    if ($pageTemplate === 'homepage') {

      if (isMobile === true) {

        $('body').addClass('page-overflow');


        $('.main-menu').velocity({
          opacity: 1,
        }, {
          duration: 450,

        });

        setTimeout(function () {

          $('.content-wrap').addClass('move');
          $('.main-footer').addClass('move');


        }, 3200);


        setTimeout(function () {

          $('body').removeClass('page-overflow');

        }, 4200);


      } else {

        $('.main-menu').velocity({
          opacity: 1,
        }, {
          duration: 450,

        });

        setTimeout(function () {

          $('.content-wrap').addClass('move');
          $('.main-footer').addClass('move');


        }, 3200);


        setTimeout(function () {

          $('body').removeClass('page-overflow');

        }, 4200);

      }





    }

    if ($pageTemplate === 'about') {

      if (isMobile === true) {

        $('body').addClass('page-overflow');


        $('.main-menu').velocity({
          opacity: 1,
        }, {
          duration: 450,

        });

        setTimeout(function () {

          $('.content-wrap').addClass('move');
          $('.main-footer').addClass('move');


        }, 3200);


        setTimeout(function () {

          $('body').removeClass('page-overflow');

        }, 4200);


      } else {

        $('.main-menu').velocity({
          opacity: 1,
        }, {
          duration: 450,

        });

        setTimeout(function () {

          $('.content-wrap').addClass('move');
          $('.main-footer').addClass('move');


        }, 3200);


        setTimeout(function () {

          $('body').removeClass('page-overflow');

        }, 4200);

      }





    }
  });
}


var newSlider = function () {


  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    parallax: true,
    freeMode: true,
    freeModeSticky: false,
    freeModeMomentum: true,
    preventInteractionOnTransition: true,
    mousewheel: {
      enabled: true,
      releaseOnEdges: true,
    },
    autoplay: false,
    sensitivity: 1,
    keyboard: {
      enabled: true,
    },
    watchSlidesVisibility: true,
    preloadImages: true,
    updateOnImagesReady: true

  });


  $('.swiper-gallery').imagesLoaded()
    .always(function (instance) {

    })
    .done(function (instance) {

      setTimeout(function () {


        mySwiper.update();
        mySwiper.updateSize();
        mySwiper.updateSlides();

      }, 500);

    })



};



// Home image Hover Z-index --------------------------------------------------------------


var homeImageHover = function () {

  $('.home-page-hover .image-thumbnails').on({
    mouseenter: function () {
      $(this).closest('.home-page-hover').addClass('hover');
    },
    mouseleave: function () {
      $(this).closest('.home-page-hover').removeClass('hover');

    }
  });




};


// Projects  --------------------------------------------------------------





var projectsGrid = function () {

  var $projectsGrid = $('.projects-grid');
  $projectsGridItem = $('.projects-grid .grid-item'),
    $originalItem = $('.projects-grid .original-item'),

    $projectFilterButton = $('#menu-by-category'),
    $colourFilterButton = $('#menu-by-tags');




  $('.projects-grid a.grid-item').on({

    mouseenter: function () {
      var projectText = $(this).attr('data-project-title');

      $('.project-title').html(projectText);

    },
    mouseleave: function () {
      $('.project-title').html('');

    }
  });


  $projectFilterButton.hoverIntent({
    over: function () {
      $(this).addClass('open');
      $('.filter-gradient').addClass('filter-hover');
    },
    out: function () {
      $(this).removeClass('open');
      $('.filter-gradient').removeClass('filter-hover');
    },
  });

  $colourFilterButton.hoverIntent({
    over: function () {
      $(this).addClass('open');
      $('.filter-gradient').addClass('filter-hover');
    },
    out: function () {
      $(this).removeClass('open');
      $('.filter-gradient').removeClass('filter-hover');
    },
  });





  $('#menu-by-category a').click(function (e) {
    e.preventDefault();
    var categoryFilter = $(this).attr('data-filter'),
      categorytitle = $(this).attr('data-title');

    if (categoryFilter != "all") {

      $('#menu-by-category .title').html(categorytitle)

    } else {

      $('#menu-by-category .title').html('By Type')

    }

    $('#menu-by-tags .title').html('By Colour')

  });


  $('#menu-by-tags a').click(function (e) {
    e.preventDefault();

    var tagFilter = $(this).attr('data-filter'),
      tagtitle = $(this).attr('data-title');

    if (tagFilter != "all") {
      $('#menu-by-tags .title').html(tagtitle)
    } else {
      $('#menu-by-tags .title').html('By Colour')
    }
    $('#menu-by-category .title').html('By Type')

  });

  $('.filter-reset').click(function (e) {
    e.preventDefault();

    $('#menu-by-tags .title').html('By Colour');
    $('#menu-by-category .title').html('By Type')

  });


  // Random spacing

  $originalItem.each(function () {

    var $this = $(this),
      $image = $this.find('.item-inner .image');

    // Add Landscape Class	

    $image.imagesLoaded(function () {

      getBackgroundImageSize(jQuery($image)).then(function (size) {

        if (size.width > size.height) {
          $this.addClass('landscape');
        }

      });


    });



  });




  $(".grid-item-project").click(function () {

    $('.main-menu').velocity({
      opacity: 0,
    }, {
      duration: 450,

    });

  });


  if (isMobile === true) {

  } else {

    $("body").on("mousemove", function (event) {

      var documentWidth = $(document).width(),
        percentageLeft = documentWidth * 0.10,
        percentageRight = documentWidth * 0.80;

      if (event.pageX < percentageLeft) {
        $(".projects-grid").addClass('move-left');
      } else if (event.pageX >= percentageLeft) {
        $(".projects-grid").removeClass('move-left');
      } else {
        $(".projects-grid").removeClass('move-left');
      }

      if (event.pageX > percentageRight) {
        $(".projects-grid").addClass('move-right');
      } else if (event.pageX <= percentageRight) {
        $(".projects-grid").removeClass('move-right');
      } else {
        $(".projects-grid").removeClass('move-right');
      }


    });

  }



};


function aboutImages() {

  // Preload about images

  if (isMobile === true) {

  } else {
    $(".about-image").each(function () {

      $('<img/>', {
        src: $(this).data('image-one'),
        class: 'precachedImg',
        style: 'display:none;'
      }).appendTo('.image-cache');
      $('<img/>', {
        src: $(this).data('image-two'),
        class: 'precachedImg',
        style: 'display:none;'
      }).appendTo('.image-cache');

    });
  }


}


function projectHover() {


  $('.home-grid .project a').click(function () {

    $('.main-menu').velocity({
      opacity: 0,
    }, {
      duration: 450,

    });

  });

  $('.home-page-image-one').imagesLoaded(function () {

    var imageHeight = $('.home-page-image-one .fallback').height();
    var imageHeightHalf = -(imageHeight / 2);


    $('.home-page-image-two').css('marginTop', imageHeightHalf);

    $(window).resize(function () {
      imageHeight = $('.home-page-image-one .fallback').height();
      imageHeightHalf = -(imageHeight / 2);
      $('.home-page-image-two').css('marginTop', imageHeightHalf);

    });
  });

  var projectsHolderProject = $('.image-thumbnails');


  if (isMobile === true) {

  } else {

    projectsHolderProject.each(function () {

      var $post = $(this).parent(),
        $this = $(this);

      $this.find('.image').hide();

      $this.imagesLoaded(function () {

        $this.addClass('images-loaded');

        $this.mousemove(function (e) {


          var numImages = $this.find('.image').length,
            breakPoint = $(this).width() / (numImages);

          $this.addClass('hovering');

          var xpos;

          if (e.offsetX === undefined) {
            xpos = e.pageX - $this.offset().left;
          } else {
            xpos = e.offsetX;
          }

          var img = Math.ceil(xpos / breakPoint);

          if (img !== 0 && img <= numImages) {

            var $img = $this.find('.image:nth-child(' + (img) + ')');

            $this.find('.image').hide();
            $this.find('.image.first').show();

            $img.show();

          }

        }).mouseleave(function () {
          $this.find('.image').hide();
          $this.removeClass('hovering');

        });


      });


    });

  }

}

// Modal Slider --------------------------------------------------------------


function modalSlider() {

  var $galleryModal = $('.post-gallery-modal'),
    $postItem = $('.post-item');

  $galleryModal.velocity({
    translateX: '105%',
  }, {
    duration: 0,
    delay: 0,
  });

  // Each post item, not including video

  $postItem.each(function () {

    var $this = $(this),
      $body = $('body'),
      $image = $this.find('img').attr('data-large-image'),
      $title = $this.find('img').attr('data-project-title'),
      $imageNumber = $this.find('img').attr('data-image-number'),
      $imageNumberTotal = $this.find('img').attr('data-image-total'),

      $postGalleryModal = $('.post-gallery-modal .post-gallery-modal-inner'),
      $postGalleryTitle = $('.post-gallery-modal .project-title'),
      $postGalleryNumber = $('.post-gallery-modal .image-number'),
      $postGalleryModalImage = "<img src='" + $image + "'>",
      $postGalleryModalClose = $('.post-gallery-modal .post-gallery-modal-inner-close');

    $this.on('click', function (e) {

      e.preventDefault();

      $('.post-gallery-modal .project-title').html($title);


      $galleryModal.velocity('stop').velocity({
        translateX: '0%',
      }, {
        duration: 1200,
        easing: bezSwing,
        display: "block",
        begin: function () {
          $postGalleryModal.html($postGalleryModalImage);
          $postGalleryTitle.html($title);
          $postGalleryNumber.html($imageNumber);

          $('body, html').addClass('overflow-hidden');

          $('.post-gallery-modal p').velocity({
            opacity: 0,
          }, {
            duration: 0,
            delay: 0,
          });

        },
        complete: function () {

          $('.post-gallery-modal p').velocity({
            opacity: 1,
          }, {
            duration: 450,
            delay: 0,
          });
        }
      });




    });

    $postGalleryModal.on('click', function (e) {

      e.preventDefault();

      $galleryModal.velocity('stop').velocity({
        translateX: '105%',
      }, {
        duration: 1200,
        easing: bezSwing,
        display: "none",
        complete: function () {
          $('body, html').removeClass('overflow-hidden');
          $postGalleryTitle.html();
          $postGalleryNumber.html();
        }
      });


    });


  });

}

function singleSlider() {

  var $galleryModal = $('.post-gallery-modal'),
    $postItem = $('.grid-single-item');

  $galleryModal.velocity({
    translateX: '105%',
  }, {
    duration: 0,
    delay: 0,
  });


  // Each post item, not including video

  $postItem.each(function () {

    var $this = $(this),
      $body = $('body'),
      $image = $this.attr('data-large-image'),
      $projectTitle = $this.attr('data-project-title'),
      $postGalleryTitle = $('.post-gallery-modal .title'),

      $postGalleryModal = $('.post-gallery-modal .post-gallery-modal-inner'),
      $postGalleryModalImage = "<img src='" + $image + "'>",
      $postGalleryModalClose = $('.post-gallery-modal .post-gallery-modal-inner-close'),
      $title = $this.attr('data-project-title');


    $this.on('click', function (e) {

      e.preventDefault();


      $('.post-gallery-modal .project-title').html($projectTitle);
      $('.post-gallery-modal .image-number').html('1');


      $('.post-gallery-modal p').velocity({
        opacity: 0,
      }, {
        duration: 0,
        delay: 0,
      });




      $galleryModal.velocity('stop').velocity({
        translateX: '0%',
      }, {
        duration: 1200,
        easing: bezSwing,
        display: "block",
        begin: function () {
          $postGalleryModal.html($postGalleryModalImage);
          $('body, html').addClass('overflow-hidden');



        },
        complete: function () {

          $('.post-gallery-modal p').velocity({
            opacity: 1,
          }, {
            duration: 450,
            delay: 0,
          });
        }
      });

    });

    $postGalleryModal.on('click', function (e) {

      e.preventDefault();

      $galleryModal.velocity('stop').velocity({
        translateX: '105%',
      }, {
        duration: 1200,
        easing: bezSwing,
        display: "none",
        complete: function () {
          $('body, html').removeClass('overflow-hidden');
          $('.post-gallery-modal .image-number').html();
          $('.post-gallery-modal .project-title').html();
        }
      });


    });


  });

}

function instagram() {
  var feed = new Instafeed({
    get: 'user',
    userId: '121449',
    accessToken: '121449.28dfff0.f524664fcc8d4414b69e4a9fc9e2ce1e',
    limit: 3,
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" ><div class="caption"><div class="caption-inner">Instagram</div></div><img src="{{image}}" /><p>{{caption}}</p></a>'
  });
  feed.run();
}


function detectPage() {

  // Home Page
  if ($(".home-grid").length > 0) {
    $('body').removeClass().addClass('page-template-index');
    $('html').removeClass('page-overflow');

  }

  // Projects
  if ($(".projects-grid").length > 0) {
    $('body').removeClass().addClass('page-template-tmpl-projects');
    $('html').removeClass('page-overflow');

  }

  // Single
  if ($(".single-page").length > 0) {
    $('body').removeClass().addClass('single');
    $('html').addClass('page-overflow');

  }

  // About
  if ($(".about-page").length > 0) {
    $('body').removeClass().addClass('page-template-tmpl-about');
    $('html').removeClass('page-overflow');

  }


}

// INIT --------------------------------------------------------------

function init() {


  $('.filter-reset').velocity({
    opacity: 0,
  }, {
    duration: 0,
    delay: 0,

  });

  preloader();


  if ($(".home-grid ").length > 0) {
    homeImageHover();
    projectHover();
    homeMove();

  } else {

  }

  if ($(".error-page").length > 0) {
    projectHover();

  } else {

  }


  menuMove();


  if ($pageTemplate === 'single') {

    if (isMobile === true) {

    } else {
      newSlider();
    }

    modalSlider();

    if ($(".slide-video ").length > 0) {

      $(".slide-video").fitVids();

      // Init Video Player
      var options = {
        controls: ['play-large']
      };

      plyr.setup(options);
    }



  }


  if ($pageTemplate === 'projects') {
    projectsGrid();
    singleSlider();



  }

  if ($pageTemplate === 'about') {
    aboutImages();
    projectHover();

  }


  if ($pageTemplate === 'about') {
    aboutMove();

    $('body').addClass('about-body');

  } else {

    $('body').removeClass('about-body');

  }


  // Random Body Colour

  var classes = ['scheme-1', 'scheme-2', 'scheme-3', 'scheme-4', 'scheme-5', 'scheme-6', 'scheme-7', 'scheme-8', 'scheme-9', 'scheme-10', 'scheme-11', 'scheme-12', 'scheme-13', 'scheme-14', 'scheme-15', 'scheme-16', 'scheme-17', 'scheme-18', 'scheme-19', 'scheme-20', 'scheme-21'];
  var randomnumber = Math.floor(Math.random() * classes.length);

  $('html').removeClass().addClass(classes[randomnumber]);

  pageCursor();

  favicon.animate([
	  "	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXhJREFUeNrslz9Lw0AYxpsquOhmHeuqtl8ik5vgUqu4OouDROhcbAcRd1eldhH8ANYP0eLmn+CkbnYTEp+DZwgSyZvcvQbBgx+lJDzvr5fc3VsvjuNKmaNaKXmULjCb/HIfdH+l6Gq/ky4gGHWwA3ywBmrgE7yAZ3AHrsBjoRnIKNwDLTDz7docWCHroEuJIxC6eAc2wBhspxT/KdPcO+GnlcA+uAYLBR71PLgAB0UFtsCp5UrxwAmzcgmYZ37OANvhMaueR+CYU+hqmKy+VGAZtBWWf4vZmQJtpR2ymvbD0gr5ipugLxFoKgo0JQKLigK1P3EcvyvWe5MITBQFxhKBW0WBkUTAHKWRQvGI2ZkCT2CoIDBktmgVBGDqsPiUmeLDyHQye8BFzx4zK8zbDwzYTESWxQ+ZVagjOgOb4KPgtO+yIbHqCW+4hw+EsxHx3ga4dNUVh2wwg0Rbbgos8forN7AR3/YH1215UqRHnAzv/89p2QJfAgwAOQtH8ccjw3AAAAAASUVORK5CYII=",
	  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzOEE1N0E0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzOEE1Nzk0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUE1QTIwM0QwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUE1QTIwNEQwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph8IH4sAAAAGUExURQAAAAAAAKVnuc8AAAABdFJOUwBA5thmAAAAHUlEQVR42uzBgQAAAADDoPlT3+AEVQEAAAB8E2AAEEAAAaQCX5EAAAAASUVORK5CYII=",

	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAX1JREFUeNrsl71KA0EUhY0GbLQzlrENmmcQtrIRwSauYmstFhJfQIyFiL2tEtMIYm3EZ0jAyp8lldqZTtj1DBxkkcS9szNXQTLwkcBuzv2Y2Zm9KSRJMvaXozASSAvcLVd+peji9f3X96Llb8tgAwRgHpTAB+iBZ3ALLsCjNLBoUbgBamDi27VJUCFLYJ8SeyDKCh4XFF8BHbA+oPiwTHNvl59OAtvgEkznWOopcAZ28gqsgWPhLA19yMERs6wEzJqfMsB5pzGrbCNwwCn0NUzWoVRgDoQK27/G7EyB0HHdf1ruUCIQKB6CgUSgqihQlQjMKAqU8pyEqmOQwJtivVeJQFdRoCMRuFEUaEsEzKs0VigeMztT4Am0FARazBbtgjroeyzeZ6b4ZWQ6mS3go2NNmBXZ9gNNNhOxY/FdZuXqiE7AKnjPOe2bbEicesIrnuFN4WzEvHcBnPvqiiM2mPVUW24KzPL6Cw+wNp/2B99teVqkQUb/Df+HwKcAAwCh2Fbb6rbEUgAAAABJRU5ErkJggg==",
	  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzOEE1N0E0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzOEE1Nzk0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUE1QTIwM0QwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUE1QTIwNEQwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph8IH4sAAAAGUExURQAAAAAAAKVnuc8AAAABdFJOUwBA5thmAAAAHUlEQVR42uzBgQAAAADDoPlT3+AEVQEAAAB8E2AAEEAAAaQCX5EAAAAASUVORK5CYII=",

	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAX1JREFUeNrsl71KA0EUhY0GbLQzlrENmmcQtrIRwSauYmstFhJfQIyFiL2tEtMIYm3EZ0jAyp8lldqZTtj1DBxkkcS9szNXQTLwkcBuzv2Y2Zm9KSRJMvaXozASSAvcLVd+peji9f3X96Llb8tgAwRgHpTAB+iBZ3ALLsCjNLBoUbgBamDi27VJUCFLYJ8SeyDKCh4XFF8BHbA+oPiwTHNvl59OAtvgEkznWOopcAZ28gqsgWPhLA19yMERs6wEzJqfMsB5pzGrbCNwwCn0NUzWoVRgDoQK27/G7EyB0HHdf1ruUCIQKB6CgUSgqihQlQjMKAqU8pyEqmOQwJtivVeJQFdRoCMRuFEUaEsEzKs0VigeMztT4Am0FARazBbtgjroeyzeZ6b4ZWQ6mS3go2NNmBXZ9gNNNhOxY/FdZuXqiE7AKnjPOe2bbEicesIrnuFN4WzEvHcBnPvqiiM2mPVUW24KzPL6Cw+wNp/2B99teVqkQUb/Df+HwKcAAwCh2Fbb6rbEUgAAAABJRU5ErkJggg==",
	  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzOEE1N0E0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzOEE1Nzk0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUE1QTIwM0QwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUE1QTIwNEQwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph8IH4sAAAAGUExURQAAAAAAAKVnuc8AAAABdFJOUwBA5thmAAAAHUlEQVR42uzBgQAAAADDoPlT3+AEVQEAAAB8E2AAEEAAAaQCX5EAAAAASUVORK5CYII=",

	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXtJREFUeNrsl79Kw1AUxpsquOhmHesqti+RyU1wqVVcxUUQh1J9AGkdRAQXwVWpXQQfwPoQ7eqf0End7CYkfhe+IUgkJ7n3GAQv/Cgl4Tu/3uTee+pFUVQqcpRLBY/CBabjX847F79SdPdwJ1lAMKpgE/hgGVTAJxiDF/AAbsBTrhlIKdwFDTD17doMWCIr4IgSByBw8Q6sgiHYSCj+U6a5d8RPK4E9cAvmcjzqWXAF9vMKrINTy5XigRNmZRIwz/ySAbbDY1Y1i0CHU+hqmKxjqcAiaCos/wazUwWaSjtkOemHJRXyFTdBXyJQVxSoSwTmFQUqf+I4fles9yYRGCkKDCUC94oCA4mAOUpDheIhs1MFnkFfQaDPbNEqaIOJw+ITZooPI9PJbAMXPXvErCBrP9BjMxFaFm8xK1dHdAbWwEfOad9iQ2LVE95xD+8JZyPkvTVw7aorDthgtmNtuSmwwOuv3MAGfNsfXbflcZEucTK8/z+nRQt8CTAALHNH8RXxa/gAAAAASUVORK5CYII=",
	  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzOEE1N0E0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzOEE1Nzk0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUE1QTIwM0QwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUE1QTIwNEQwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph8IH4sAAAAGUExURQAAAAAAAKVnuc8AAAABdFJOUwBA5thmAAAAHUlEQVR42uzBgQAAAADDoPlT3+AEVQEAAAB8E2AAEEAAAaQCX5EAAAAASUVORK5CYII=",

	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXlJREFUeNrslz9Lw0AYxpsquOhmHesqtl8ik5vgUqvo6CwKpY5dxDqouLuJUrsIfgDrh2hX/4RO6mY3IfE5eIYgkbzJ3WsQPPhRSsLz/nrJ3b31oigqFTnKpYJH4QLT8S+d0+1fKdrZv0wWEIwq2AQ+WAYV8AnG4AU8gBvwlGsGUgp3QQNMfbs2A5bICjikxAEIXLwDq2AINhKK/5Rp7h3x00pgF9yCuRyPehZcgb28AuvgzHKleOCEWZkEzDO/YIDt8JhVzSJwxCl0NUzWsVRgETQVln+D2akCTaUdspz0w5IK+YqboC8RqCsK1CUC84oClT9xHL8r1nuTCIwUBYYSgXtFgYFEwByloULxkNmpAs+gryDQZ7ZoFbTBxGHxCTPFh5HpZHaAi549YlaQtR/osZkILYu3mJWrIzoHa+Aj57RvsSGx6gnvuIf3hLMR8t4auHbVFQdsMNuxttwUWOD1V25gA77tj67b8rhIlzgZ3v+f06IFvgQYAA7LR/FWJjuoAAAAAElFTkSuQmCC",
	  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTAzOEE1N0E0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTAzOEE1Nzk0Nzk5MTFFODk1NkY5NkQ3MjQzOUREM0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUE1QTIwM0QwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUE1QTIwNEQwMjMxMUU3OUI2QUE2QjA2QTNEREM0OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph8IH4sAAAAGUExURQAAAAAAAKVnuc8AAAABdFJOUwBA5thmAAAAHUlEQVR42uzBgQAAAADDoPlT3+AEVQEAAAB8E2AAEEAAAaQCX5EAAAAASUVORK5CYII=",

	], 750);

  setTimeout(function () {
    window.dispatchEvent(new Event("resize"));

  }, 200);

  detectPage();

  if ($pageTemplate === 'about') {
    instagram();

  }
}

// document ready --------------------------------------------------------------

$(document).ready(function () {
  init();

  // Cheeky Credit Link

  console.log('(ノಠ益ಠ)ノ彡');
  console.log('Website by http://grafik.nz');


});



/////////////////////////////////////////////////////////////////
// History
//////////////////////////////////////////////////////////////////
(function (window, undefined) {

  // Prepare our Variables
  var
    History = window.History,
    $ = window.jQuery,
    document = window.document;

  // Check to see if History.js is enabled for our Browser
  if (!History.enabled) {
    return false;
  }

  // Wait for Document
  $(function () {
    // Prepare Variables
    var
    /* Application Specific Variables */

      contentSelector = '.content-wrap',
      $content = $(contentSelector).filter(':first'),
      contentNode = $content.get(0),
      $menu = $('.main-menu ul').filter(':first'),
      activeClass = 'current_page_item',
      activeSelector = '.current_page_item',
      menuChildrenSelector = 'li',
      completedEventName = 'statechangecomplete',

      /* Application Generic Variables */
      $window = $(window),
      $body = $(document.body),
      rootUrl = History.getRootUrl(),
      scrollOptions = {
        duration: 0
      };

    // Ensure Content
    if ($content.length === 0) {
      $content = $body;

    }

    // Internal Helper
    $.expr[':'].internal = function (obj, index, meta, stack) {
      // Prepare
      var
        $this = $(obj),
        url = $this.attr('href') || '',
        isInternalLink;

      // Check link
      isInternalLink = url.substring(0, rootUrl.length) === rootUrl || url.indexOf(':') === -1;

      // Ignore or Keep
      return isInternalLink;
    };

    // HTML Helper
    var documentHtml = function (html) {
      // Prepare
      var result = String(html)
        .replace(/<\!DOCTYPE[^>]*>/i, '')
        .replace(/<(html|head|body|title|meta|script)([\s\>])/gi, '<div class="document-$1"$2')
        .replace(/<\/(html|head|body|title|meta|script)\>/gi, '</div>');

      // Return
      return $.trim(result);
    };

    // Ajaxify Helper
    $.fn.ajaxify = function () {
      // Prepare
      var $this = $(this);
      
      // Ajaxify
      $this.find('a:internal:not(.no-ajax)').click(function (event) {
        // Prepare variables
        var
          $this = $(this),
          url = $this.attr('href'),
          title = $this.attr('title') || null,
          $loader = $('.loader');

        // Continue as normal for command clicks etc
        if (event.which === 2 || event.metaKey) {
          return true;
        }

        // Check if the url we click is what we are on
        if (url !== document.location.href) {

          History.pushState(null, title, url);
          event.preventDefault();
          return false;
          
        } else {
          return false;
        }
      });

      // Chain
      return $this;
    };

    // Ajaxify our Internal Links

    $body.ajaxify();

    // Hook into State Changes


    $window.bind('statechange', function () {

      //////////////////////////////////////
      // LOOKS LIKE VELOCITY IS USED TO TRANSITION 
      //////////////////////////////////////
      
      $('.content-wrap, .main-footer').velocity({
        opacity: 0,
      }, {
        duration: 850,
        delay: 0,
        easing: bezEasing,
        complete: function () {
          $(".text-cursor").html('');
        },
      });


      //////////////////////////////////////
      // MODIFIED 
      //////////////////////////////////////
      
      // Prepare Variables
      var State = History.getState(),
        url = State.url,
        relativeUrl = url.replace(rootUrl, ''),
        loader = $('.loader'),
        contentWrap = $('.content-wrap');
      
      //////////////////////////////////////
      //////////////////////////////////////

      // Ajax Request the Traditional Page

      $.ajax({
        url: url,
        success: function (data, textStatus, jqXHR) {
          // Prepare
          var
            $data = $(documentHtml(data)),
            $dataBody = $data.find('.document-body:first'),
            $dataContent = $dataBody.find(contentSelector).filter(':first'),
            $menuChildren, contentHtml, $scripts;

          // Fetch the scripts
          $scripts = $dataContent.find('.document-script');
          if ($scripts.length) {
            $scripts.detach();
          }


          // Fetch the content
          contentHtml = $dataContent.html() || $data.html();
          if (!contentHtml) {
            document.location.href = url;
            return false;
          }

          //////////////////////////////////////
          // MODIFIED
          //////////////////////////////////////
          
          $content.stop(true);
          $content.html(contentHtml).ajaxify();

          //////////////////////////////////////
          // Reinit scripts
          //////////////////////////////////////
          
          $pageTemplate = $('.template').attr('data-page-template');
          if (typeof mixer !== 'undefined') {
            mixer.destroy();
          }
          init();
          
          //////////////////////////////////////
          //////////////////////////////////////

          // Update the menu
          $menuChildren = $menu.find(menuChildrenSelector);
          $menuChildren.filter(activeSelector).removeClass(activeClass);
          $menuChildren = $menuChildren.has('a[href^="' + relativeUrl + '"],a[href^="/' + relativeUrl + '"],a[href^="' + url + '"]');

          if ($menuChildren.length === 1) {
            $menuChildren.addClass(activeClass);
          }

          //////////////////////////////////////
          //// SOMETHING HAPPENS IF THE URL IS ROOT ////
          //////////////////////////////////////
          
          if (url === rootUrl) {
            $menuChildren.removeClass(activeClass);
            $menuChildren.first().addClass(activeClass);
          }
          
          //////////////////////////////////////
          //////////////////////////////////////


          // Update the title
          document.title = $data.find('.document-title:first').text();
          try {
            document.getElementsByTagName('title')[0].innerHTML = document.title.replace('<', '&lt;').replace('>', '&gt;').replace(' & ', ' &amp; ');
          } catch (Exception) {}

          // Add the scripts
          $scripts.each(function () {
            var $script = $(this),
              scriptText = $script.text(),
              scriptNode = document.createElement('script');
            if ($script.attr('src')) {
              if (!$script[0].async) {
                scriptNode.async = false;
              }
              scriptNode.src = $script.attr('src');
            }
            scriptNode.appendChild(document.createTextNode(scriptText));
            contentNode.appendChild(scriptNode);
          });

          //////////////////////////////////////
          //// CHECK PAGE AND RERUN SCRIPTS ////
          //////////////////////////////////////
          
          // Move the content and menu
          $pageTemplate = $('.template').attr('data-page-template');
          $('.content-wrap').css('marginBottom', '0');
          $('.content-wrap, .main-footer, .main-menu').velocity({
            opacity: 1,
          }, {
            duration: 850,
            delay: 400,
            complete: function () {

              if ($pageTemplate === 'projects') {
                projectsShow();
              }

              if ($pageTemplate === 'homepage') {
              }

              if ($pageTemplate === 'about') {
                $('body').addClass('about-body');
              } else {
                $('body').removeClass('about-body');
              }
            }
          });
          
          //////////////////////////////////////
          //////////////////////////////////////


          // Complete the change
          $window.trigger(completedEventName);
          
          // Inform Google Analytics of the change
          ga('send', 'pageview', relativeUrl);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          document.location.href = url;
          return false;
        }
      }); // end ajax

    }); // end onStateChange

  }); // end onDomLoad

})(window); // end closure