/*Ilgili DIV ler ekrana geldiginde swipe effecti icin sinif eklenmesini sagliyor */

// var isInViewport = function(elem) {
//     var distance2 = elem.getBoundingClientRect();
//     var distance = distance2;

//     return (
//       distance.top >= 0 &&
//       distance.left >= 0 &&
//       distance.bottom-600 <= (window.innerHeight || document.documentElement.clientHeight) &&
//       distance.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   };

  var isInViewport = function(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
  
  var effectArea = document.querySelectorAll('.title-bottom-line-wrapper, .block-area, #works-in-progress-wrapper');
  var blockImage = document.querySelectorAll('.block-area-image');
  
  window.addEventListener('scroll', function(event) {
  // add event on scroll
  effectArea.forEach(element => {
      //for each .thisisatest
      if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("active");
      }
  });

  blockImage.forEach(element => {
        //for each .thisisatest
        if (isInViewport(element)) {
        //if in Viewport
        element.classList.add("lazyloaded");
        }
    });


}, false);


/*Sayfa scroll olurken sayilarin bulundugu ilgili DIV ler ekrana geldiginde number animation effecti icin sayaci calistiracak olan kod */
$(window).scroll(testScroll);
var viewed = false;

function testScroll() {
    if (isInViewport($(".number-block")) && !viewed) {
        viewed = true;
        $('.value').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
      });
    }
  }


/*SCROOL ISLEMI BASLAYINCA UST MENUYU FIXED YAPAN KOD*/

$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $('#header-menu').addClass('navbar-fixed-top');
        $('.top-menu').css('display','none');
    } else {
        $('#header-menu').removeClass('navbar-fixed-top');
        $('.top-menu').css('display','block');
    }
})




/*ANASAYFA HABERLER SLIDER I**************************************************************************/

var swiper = new Swiper('#mpnews-slider', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        scrollbarHide: true,
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false
});

/*Haberler Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            var swiperIndexHeight = (Math.round($("#mpnews-slider .swiper-slide a img").width() / 0.657));
                $("#mpnews-slider .swiper-wrapper").height(swiperIndexHeight);
            }
            $("#mpnews-slider .swiper-slide img").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});

/*ANASAYFA REFERANSLAR SLIDER I**************************************************************************/

var swiper = new Swiper('#hyperlinks-slider', {
        scrollbar: '.swiper-scrollbar2',
        scrollbarHide: true,
        slidesPerView: 'auto',
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
        spaceBetween: 50,
        autoplay: true,
        speed: 5000,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false
});

/*Haberler Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            var swiperIndexHeight = (Math.round($("#hyperlinks-slider .swiper-slide a").width() / 1));
                $("#hyperlinks-slider .swiper-wrapper").height(swiperIndexHeight);
            }
            $("#hyperlinks-slider .swiper-slide img").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});


/*COZUMLER SAYFASINDA BULUNAN SLIDERLAR**************************************************************************/

/*SLIDER1*/
var swiper = new Swiper('#solution-slider1', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        scrollbarHide: false,
        slidesPerView: 'auto',      
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
    });

/*Cagegory Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            
            var swiperIndexHeight = (Math.round($("#solution-slider1 .swiper-slide img").width() / 0.409));
                $("#solution-slider1 .swiper-wrapper img").height(swiperIndexHeight);
            }

            $("#solution-slider1 .swiper-slide img").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});

/*SLIDER2*/
var swiper = new Swiper('#solution-slider2', {
        pagination: '.swiper-pagination2',
        paginationClickable: '.swiper-pagination2',
        scrollbarHide: false,
        slidesPerView: 'auto',      
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false
    });

/*Cagegory Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            
            var swiperIndexHeight = (Math.round($("#solution-slider2 .swiper-slide").width() / 0.309));
                $("#solution-slider2 .swiper-wrapper").height(swiperIndexHeight);
            }

            $("#solution-slider2 .swiper-slide").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});

/*SLIDER3*/
var swiper = new Swiper('#solution-slider3', {
        pagination: '.swiper-pagination3',
        paginationClickable: '.swiper-pagination3',
        scrollbarHide: false,
        slidesPerView: 'auto',      
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false
    });

/*Cagegory Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            
            var swiperIndexHeight = (Math.round($("#solution-slider3 .swiper-slide").width() / 0.309));
                $("#solution-slider3 .swiper-wrapper").height(swiperIndexHeight);
            }

            $("#solution-slider2 .swiper-slide").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});


/*SLIDER4*/
var swiper = new Swiper('#solution-slider4', {
        pagination: '.swiper-pagination4',
        paginationClickable: '.swiper-pagination4',
        scrollbarHide: false,
        slidesPerView: 'auto',      
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false
    });

/*Cagegory Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            
            var swiperIndexHeight = (Math.round($("#solution-slider4 .swiper-slide").width() / 0.309));
                $("#solution-slider4 .swiper-wrapper").height(swiperIndexHeight);
            }

            $("#solution-slider4 .swiper-slide").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});

/*SLIDER5*/
var swiper = new Swiper('#solution-slider5', {
        pagination: '.swiper-pagination5',
        paginationClickable: '.swiper-pagination5',
        scrollbarHide: false,
        slidesPerView: 'auto',      
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false
    });

