// 그림을 불러들이고 레이아웃 잡고 시작
window.onload = function() {
    // 비주얼영역 스위퍼
    var sw_visual = new Swiper('.sw_visual', {
        effect: 'fade',
        // loop: true,

        // 교차 페이드 효과
        fadeEffect: {
            crossFade: true
        },
        // 자동실행
        autoplay: {
            delay: 3000,
        },
        speed: 1500,
        // 좌,우측 이동버튼
        // navigation: {
        //     nextEl: ".sw_visual_next",
        //     prevEl: ".sw_visual_prev",
        // },

        // 스크롤바 관련
        scrollbar: {
            el: ".sw_visual_sc",
            hide: false,
        },

    });
    $('.sw_visual_next').click(function() {
        sw_visual.slideNext(500, function() {});
    });

    $('.sw_visual_prev').click(function() {
        sw_visual.slidePrev(500, function() {});
    });

    //마우스 hover 하면 autoplay 멈춘다 
    $('.visual').mouseenter(function() {
        sw_visual.autoplay.stop();
    });


    //마우스 out 하면 autoplay 다시 시작 한다
    $('.visual').mouseleave(function() {
        sw_visual.autoplay.start();
    });

    //새로운 슬라이드가 모션이 시작되면 좌,우측 버튼 처리한다
    $('.sw_visual_prev').hide();
    $('.sw_visual_next').show();
    // 전체 슬라이드 개수를 자동으로 파악한다
    var totalVisual = $('.sw_visual .Swiper-slide').length;
    totalVisual = totalVisual - 1;

    sw_visual.on('slideChangeTransitionStart', function() {

        console.log(sw_visual.realIndex);
        if (sw_visual.realIndex == 0) {
            $('.sw_visual_prev').hide();
            $('.sw_visual_next').show();

        } else if (sw_visual.realIndex == 2) {
            $('.sw_visual_next').hide();
            $('.sw_visual_prev').show();
        } else {
            $('.sw_visual_prev').show();
            $('.sw_visual_next').show();

        }
    });


    // 신상품 영역 스위퍼
    new Swiper('.sw_new', {
        // 한 화면에 보여주는 슬라이드 개수
        slidesPerView: 5,
        // slide사이의 여백
        spaceBetween: 6, // 슬라이드 간의 거리(px 단위)
        navigation: {
            nextEl: ".sw_new_next",
            prevEl: ".sw_new_prev",
        },
        // pagination
        pagination: {
            el: ".sw_new_pg",
            clickable: true,
        },
    });
    // banner1 swiper
    new Swiper('.sw_banner_1', {
        // 한 화면에 보여주는 슬라이드 개수
        slidesPerView: 2,
        // slide사이의 여백
        spaceBetween: 6, // 슬라이드 간의 거리(px 단위)
        navigation: {
            nextEl: ".sw_banner_1_next",
            prevEl: ".sw_banner_1_prev",
        },

    });
    // best product swiper
    new Swiper('.sw_best', {
        // slide사이의 여백
        spaceBetween: 6, // 슬라이드 간의 거리(px 단위)
        // 좌,우측 이동버튼
        navigation: {
            nextEl: ".sw_best_next",
            prevEl: ".sw_best_prev",
        },
        // pagination
        pagination: {
            el: ".sw_best_pg",
            clickable: true,
        },

    });
    // md swiper
    new Swiper('.sw_md', {

        // 좌,우측 이동버튼
        navigation: {
            nextEl: ".sw_md_next",
            prevEl: ".sw_md_prev",
        },
        // pagination
        pagination: {
            el: ".sw_md_pg",
            clickable: true,
        },


    });
    // camp swiper
    new Swiper('.sw_camp', {

        // 한 화면에 보여주는 슬라이드 개수
        slidesPerView: 2,
        // slide사이의 여백
        spaceBetween: 6, // 슬라이드 간의 거리(px 단위)
        // 좌,우측 이동버튼
        navigation: {
            nextEl: ".sw_camp_next",
            prevEl: ".sw_camp_prev",
        },
    });
    // 지금 스크롤 여부를 파악하는 것을 저장해 둔다
    var scActive;

    // header에 마우스가 hover하면 header_focus 를 적용한다
    $('.header').mouseenter(function() {
        if (scActive == true) {
            return;
        }
        $('.header').addClass('header_focus');

    });

    // header에 마우스가 out하면 header_focus 를 해제한다
    $('.header').mouseleave(function() {
        if (scActive == true) {
            return;
        }
        $('.header').removeClass('header_focus');

    });
    // 새로고침을 한 경우에 대한 처리
    // 스크롤바가 이동한 거리 체크
    var scY = $(window).scrollTop();

    if (scY > 0) {

        scActive = true;

        var checkH = $('.header').hasClass('header_focus');

        if (checkH != true) {
            $('.header').addClass('header_focus');
        }

    } else {

        scActive = false;

        $('.header').removeClass('header_focus');
    }
    // 스크롤 처리 기능 관련
    $(window).scroll(function() {



        // 스크롤바가 이동한 거리 체크
        var scY = $(window).scrollTop();

        if (scY > 0) {

            scActive = true;

            var checkH = $('.header').hasClass('header_focus');

            if (checkH != true) {
                $('.header').addClass('header_focus');
            }

        } else {

            scActive = false;

            $('.header').removeClass('header_focus');
        }

    });


    // favo 기능
    var favoCount = 0;
    $('.count').text(favoCount);

    var favo = $('.favo');
    $.each(favo, function() {
        $(this).attr('data-favo', 0);

        $(this).click(function() {
            // 현재 data-favo 를 알아낸다.
            var temp = $(this).attr('data-favo');

            if (temp == 0) {
                favoCount++;

                $(this).attr('data-favo', 1);
                $(this).find('img').attr('src', 'images/heart_focus.png');
                window.setTimeout(function() {
                    alert('위시리스트에 추가되었습니다.');
                }, 500);
            } else {
                favoCount--;
                $(this).attr('data-favo', 0);
                $(this).find('img').attr('src', 'images/heart.png');
            }
            // 변화가 일어났으니 내용을 변경한다
            $('.count').text(favoCount);

        });
    });
}