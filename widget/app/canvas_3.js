/**
    白梦超
    2018-02-26
    canvas_3  canvas雪景
 */

define([],function(){
    var canvas_3 = {
        init: function(){
            //获取mycanvas画布
            var can = document.getElementById("mycanvas");
            var ctx = can.getContext("2d");
            //画布宽度
            var wid = window.innerWidth;
            //画布高度
            var hei = window.innerHeight;
            can.width = wid;
            can.height = hei-4;
            //雪花数目
            var snow = 1000;
            //雪花坐标、半径
            var arr = []; //保存各圆坐标及半径
            for (var i = 0; i < snow; i++) {
                arr.push({
                    x: Math.random() * wid,
                    y: Math.random() * hei,
                    r: Math.random() * 3 + 1
                });
            }
            //画雪花
            function DrawSnow() {
                ctx.clearRect(0, 0, wid, hei);
                ctx.fillStyle = "white";
                ctx.beginPath();
                for (var i = 0; i < snow; i++) {
                    var p = arr[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
                }
                ctx.fill();
                SnowFall();
                ctx.closePath();
            }
            //雪花飘落
            function SnowFall() {
                for (var i = 0; i < snow; i++) {
                    var p = arr[i];
                    p.y += Math.random() * 2 + 1;
                    if (p.y > hei) {
                        p.y = 0;
                    }
                    p.x += Math.random() * 2 + 1;
                    if (p.x > wid) {
                        p.x = 0;
                    }
                }
            }
            setInterval(DrawSnow, 50);
        }
    };
    return canvas_3;
});