/*Cagegory Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            
            var swiperIndexHeight = (Math.round($("#solution-slider5 .swiper-slide").width() / 0.309));
                $("#solution-slider5 .swiper-wrapper").height(swiperIndexHeight);
            }

            $("#solution-slider5 .swiper-slide").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});

/*SLIDER6*/
var swiper = new Swiper('#solution-slider6', {
        pagination: '.swiper-pagination6',
        paginationClickable: '.swiper-pagination6',
        scrollbarHide: false,
        slidesPerView: 'auto',      
        spaceBetween: 30,
        grabCursor: true,
        preloadImages: false,
        scrollbarDraggable: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false
    });

/*Cagegory Slider yuklendiginde yuksekligini ayarlasin diye kod*/
function swiperFix() {
            
            var swiperIndexHeight = (Math.round($("#solution-slider6 .swiper-slide").width() / 0.409));
                $("#solution-slider6 .swiper-wrapper").height(swiperIndexHeight);
            }

            $("#solution-slider6 .swiper-slide").one("load", function () {
                swiperFix();
            });
            $(window).on("resize", function () {
                swiperFix();
});            




/*TELEFON NUMARASI - TC KIMLIK NO GIBI ALANLARA SADECE NUMARA GİRİLMESİNİ SAĞLAYAN SCRİPT*********************************************************************/
$(function () {

$('.form-group input[id*=telephone], .form-group input[id*=idnumber]').keydown(function(event) {
// Allow: backspace, delete, tab, escape, and enter
if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
// Allow: Ctrl+A
(event.keyCode == 65 && event.ctrlKey === true) ||
// Allow: home, end, left, right
(event.keyCode >= 35 && event.keyCode <= 39)) {
// let it happen, don't do anything
return;
}
else {
// Ensure that it is a number and stop the keypress
if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
event.preventDefault();
}
}
});

});






jQuery(document).ready(function($) {

// Absolute div lerin height degeri bulundugu relative div lerin height degerini gecerse bu durumda divler ust uste binmesin diye yukseklik ayarliyorum
var absoluteDivs = document.querySelectorAll('.text-image-block-area');
absoluteDivs.forEach(element => {
    var divHeight =  element.clientHeight;
    var parentDiv= element.parentNode;
    var parentDivHeight = parentDiv.clientHeight;
    if(divHeight > 560 ) {
        parentDiv.style.height = divHeight + 170 + "px";
    }  
});

 



/*DROPDOWN MENU HOVER OLUNCA OPEN CLASS INI ALSIN, IMLECI CEKINCE GERI SILINSIN DIYE KOD */
$(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
            $(".pin").css("opacity", "1");
        }
        if(dropdownMenu.css('display') === 'none'){
            $(".pin").css("opacity", "0");
        }
});


$('.fancybox').fancybox();

/*POPUP COOKIE - HER SEFERINDE ACILMASIN DIYE    **************************************************************************/

var date = new Date();
var minutes = 5; // Kac dakikada bir acilmasini istiyorsak onu buraya yaziyoruz
date.setTime(date.getTime() + (minutes * 60 * 1000));

var visited = $.cookie('visited');
if (visited == 'yes') {
return false; // second page load, cookie active
} else {
	
	
	
$("a#popup-content").fancybox({
		'hideOnContentClick': true
	});
$("a#popup-content").fancybox().trigger('click');



}
$.cookie('visited', 'yes', {
expires: date // the number of days cookie  will be effective
});



/*HAKKIMIZDA SAYFASINDA BULUNAN TIMELINE BLOKLARININ HAREKET ETMESI ICIN SCRIPT*/
var timelineBlocks = $('.cd-timeline-block'),
offset = 0.8;

//hide timeline blocks which are outside the viewport
hideBlocks(timelineBlocks, offset);

//on scolling, show/animate timeline blocks when enter the viewport
$(window).on('scroll', function(){
(!window.requestAnimationFrame) 
? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
});

function hideBlocks(blocks, offset) {
blocks.each(function(){
( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
});
}

function showBlocks(blocks, offset) {
blocks.each(function(){
( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
});
}

/*ACCORDION KODU **************************************************************************/
function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}
$('.accordion-section-title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');

    if($(e.target).is('.active')) {
        close_accordion_section();
    }else {
        close_accordion_section();

        // Add active class to section title
        $(this).addClass('active');
        // Open up the hidden content panel
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
    }
    e.preventDefault();
});




});// document ready bitti


/*SITEDE BULUNAN TAB LARA BASINCA URL SONUNA #.... DIYE TAB IN ID SINI EKLEMEK ICIN*/

$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});


/*BIR SAYFA YUKLENDIGINDE O SAYFADA BULUNAN TAB ICINDEN 2. VEYA 3. TAB ACIK GELSIN DIYE KOD*/

$(function(){
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    if($(this).parent().prop('tagName')!=='LI')
    {

        $('ul.nav li a[href="' + $(this).attr('href') + '"]').tab('show');
    }   
    else
    {
        $(this).tab('show')
    }
  })
});


