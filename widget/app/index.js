/*
    白梦超 
    首页 js
    2018-02-07
*/

define(['modules/SwiperBanner'],function($SwiperBanner){
    var index = {
        init : function(){
            //banner轮播
            this.BannerSwiper();
        },
        //banner轮播
        BannerSwiper: function(){
            $SwiperBanner.init();
        }
    };

    return index;
});