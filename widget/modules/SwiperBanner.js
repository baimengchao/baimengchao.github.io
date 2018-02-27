/*
    白梦超
    2018-02-24
    banner 轮播二次封装
*/

define(['lib/swiper.min'],function($swiper){
    var SwiperBanner ={
        init: function(){
            //banner轮播
            this.BannerSwiper();
        },
        //banner轮播
        BannerSwiper: function(){
            var mySwiper = new $swiper ('.swiper-container', {
                loop: true,
                autoplay: true,
                delay: 3000,
                speed: 500,
                pagination: {
                    el: '.swiper-pagination',
                    hideOnClick: true
                  },
                  
              });
        }
    };
    return SwiperBanner;
});