/**
 * Created by Administrator on 2017/9/30.
 */
'use strict';
$(function () {
    /*swiper*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        autoplay: 3000,
        paginationClickable: true,
        spaceBetween: 30
    });
<<<<<<< HEAD
=======
    $('.phyletic,.bigbooks').mouseenter(function () {
        swiper.stopAutoplay()
    }).mouseleave(function(){
       swiper.startAutoplay()
    });
>>>>>>> e379f19d4c1ca65f1d2bb71a84b5a7c32cdbab7a
    /*fullpage*/
    $('#dookbook').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        scrollingSpeed: 1000,
        // keyboardScrolling: false,
        // scrollBar: true,
        menu: '#menu',
        onLeave: function (index, nextIndex, direction) {
//                console.log(nextIndex + "=----" + direction)

            if (nextIndex > 1) {
                if (nextIndex == 2 && direction == 'down') {
                    setTimeout(function () {
                        $("#menu").show();
                    }, 100);
                } else {
                    $("#menu").show();
                }
            } else {
                $("#menu").hide();
            }
<<<<<<< HEAD
        }
    });
    $('#menu>li>ul').css('display','none');
    $('#menu li a').on('click',function(){
        $(this).next('ul').show();
        $(this).parent('li').siblings().find('ul').hide();
    });
    $('#menu li ul li').on('click',function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var ind = $(this).index();
        $('.phyletic').find('.phy-waiguo').eq(ind).addClass('active').siblings().removeClass('active')
    });




   /* $('.phyletic .swi-dis li:first-child').css('display', 'block');
=======
            /*if (nextIndex == 7) {
                $.fn.fullpage.setAutoScrolling(false);
            } else {
                $.fn.fullpage.setAutoScrolling(true);
            }*/
        },
    });
    $('.phyletic .swi-dis li:first-child').css('display', 'block');
>>>>>>> e379f19d4c1ca65f1d2bb71a84b5a7c32cdbab7a
    $('.bigbooks ul li:last-child').css('display', 'block');
    var clearTime = null;
    var num = 0;
    var sum = 0;
    $('.swiper-slide').mouseenter(function () {
        var el = $(this).children('.swi-dis');
        var els = el.children('li').length;
        var bl = $('.bigbooks').children('ul');
        var bls = bl.children('li').length;
        clearTime = setInterval(function () {
            num++;
            sum++;
            if (num == els || sum == bls) {
                num = -1;
                sum = -1;
            } else {
                $(el).children('li').hide();
                $(el).children('li').eq(num).show();
                $(bl).children('li').hide();
                $(bl).children('li').eq(sum).show();
            }
        }, 2000);
    });
    $('.swiper-slide').mouseleave(function () {
        clearInterval(clearTime);
<<<<<<< HEAD
    });*/
=======
    });
>>>>>>> e379f19d4c1ca65f1d2bb71a84b5a7c32cdbab7a
});