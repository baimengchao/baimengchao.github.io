/*
    白梦超 
    首页 js
    2018-02-07
*/

define([],function(){
    var UserControl = {
        init : function(){
            //导航动画
            this.NavAnimation();

            $('.li_click').click(function(){
                if ($(this).attr('target') == '_blank'){
                    window.open($(this).attr('url'));
                }else {
                    window.location.href = $(this).attr('url');
                }
               
            });

        },
        //导航动画
        NavAnimation: function (){
            var aLi = $('.html_nav ul.nav li');
            var oLi = $('.html_nav ul.nav li.bottom_line');
            //li宽度
            var li_width = oLi.width();
            //计算初始位置
            var li_on_index = 0;
            for (var i=0; i<aLi.length; i++){
                if (aLi.eq(i).hasClass('on'))
                    li_on_index = i;
            }
            oLi.css('left',li_width*li_on_index+'px');
            aLi.hover(function(){
                if ($(this).index() != (aLi.length-1)){
                    var index = $(this).index();
                    oLi.css('left',li_width*index+'px');
                }                
            },function(){
                oLi.css('left',li_width*li_on_index+'px');
            });
        }
    };
    
    UserControl.init();
});