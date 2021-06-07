document.getElementById('menuToggle').addEventListener('click', function () {
    let menu = document.getElementById('menu_mobile');
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        menu.classList.remove('active');
    } else {
        this.classList.add('active');
        menu.classList.add('active');
    }
});
window.onscroll = function () {
    let scrTop = document.querySelector('html,body').scrollTop;
    let myHeader = document.getElementById('myHeader');
    if (scrTop > 0) {
        myHeader.classList.add('fixed');
    } else {
        myHeader.classList.remove('fixed');
    }
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.head-book ').addClass('fix');
    } else {
        $('.head-book ').removeClass('fix');
    }
});

$('.home-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<svg class="icon"><use xlink:href="#left-arrow" /></svg>', '<svg class="icon"><use xlink:href="#right-arrow" /></svg>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.home-body1-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.home-body2-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },

        1100: {
            items: 2
        },

        1200: {
            items: 3
        }
    }
});
$('.dining-specials-carousel').owlCarousel({
    loop: false,
    margin: 30,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('#special-offer').owlCarousel({
    loop: true,
    margin:20,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});

$('.dining-scrolling').owlCarousel({
    loop: true,
    margin: 20,
    //autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        }        
    }
});




var cmenuId = "." + $("#MenuId").text();
$(cmenuId).parent().addClass('active');
//--------ToTop------------//
$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$('#toTop').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1500);
});

//--------cookies-statement------------//
$(document).ready(function () {
    $('.acceptbtn, .Cookiesclose').click(function () {
        sessionStorage.setItem('popupFlag', 1);
        $('.cookies-statement').hide();
    });
    if (sessionStorage.getItem("popupFlag") == 1) {

    }
    else {
        $('.cookies-statement').show();
    }
    $("#booknowli").html($("#booknowdiv").html())

});


$(document).ready(function () { var d = new Date(); document.getElementById('labeldate').innerHTML = d.getFullYear(); });


setTimeout(function () {
    document.getElementById('naudltlabel').setAttribute('for', 'naudlt');
    document.getElementById('nchildlabel').setAttribute('for', 'nchild');
    if (document.querySelectorAll(".owl-dots.disabled")[0] == undefined) {

    } else {
        document.querySelectorAll(".owl-dots.disabled")[0].remove();
    }
    //var divs = document.querySelectorAll('.owl-dot'), i;    
    //for (i = 0; i < divs.length; ++i) {
    //    var para = document.createElement("span");                       // Create a <p> node
    //    para.setAttribute("class", "d-none");
    //    var t = document.createTextNode("0");      // Create a text node
    //    para.appendChild(t);
    //    divs[i].appendChild(para)
    //}
}, 1000);

$(document).ready(function () {
    setTimeout(function () {
        var allSelect2 = document.querySelectorAll('select');
        var allInp = document.querySelectorAll('.select2-input');
        var alllbl = document.querySelectorAll('.select2-input-label');
        var swalSelect = document.querySelectorAll('.swal2-select');
        for (let i = 0; i < allInp.length;i++){
            allInp[i].setAttribute('id', 'select32autocomplete' + i);
            alllbl[i].setAttribute('for', 'select32autocomplete' + i);
            alllbl[i].innerHTML = 'select32autocomplete' + i;
            let allOptions = allSelect2[i].innerHTML;
            allSelect2[i].innerHTML = "<optgroup label='select2" + i + "'>" + allOptions + "</optgroup>";
            allOptions = "";
        }
        for (let i = 0; i < swalSelect.length; i++) {
            let allOptions = swalSelect[i].innerHTML;
            swalSelect[i].innerHTML = "<optgroup label='swalSelect" + i + "'>" + allOptions + "</optgroup>";
            allOptions = "";
        }
        $('.select2-choice').removeAttr('onclick');
    }, 1000);
    $('.title_none').attr('title', '');
    $('.select2-choice').removeAttr('onclick');
});
