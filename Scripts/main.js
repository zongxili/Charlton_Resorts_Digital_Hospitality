$(window).on('load', function () {
    var wn = window.navigator,
		ua = wn.userAgent.toLowerCase(),
		av = wn.appVersion.toLowerCase(),
		up = window.location.protocol.toLowerCase();

    var isOldIE = av.indexOf('msie 6.0') > -1 || av.indexOf('msie 7.0') > -1 || av.indexOf('msie 8.0') > -1,
		isIE8 = av.indexOf('msie 8.0') > -1,
		isIE9 = av.indexOf('msie 9.0') > -1,
		isIE10 = av.indexOf('msie 10.0') > -1,
		isIE11 = ua.match(/trident.*rv[ :]*11\./),
		isIE8over = av.indexOf('msie 8.0') > -1 || av.indexOf('msie 9.0') > -1 || av.indexOf('msie 10.0') > -1 || av.indexOf('msie 11.0') > -1,
		isIEUnder11 = av.indexOf('msie 8.0') > -1 || av.indexOf('msie 9.0') > -1 || av.indexOf('msie 10.0') > -1,
		isIE = ua.indexOf('msie') != -1 || ua.match(/trident/),
		isSafari = ua.indexOf('safari') != -1,
		isIPod = ua.match(/ipod/i),
		isIPhone = ua.match(/iphone/i),
		isIPad = ua.match(/ipad/i),
		isAndroid = ua.match(/android/i),
		isSP = ua.match(/android/i) || ua.match(/iphone/i),
		isChrome = ua.indexOf('chrome') !== -1,
		isFF = ua.indexOf('firefox') !== -1,
		isOpera = ua.indexOf('opera') !== -1,
		isOmniWeb = ua.indexOf('omniweb') !== -1,
		isKonqueror = ua.indexOf('konqueror') !== -1;

    var isMobile = (/iphone|ipod|kindle|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(ua)),
		isTablet = (/ipad|sch-i800|playbook|xoom|tablet|gt-p1000|gt-p7510|sgh-t849|nexus 7|shw-m180s|a100|dell streak|silk/i.test(ua));

    $.easing.quart = function (x, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b; };
    $.easing.easeOutCubic = function (x, t, b, c, d) { t /= d; t--; return c * (t * t * t + 1) + b; };
    $.easing.easeInOutQuad = function (x, t, b, c, d) { t /= d / 2; if (t < 1) return c / 2 * t * t + b; t--; return -c / 2 * (t * (t - 2) - 1) + b; };
    $.easing.easeInQuad = function (x, t, b, c, d) { t /= d; return c * t * t + b; };
    $.easing.easeOutQuad = function (x, t, b, c, d) { t /= d; return -c * t * (t - 2) + b; };

    var ww, wh, _page,
		isScrollingIos = false;

    if ($('section').attr('id') === 'top') { _page = 'top'; }
    if ($('section').attr('id') === 'stay') { _page = 'stay'; }
    if ($('section').attr('id') === 'fashion') { _page = 'fashion'; }
    if ($('section').attr('id') === 'food') { _page = 'food'; }
    if ($('section').attr('id') === 'music') { _page = 'music'; }
    if ($('section').attr('id') === 'culture') { _page = 'culture'; }
    if ($('section').attr('id') === 'review') { _page = 'review'; }
    if ($('section').attr('id') === 'location') { _page = 'location'; }
    if ($('section').attr('id') === 'about') { _page = 'about'; }
    if ($('section').attr('id') === 'policy') { _page = 'policy'; }



    console.log('page: ' + _page);


    $('#aside-nav-top-pc-menu, #aside-nav-floor-pc-menu, #aside-nav-global-pc-menu, #nav-menu, #aside-nav-fix-pc-menu, #aside-nav-fix-sp').on({ click: function (evt) { _setNav(); } }, '');

    var opn = false;
    function _setNav() {
        if (!opn) {
            $('#common-masker').css({ 'display': 'block', 'z-index': 7, 'opacity': 0, 'background-color': 'rgba(0,0,0,.9)' }).stop(true, false).animate({ 'opacity': 1 }, 400, 'linear');
            $('#nav-menu-icon, #aside-nav-fix-pc-menu-icon, #aside-nav-top-pc-menu-icon, #aside-nav-fix-sp-icon').addClass('open');
            $('#aside-nav-fix-sp-icon span').css({ 'background-color': '#fff' });
            $('nav').stop(true, false).animate({ height: $(window).height() + 60 }, 600, 'easeOutQuad');
            $('#nav-menu-title-open').stop(true, false).animate({ top: '-25px' }, 600, 'easeOutQuad');
            $('#nav-menu-title-close').stop(true, false).animate({ top: 0 }, 600, 'easeOutQuad');
            opn = true;
        }
        else {
            $('#common-masker').stop(true, false).animate({ 'opacity': 0 }, 600, 'linear', function () { $(this).css({ 'display': 'none' }); });
            $('#nav-menu-icon, #aside-nav-fix-pc-menu-icon, #aside-nav-top-pc-menu-icon, #aside-nav-fix-sp-icon').removeClass('open');
            $('nav').stop(true, false).animate({ height: 0 }, 600, 'easeInOutQuad');
            $('#nav-menu-title-open').stop(true, false).animate({ top: 0 }, 600, 'easeInOutQuad');
            $('#nav-menu-title-close').stop(true, false).animate({ top: '25px' }, 600, 'easeInOutQuad');
            __setScroll();
            opn = false;
        }
    }


    /*==============*/
    //top
    /*==============*/

    if (_page === 'top') {
        if (window.location.hash == '#top') {
            $('#top-intro').css({ 'display': 'none' });
            $('#aside-nav-top-pc').css({ 'top': '30px' });
            $('#top-banner-center, #top-banner-center a, #top-banner-footer').css({ 'opacity': 1 });
        } else {
            $('#common-masker').css({ 'display': 'none' });
            $('#top-intro').delay(1000).animate({ opacity: 0 }, 500, 'easeInOutQuad', function () { $(this).css({ 'display': 'none' }); });
            $('#top-banner-center, #top-banner-footer').delay(1400).animate({ opacity: 1 }, 1100, 'easeInOutQuad');
            $('#top-banner-center a').delay(0).animate({ opacity: 1 }, 1600, 'easeInOutQuad');
            $('#aside-nav-top-pc').delay(1900).animate({ top: 30 }, 800, 'easeInOutQuad');
        }

        $('#aside-nav-fix-pc ul#aside-nav-fix-pc-cat li').eq(0).find('a').addClass('selected');
        $('footer').css({ 'background-color': '' });

        

        
        starttopslideshow(); //after intro

        //var token = '5887936185.ccc82b2.26034d2f54254e80887b1b33b4aff94b',
		//	username = 'hotelkoetokyo',
		//    num_photos = 6;

        //$.ajax({
        //    url: 'https://api.instagram.com/v1/users/search',
        //    dataType: 'jsonp',
        //    type: 'GET',
        //    data: { access_token: token, q: username },
        //    success: function (data) {
        //        //console.log(data);
        //        $.ajax({
        //            url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent',
        //            dataType: 'jsonp',
        //            type: 'GET',
        //            data: { access_token: token, count: num_photos },
        //            success: function (data2) {
        //                for (var x in data2.data) {
        //                    $('ul#top-sns-viewer-instagram').append('<li style="background-image:url(' + data2.data[x].images.standard_resolution.url + ');height:' + $('ul#top-sns-viewer-instagram li img').height() + 'px" data-inst="' + data2.data[x].link + '"></li>');
        //                }
        //                $('ul#top-sns-viewer-instagram li').on({ click: function (evt) { _windowOpen($(this).attr('data-inst'), '_blank'); } }, '');
        //            },
        //            error: function (data) { /*console.log('error: '+data);*/ }
        //        });
        //    },
        //    error: function (data) { /*console.log('error: '+data);*/ }
        //});

        //$('ul#top-sns-viewer-instagram li').on({ click: function (evt) { _windowOpen($(this).attr('data-inst'), '_blank'); } }, '');



    }








    $('#common-masker').delay(400).animate({ 'opacity': 0 }, 600, 'linear', function () { $(this).css({ 'display': 'none' }); });


    function __setPosition() {
        ww = $(window).width();
        wh = $(window).height();
        if (ww < 920) {
            if (subnavop) {
                $('#aside-nav-fix-pc').stop(true, false).animate({ height: '98.5px' }, 600, 'easeInOutQuad');
            }
        } else {
            if (subnavop) {
                $('#aside-nav-fix-pc').stop(true, false).animate({ height: '98.5px' }, 600, 'easeInOutQuad');
            }
        }
        if (ww < 736) {
            $('#aside-nav-fix-pc').css({ 'display': 'none' });
            subnavop = false;
            if (_page === 'top') {
                $('.top-linker-arrow-sp').css({ 'margin-top': -(($('.top-linker-arrow-sp').height() / 2) + 55) });

            }
        }

        //--- top
        if (_page === 'top') {
            $('ul#top-sns-viewer-instagram li').css({ 'height': $('ul#top-sns-viewer-instagram li img').height() });
            if (!isScrollingIos) {
                $('#top-banner').css({ 'height': Math.ceil($(window).height()) });
            }
        }


    }
    $(window).resize(function () { __setPosition(); });
    __setPosition();


    var subnavop = false,
		wst;
    function __setScroll() {
        //console.log($(window).scrollTop());

        wst = $(window).scrollTop();

        if (/CriOS/i.test(navigator.userAgent) && /iphone|ipod|ipad/i.test(navigator.userAgent)) { isScrollingIos = true; }

        if (wst > 60) {
            if (!subnavop) {
                ww > 920 ? $('#aside-nav-fix-pc').stop(true, false).animate({ height: '75.5px' }, 600, 'easeInOutQuad') : $('#aside-nav-fix-pc').css({ 'background': '#000' }).stop(true, false).animate({ height: '75.5px' }, 600, 'easeInOutQuad');
                subnavop = true;

                ww > 920 ? $('.fixed .menu_logo.logo img').stop(true, false).animate({ width: '40%' }, 600, 'easeInOutQuad') : $('.fixed .menu_logo.logo img').css({ 'background': '#000' }).stop(true, false).animate({ width: '40%' }, 600, 'easeInOutQuad');
                subnavop = true;




                ww < 736 ? $('#aside-nav-fix-pc').css({ 'display': 'none' }) : 0;
                ww < 736 ? subnavop = false : 0;
            }
        } else {
            if (subnavop) {
                $('#aside-nav-fix-pc').stop(true, false).animate({ height: 0 }, 600, 'easeInOutQuad');
                subnavop = false;

                $('.menu_logo.logo img').stop(true, false).animate({ width: '54%' }, 600, 'easeInOutQuad');
                subnavop = false;
            }
        }



    }

    $(window).scroll(function () {
        __setScroll();
    });
    __setScroll();


    function _windowOpen($url, $target) {
        if (!/^(f|ht)tps?:\/\//i.test($url)) { $url = 'http://' + $url; }
        if ($target === undefined) { $target = '_blank'; }
        window.open($url, $target);
    };

});
var sts = 1200,
    std = 4000;
//function starttopslideshow() {

//            $('#top-banner-background-1').css({ 'width': '100%', 'z-index': 5 });
//            $('#top-banner-background-2').css({ 'width': '100%', 'z-index': 4 });
//            $('#top-banner-background-3').css({ 'width': '100%', 'z-index': 3 });
//            $('#top-banner-background-4').css({ 'width': '100%', 'z-index': 2 });
//            //$('#top-banner-background-5').css({ 'width': '100%', 'z-index': 1 });

//            $('#top-banner-background-1 div').addClass('active');
//            $('#top-banner-background-2 div').addClass('active');
//            $('#top-banner-background-3 div').removeClass('active');
//            $('#top-banner-background-4 div').removeClass('active');
//            //$('#top-banner-background-5 div').removeClass('active');

//            $('#top-banner-background-2').delay(std).animate({ width: 0 }, {
//                duration: sts,
//                start: function () {
//                    $('#top-banner-background-3 div').addClass('active');
//                },
//                complete: function () {
//                    $('#top-banner-background-2 div').removeClass('active');
//                    $('#top-banner-background-3').delay(std).animate({ width: 0 }, {
//                        duration: sts,
//                        start: function () {
//                            $('#top-banner-background-4 div').addClass('active');
//                        },
//                        complete: function () {
//                            $('#top-banner-background-3 div').removeClass('active');
//                            $('#top-banner-background-4').delay(std).animate({ width: 0 }, {
//                                duration: sts,                               
//                                start: function () {
//                                    $('#top-banner-background-2 div').addClass('active');
//                                    $('#top-banner-background-2').css({ 'width': '100%', 'z-index': 0 });
//                                },
//                                complete: function () {
//                                    starttopslideshow();
//                                }
//                            });
//                        }
//                    });
//                }
//            });
//}
function starttopslideshow() {

    $('#top-banner-background-1').css({ 'width': '100%', 'z-index': 6 });
    $('#top-banner-background-2').css({ 'width': '100%', 'z-index': 5 });
    $('#top-banner-background-3').css({ 'width': '100%', 'z-index': 4 });
    $('#top-banner-background-4').css({ 'width': '100%', 'z-index': 3 });
    $('#top-banner-background-5').css({ 'width': '100%', 'z-index': 2 });
    $('#top-banner-background-6').css({ 'width': '100%', 'z-index': 1 });

    $('#top-banner-background-1 div').addClass('active');
    $('#top-banner-background-2 div').removeClass('active');
    $('#top-banner-background-3 div').removeClass('active');
    $('#top-banner-background-4 div').removeClass('active');
    $('#top-banner-background-5 div').removeClass('active');
    $('#top-banner-background-6 div').removeClass('active');

    $('#top-banner-background-1').delay(std).animate({ width: 0 }, {
        duration: sts,
        start: function () {
            $('#top-banner-background-2 div').addClass('active');
        },
        complete: function () {
            $('#top-banner-background-1 div').removeClass('active');
            $('#top-banner-background-2').delay(std).animate({ width: 0 }, {
                duration: sts,
                start: function () {
                    $('#top-banner-background-3 div').addClass('active');
                },
                complete: function () {
                    $('#top-banner-background-2 div').removeClass('active');
                    $('#top-banner-background-3').delay(std).animate({ width: 0 }, {
                        duration: sts,
                        start: function () {
                            $('#top-banner-background-4 div').addClass('active');
                        },

                        complete: function () {
                            $('#top-banner-background-3 div').removeClass('active');
                            $('#top-banner-background-4').delay(std).animate({ width: 0 }, {
                                duration: sts,
                                start: function () {
                                    $('#top-banner-background-5 div').addClass('active');
                                },
                                complete: function () {
                                    $('#top-banner-background-4 div').removeClass('active');
                                    $('#top-banner-background-5').delay(std).animate({ width: 0 }, {
                                        duration: sts,
                                        start: function () {
                                            $('#top-banner-background-6 div').addClass('active');
                                        },

                                        start: function () {
                                            $('#top-banner-background-1 div').addClass('active');
                                            $('#top-banner-background-1').css({ 'width': '100%', 'z-index': 0 });
                                        },
                                        complete: function () {
                                            starttopslideshow();
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}