/*
    白梦超 
    canvas 列表页面动画
    2018-02-24
*/

define(['modules/SwiperBanner'],function($SwiperBanner){
    var canvas = {
        init : function(){
            //banner轮播
            this.BannerSwiper();
        },
        //banner轮播
        BannerSwiper: function(){
            $SwiperBanner.init();
        }
    };

    return canvas;
});