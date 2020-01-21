(function($){

        // 배너 이미지 슬라이드
        var mySwiper = new Swiper ('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                delay: 5000,
            },
        });

        // 영화차트 이미지 슬라이드

        var mySwiper = new Swiper ('.swiper-container2', {
            slidesPerView: 4,
            spaceBetween: 24,
//            mousewheel: {   // 마우스 휠로 스와이프
//                invert: true,
//            },
            keyboard: { // 키보드로 스와이프
                enabled: true,
                onlyInViewport: false,
            },
//            autoplay: { // 6초마다 자동으로 스와이프
//                delay: 6000,
//            },
            breakpoints: {  // 각 breakpoints 마다 스와이프 개수 변경
                600: {
                    slidesPerView: 1.4,
                    spaceBetween: 24
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });

        // 영화차트 탭 메뉴
        var movBtn = $(".movie_title > ul > li");
        var movCont = $(".movie_chart > div");

        movCont.hide().eq(0).show();    // 첫 번째('박스오피스') 부분의 포스터만 출력

        movBtn.click(function(e) {
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            movBtn.removeClass("active");   // 차트 탭 클릭 시 active 변경
            target.addClass("active");
            movCont.css("display", "none"); // 차트 탭 변경
            movCont.eq(index).css("display", "block");
        });

        // 공지사항 탭 메뉴
        var tabMenu = $(".notice");

        // 컨텐츠 내용 숨김
        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("li.active > ul").show();

        function tabList(e){
            e.preventDefault(); // #의 기능 차단(클릭시 페이지 위로 올라가는 것)
            var target = $(this);
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
            //target = li(전체공지 버튼)
            //target.next() = ul(게시글 목록)
            //target.next.parent("li").addClass("active") = 클릭한 버튼(li)에 active클래스 추가
            //target.slblings("li").removeClass("active") = 형제의 li에(클릭하지 않은 버튼) active클래스 제거
            //find("ul").hide() = 클릭하지 않은 버튼의 게시글 숨

        }

        tabMenu.find("ul > li > a").click(tabList).focus(tabList);

})(jQuery);