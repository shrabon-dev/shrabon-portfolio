

    // =====Pre Loader===== //
     
    // var loader = document.getElementById("loader");
    // window.addEventListener("load", function () {

    //     loader.style.visibility = "hidden";

    // });

    // ======Menufix===== //

    //    var navoff = $(".main_menu").offset().top;
    //
    //    $(window).scroll(function () {
    //        var scrolling = $(this).scrollTop();
    //
    //        if (scrolling > navoff) {
    //            $(".main_menu").addClass("menu_fix");
    //        } else {
    //            $(".main_menu").removeClass("menu_fix");
    //        }
    //    });


     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // ======Smooth Scroll===== //

    // $('a[href*="#"]')
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) {
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1');
    //                         $target.focus();
    //                     };
    //                 });
    //             }
    //         }
    //     });
    
    
  
    // ======Slick Slider===== //


    $(".banner__slider").slick({
        dots:false,
        infinite: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
  ]

    });







 $(".testi__slider").slick({
        dots:false,
        infinite: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 1000,
        speed: 1300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'<i class="fas fa-arrow-right next"></i>',
        nextArrow:'<i class="fas fa-arrow-left prev"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
    }
  ]

    });


    
    function pageScroll() {
        window.scrollBy(0,1);
        scrolldelay = setTimeout(pageScroll,10);
    }
    


    // =====scroll top===== //


    // $(".scroll_top").on('click', function () {
    //     $("html,body").animate({
    //         scrollTop: 0,
    //     }, 800);
    // });
    // $(window).on('scroll', function () {
    //     var scrolling = $(this).scrollTop();

    //     if (scrolling > 200) {
    //         $(".scroll_top").fadeIn();
    //     } else {
    //         $(".scroll_top").fadeOut();
    //     }
    // });



    // =====Aos Js===== n//

    AOS.init();

    // counter up
    $('.counter').counterUp();
    

    $(".dropdown__menu").click(function(){
        $(".sub__drop__menu").fadeToggle()
    })
    new VenoBox({
        selector: ".my-link"
    });

    (function( $ ){
        $.fn.scrollImage = function(){
    
            var imageScrollGetHeight = function( $this ){
              var imageh = $this.find( 'img' ).height(),
                  screenh = $this.height();
              return parseInt( screenh - imageh );
            };
    
            var onHover = function(){
    
                // Don't scroll the image if image's height is smaller that screen's height
                if( imageScrollGetHeight( $( this ) ) > 0 )
                    return;
    
                $ele = $( this ).find( 'img' );
                $ele.stop();
    
                var duration = $( this ).attr( 'data-duration' );
    
                if( ! duration ){
                    duration = 5000;
                }
    
                $ele.animate({
                    bottom: 0
                },parseInt( duration ) );
            };
    
            var onRelease = function(){
    
                $ele.stop();
                $ele.animate({
                    bottom: imageScrollGetHeight( $( this ) )
                },500);
            };
    
            var setImagePosition = function( $this ){
                $this.find( 'img' ).css({
                    bottom: imageScrollGetHeight( $this )
                 });
            }
    
            this.hover( onHover, onRelease );
    
            var that = this;
    
            $( window ).resize( function(){
    
                that.each( function(){
                    setImagePosition( $( this ) );
                });
            });
    
            return this.each(function() {
                setImagePosition( $( this ) );
               
            });
        };
    })( jQuery );


    $('.bar__opt').click(function(){
         $('.none__menu__bar').toggleClass('active__menu__bar');
    })