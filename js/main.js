(function($) {

    "use strict"

    // Scrollspy
    $('body').scrollspy({
        target: '#nav',
        offset: $(window).height() / 2
    });

    // Mobile nav toggle
    $('.navbar-toggle').on('click', function() {
        $('.main-nav').toggleClass('open');
    });

    // Fixed nav
    $(window).on('scroll', function() {
        var wScroll = $(this).scrollTop();
        wScroll > 50 ? $('#header').addClass('fixed-navbar') : $('#header').removeClass('fixed-navbar');
    });

    // Smooth scroll
    $(".main-nav a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 800);
    });

    // Section title animation
    $('.section-title').each(function() {
        var $this = $(this);
        $this.find('.title > span').each(function(i) {
            var $span = $(this);
            var animated = new Waypoint({
                element: $this,
                handler: function() {
                    setTimeout(function() {
                        $span.addClass('appear')
                    }, i * 250);
                    this.destroy();
                },
                offset: '95%'
            });
        });
    });
    $('.cta-content').each(function() {
        var $this = $(this);
        $this.find('img').each(function(i) {
            var $img = $(this);
            var animated = new Waypoint({
                element: $this,
                handler: function() {
                    setTimeout(function() {
                        $img.addClass('appear')
                    }, i * 250);
                    this.destroy();
                },
                offset: '90%'
            });
        });
    });

    // Galery Owl
    $('#galery-owl').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplaySpeed: 500,
        navSpeed: 500,
        responsive: {
            0: {
                stagePadding: 0,
            },
            768: {
                stagePadding: 120,
            }
        }
    });
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });

    // Parallax Background
    $.stellar({
        responsive: true
    });

    // CountTo
    $('.counter').each(function() {
        var $this = $(this);
        var counter = new Waypoint({
            element: $this,
            handler: function() {
                $this.countTo();
            },
            offset: '95%'
        });
    });



})(jQuery);