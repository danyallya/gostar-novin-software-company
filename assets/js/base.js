$(document).ready(function () {
    $(document).on('click', function () {
        $('.solution').removeClass('active').find(".answer").removeClass('flipInX').css('display', 'none');
        $('header .top-header .item-text').removeClass('show');


    });
    $('#de-project .sliders .slides .slide:nth-child(2)').addClass('active');
    $('#de-project .sliders .arrow-left').on('click', function () {
        $(function () {
            var slides = $('.slides');
            var slide = slides.find('.slide').first().clone();
            slides.append(slide);
            // slide.appendTo(slides).fadeIn();

            slides.find('.slide').first().remove();
            $('#de-project .sliders .slides .slide').removeClass('active');

            $('#de-project .sliders .slides .slide:nth-child(2)').addClass('active');
        });

    });
    $('#de-team .sliders .items .item:first-child').addClass('active');
    $('#de-project .sliders .arrow-right').on('click', function () {
        $(function () {
            var slides = $('.slides');
            var slide = slides.find('.slide').last().clone();
            slides.prepend(slide).show('slow')
            slides.find('.slide').last().remove();
            $('#de-project .sliders .slides .slide').removeClass('active')

            $('#de-project .sliders .slides .slide:nth-child(2)').addClass('active')

        });

    });
    $('header i.fa-bars').on('click', function (e) {
        if ($('header .top-header .item-text').hasClass('show')) {
            $('header .top-header .item-text').removeClass('show');

        } else {
            $('header .top-header .item-text').addClass('show');

        }
        e.stopPropagation()
    });

    $('#de-team .sliders .arrow-left').on('click', function () {
        $(function () {
            var items = $('#de-team .sliders .items');
            var item = items.find('.item').first().clone();
            items.append(item);
            // slide.appendTo(slides).fadeIn();

            items.find('.item').first().remove();
            $('#de-team .sliders .items .item').removeClass('active');

            $('#de-team .sliders .items .item:nth-child(1)').addClass('active');
            //    text
            var information = $('#de-team .informations');
            var info = information.find('.info').first().clone();
            information.append(info);
            // slide.appendTo(slides).fadeIn();

            information.find('.info').first().remove();
            $('#de-team .informations .info').removeClass('active');

            $('#de-team .informations .info:nth-child(1)').addClass('active');
        });

    });
    $('#de-team .sliders .arrow-right').on('click', function () {
        $(function () {
            var items = $('#de-team .sliders .items');
            var item = items.find('.item').last().clone();
            items.prepend(item).show('slow');
            items.find('.item').last().remove();
            $('#de-team .sliders .items .item').removeClass('active');

            $('#de-team .sliders .items .item:nth-child(1)').addClass('active');
            //    text
            var informations = $('#de-team .informations');
            var info = informations.find('.info').last().clone();
            informations.prepend(info).show('slow');
            informations.find('.info').last().remove();
            $('#de-team .informations .info').removeClass('active');

            $('#de-team .informations .info:nth-child(1)').addClass('active');

        });

    });


    $('.solution').on('click', function (e) {
        $('.solution').removeClass('active').find(".answer").removeClass('flipInX').css('display', 'none');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find(".answer").removeClass('flipInX').css('display', 'none');
        } else {
            $(this).addClass('active').find(".answer").addClass('flipInX').css('display', 'block');


        }
        e.stopPropagation()
    });
    $(".modal-wide").on("show.bs.modal", function () {
        var height = $(window).height() - 200;
        $(this).find(".modal-body").css("height", height);
    });
    $('#sec-one .item').on('click', function () {
        $(this).closest('#sec-one').find('.info').css('display', 'none');

        if ($(this).hasClass('one')) {
            $(this).closest('#sec-one').find('#one').css('display', 'block');
        }
        if ($(this).hasClass('two')) {
            $(this).closest('#sec-one').find('#two').css('display', 'block');

        }
        if ($(this).hasClass('three')) {
            $(this).closest('#sec-one').find('#three').css('display', 'block');

        }
        if ($(this).hasClass('four')) {
            $(this).closest('#sec-one').find('#four').css('display', 'block');

        }

    });

    var footer = $('footer').offset().top;
    $('.footer').click(function () {
        $('html , body').animate({scrollTop: footer}, 2000);

    });
    /*
Reference: http://jsfiddle.net/BB3JK/47/
*/

    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    /*
	Custom checkbox and radio button - Jun 18, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/
    $('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
    $(".radio-btn").on('click', function () {
        var _this = $(this),
            block = _this.parent().parent();
        block.find('input:radio').attr('checked', false);
        block.find(".radio-btn").removeClass('checkedRadio');
        _this.addClass('checkedRadio');
        _this.find('input:radio').attr('checked', true);
    });
    $('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
    $.fn.toggleCheckbox = function () {
        this.attr('checked', !this.attr('checked'));
    }
    $('.check-box').on('click', function () {
        $(this).find(':checkbox').toggleCheckbox();
        $(this).toggleClass('checkedBox');
    });

});


$(document).scroll(function () {
    if ($(document).scrollTop() == 0) {

        $("header").removeClass("on");

    } else {
        $("header").addClass("on");

    }

});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


