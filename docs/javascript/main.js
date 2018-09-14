/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * alertBox
  * ajaxContactForm
  * flatAnimation
  * testimonialsFlex
  * testimonialsFlexStyle1
  * flexBlog
  * ServicesTestimonials
  * flatBlogCarousel
  * togglesAccordion
  * progressBar
  * twitterFeed
  * portfolioIsotope
  * portfolioIsotopeImg
  * detectViewport
  * countdown
  * flatCarousel
  * flatCarouselClient
  * flatCarouselGallelry
  * featuredPost
  * googleMap
  * togglesAccordion
  * swClick
  * goTop
  * retinaLogos
  * parallax
  * removePreloader
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {        	
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed = function() {
        if ( $('body').hasClass('header-sticky') ) {            
            $('#header').sticky();
        }
    }  

    var alertBox = function() {
        $(document).on('click', '.close', function(e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })     
    }

    var ajaxContactForm = function() {  
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.submit-wrap').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg == 'Success' ) {                                
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    }; 

    var flatAnimation = function() {
        if ( isMobile.any() == null ) {
            $('.flat-animation').each( function() {
                var flatElement = $(this),
                    flatAnimationClass = flatElement.data('animation'),
                    flatAnimationDelay = flatElement.data('animation-delay'),
                    flatAnimationOffset = flatElement.data('animation-offset');

                flatElement.css({
                    '-webkit-animation-delay':  flatAnimationDelay,
                    '-moz-animation-delay':     flatAnimationDelay,
                    'animation-delay':          flatAnimationDelay
                });

                flatElement.waypoint(function() {
                    flatElement.addClass('animated').addClass(flatAnimationClass);
                },{
                    triggerOnce: true,
                    offset: flatAnimationOffset
                });
            });
        }
    }; 

    // Flat testimonials
    var testimonialsFlex = function() {
        if ( $().flexslider ) {
            $('.flat-row').each(function() {
                var $this = $(this)
                $this.find('.flex-slider').flexslider({
                    animation      :  "slide",
                    direction      :  "horizontal", // vertical
                    pauseOnHover   :  false,
                    useCSS         :  false,
                    easing         :  "swing",
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  false,
                    directionNav   :  true,
                    slideshow      :  true,
                    prevText       :  '<i class="fa fa-angle-left"></i>',
                    nextText       :  '<i class="fa fa-angle-right"></i>',
                    smoothHeight   :  true
                }); // flexslider
            }); // simple-slider
        }
    };

    // Flat testimonials style1
    var testimonialsFlexStyle1 = function() {
        if ( $().flexslider ) {
            $('.flat-row').each(function() {
                var $this = $(this)
                $this.find('.flex-slider-style1').flexslider({
                    animation      :  "slide",
                    direction      :  "horizontal", // vertical
                    pauseOnHover   :  false,
                    useCSS         :  false,
                    easing         :  "swing",
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    controlNav     :  false,
                    directionNav   :  false,
                    slideshow      :  true,
                    prevText       :  '<i class="fa fa-angle-left"></i>',
                    nextText       :  '<i class="fa fa-angle-right"></i>',
                    smoothHeight   :  true
                }); // flexslider
            }); // simple-slider
        }
    };

    var flexBlog = function() {
        if ( $().flexslider ) {
            $('.flat-one-four.flat-flexslides-blog').each(function() {
                var $this = $(this)
                $this.find('.entry.flat-flexslides').flexslider({
                    animation      :  "slide",
                    pauseOnHover   :  false,
                    useCSS         :  false,
                    easing         :  "swing",
                    animationSpeed :  500,
                    slideshowSpeed :  5000,
                    directionNav   :  false,
                    slideshow      :  false,
                    smoothHeight   :  false
                }); // flexslider
            }); // flat-row
        }
    }; 

    // Testimonials services
    var ServicesTestimonials = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.services-carousel-testimonial').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: false,                     
                    autoplay: true,                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    };

    var flatBlogCarousel = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.flat-blog').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: $('.flat-blog').data('nav'),
                    dots: $('.flat-blog').data('dots'),                     
                    autoplay: $('.flat-blog').data('auto'),
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: $('.flat-blog').data('item')
                        }
                    }
                });               
            }
        });
    };

    // Flat accordion
    var togglesAccordion = function() {
        var args = {duration: 600};
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.flat-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.flat-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    }; 

    var progressBar = function() {
        $('.progress-bar').on('on-appear', function() {
            $(this).each(function() {
                var percent = $(this).data('percent');

                $(this).find('.progress-animate').animate({
                    "width": percent + '%'
                },3000);

                $(this).parent('.flat-progress').find('.perc').addClass('show').animate({
                    "width": percent + '%'
                },3000);
            });
        });
    };

    var twitterFeed = function () {
        if ( $().tweet ) {
            $('.list-tiwtter').each(function () {
                var $this = $(this);
                $this.tweet({
                    username: $this.data('username'),
                    join_text: "auto",
                    avatar_size: null,
                    count: $this.data('number'),
                    template: "{text}",
                    loading_text: "loading tweets...",
                    modpath: $this.data('modpath')      
                }); // tweet
            }); // lastest-tweets each
        };
    }; 

    var portfolioIsotope = function() {         
        if ( $().isotope ) {           
            var $container = $('.portfolio-wrap');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.flat-iconbox',
                    transitionDuration: '1s'
                });
            });

            $('.portfolio-filter li').on('click',function() {
            console.log("abc");                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });            
        };
    };

     var portfolioIsotopeImg = function() {         
        if ( $().isotope ) {           
            var $container = $('.portfolio-wrap.s1');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.item',
                    transitionDuration: '1s'
                });
            });           
        };
    };  

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    var countdown = function() {
        $('.flat-countdown').on('on-appear', function() { 
            $(this).find('.numb-count').each(function() { 
                var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                }
            });
       });
    };

    var flatCarousel = function() {
        $('.flat-row').each(function() {  
            if ( $().owlCarousel ) {
                $(this).find('.flat-carousel').owlCarousel({
                    loop: true,
                    margin: $('.flat-carousel').data('margin'),
                    nav: $('.flat-carousel').data('nav'),
                    dots: $('.flat-carousel').data('dots'),                     
                    autoplay: $('.flat-carousel').data('auto'),                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        480:{
                            items: 2
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 2
                        },
                        1200: {
                            items: $('.flat-carousel').data('item')
                        }
                    }
                });
            }
        });
    };

    // Flat client
    var flatCarouselClient = function() {
        $('.flat-row').each(function() {  
            if ( $().owlCarousel ) {
                $(this).find('.flat-client').owlCarousel({
                    loop: true,
                    margin: $('.flat-client').data('margin'),
                    nav: $('.flat-client').data('nav'),
                    dots: $('.flat-client').data('dots'),                     
                    autoplay: $('.flat-client').data('auto'),                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        480:{
                            items: 2
                        },
                        767:{
                            items: 3
                        },
                        991:{
                            items: 5
                        },
                        1200: {
                            items: $('.flat-client').data('item')
                        }
                    }
                });
            }
        });
    };

    var flatCarouselGallelry = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.flat-gallery').owlCarousel({
                    loop: true,
                    margin: $('.flat-gallery').data('margin'),
                    nav: $('.flat-gallery').data('nav'),
                    dots: $('.flat-gallery').data('dots'),                     
                    autoplay: $('.flat-gallery').data('auto'),                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        480:{
                            items: 2
                        },
                        767:{
                            items: 3
                        },
                        991:{
                            items: 4
                        },
                        1200: {
                            items: $('.flat-gallery').data('item')
                        }
                    }
                });
            }
        });
    };   

    var featuredPost = function() {
        $('.widget.widget-featured-post').each(function() {                
            if ( $().owlCarousel ) {
                $(this).find('.widg-featured-post').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: $('.flat-team-carosuel').data('nav'),
                    dots: $('.flat-team-carosuel').data('dots'),                     
                    autoplay: $('.flat-team-carosuel').data('auto'),                    
                    responsive:{
                        0:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: 1
                        }
                    }
                });
            }
        });
    }; 

    var styles = [
        {
            featureType: 'corvus_style',
            elementType: 'geometry.fill',
            stylers: [
                { color: 'red' }
            ]
        }
    ];

    var googleMap = function() {
        if ( $().gmap3 ) {
            $("#flat-map").gmap3({
                map:{
                    options:{
                        zoom: 14,
                        mapTypeId: 'corvus_style',
                        mapTypeControlOptions: {
                            mapTypeIds: ['corvus_style', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: false
                    }
                },
                getlatlng:{
                    address:  "121 King Street, Melbourne",
                    callback: function(results) {
                        if ( !results ) return;
                        $(this).gmap3('get').setCenter(new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
                        $(this).gmap3({
                            marker:{
                                latLng:results[0].geometry.location,
                                options:{
                                    icon: 'http://themesflat.com/images/icon/map.png'
                                }
                            }
                        });
                    }
                },
                styledmaptype:{
                    id: "corvus_style",
                    options:{
                        name: "Corvus Map"
                    },                    
                },
            });
        }
    };  

    var togglesAccordion = function() {
        var args = {duration: 600};
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.flat-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.flat-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    };
    
    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 

        $('.go-top').on('click', function() {            
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var retinaLogos = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;

        if(retina) {
            $('.header .logo').find('img').attr({src:'./images/logo@2x.png',width:'64',height:'62'});   
        }
    };    
    
    var parallax = function() {
        if ( $().parallax && isMobile.any() == null ) {
            $('.parallax1').parallax("50%", 0.2);
            $('.parallax2').parallax("50%", 0.4);  
            $('.parallax3').parallax("50%", 0.5);            
        }
    };

    var removePreloader = function() {        
        $('.loading-overlay').fadeOut('slow',function () {
            $(this).remove();
        });
    };   

   	// Dom Ready
	$(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {
            headerFixed();
        }                
        responsiveMenu();
        ServicesTestimonials();
        flatBlogCarousel();
        progressBar();
        portfolioIsotopeImg();
        portfolioIsotope();         
        detectViewport(); 
        testimonialsFlex();
        testimonialsFlexStyle1();
        flatAnimation();
        countdown();        
        flatCarouselClient();
        flatCarousel();
        flatCarouselGallelry();
        togglesAccordion();    
        flexBlog();
        featuredPost();
        ajaxContactForm();
        alertBox();
        twitterFeed();
        googleMap();  
        goTop();        
        retinaLogos(); 
        parallax();
        removePreloader();
   	});

})(jQuery);