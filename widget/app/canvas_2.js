/*
    白梦超
    2018-02-24
    canvas 动画 功能展示
*/

define([],function(){
    var canvas_2 = {
        init : function(){
            $(function(){
                var myCanvas=document.getElementById('myCanvas');
                myCanvas.setAttribute('width','1200');
                myCanvas.setAttribute('height','560');
                myCanvas.style.background = '#fff';
                var context=myCanvas.getContext('2d');
                context.lineWidth = 1;
                context.strokeStyle = '#e05255';
                var arr = [
                           {x : 260,y : 92,r1 : 35,r2 : 43,content : '自动登录',content_x : 82,content_y : -40},
                           {x : 600,y : 70,r1 : 23,r2 : 31,content : '海报',content_x : 0,content_y : -44},
                           {x : 786,y : 305,r1 : 14,r2 : 22,content : '积分',content_x : 51,content_y : 15},
                           {x : 635,y : 500,r1 : 20,r2 : 28,content : '微支付',content_x : 0,content_y : 42},
                           {x : 506,y : 416,r1 : 10,r2 : 18,content : '抽奖',content_x : 0,content_y : 30},
                           {x : 370,y : 395,r1 : 14,r2 : 22,content : '众筹',content_x : 0,content_y : 40},
                           {x : 828,y : 93,r1 : 19,r2 : 27,content : '秒杀',content_x : -18,content_y : 45},
                           {x : 998,y : 264,r1 : 29,r2 : 37,content : '一站到底',content_x : 0,content_y : 58},
                           {x : 849,y : 466,r1 : 14,r2 : 22,content : '投票',content_x : 0,content_y : 40},
                           {x : 217,y : 462,r1 : 32,r2 : 40,content : '精益求精',content_x : 0,content_y : 54},
                           {x : 300,y : 262,r1 : 10,r2 : 18,content : '商城',content_x : 48,content_y : 12},
                           {x : 432,y : 120,r1 : 10,r2 : 18,content : '活动',content_x : 44,content_y : 0},
                           {x : 590,y : 280,r1 : 30,r2 : 70,content : '精益求精',content_x : 0,content_y : 0}
                          ];
                //参数说明
                var json = {
                    x : '',			//同心圆x坐标
                    y : '',			//同心圆y坐标
                    r1 : '',		//内圆半径
                    r2 : '',		//外圆半径
                    content : '', 	//内容
                    content_x : '',	//内容相对于原点x轴的偏移量
                    content_y : ''	//内容相对于原点y轴的偏移量
                };
                function drawCircle(json){
                    var count = parseInt(time_num/30);
                    var n=0;
                    var timer = null;
                    timer = setInterval(function(){
                        n++;
                        context.beginPath();
                        context.arc(json.x,json.y,json.r2*n/count,0,2*Math.PI);
                        context.fillStyle = '#e05255';
                        context.fill();
                        context.strokeStyle = '#e05255';
                        context.stroke();
                        context.closePath();
                        context.beginPath();
                        context.arc(json.x,json.y,json.r1*n/count,0,2*Math.PI);
                        context.fillStyle = '#fff';
                        context.fill();
                        context.strokeStyle = '#e05255';
                        context.stroke();
                        context.closePath();
                        if (n==count){
                            clearInterval(timer);
                            context.font = 'normal 20px "微软雅黑"';
                            context.textAlign = 'center';
                            context.textBaseline = "middle";
                            context.strokeStyle = '#686868';
                            context.fillStyle = '#686868';
                            context.fillText(json.content, json.x+json.content_x, json.y+json.content_y);	
                        }
                    },30);		
                }
                
                //线的端点分为以下三组
                var arr_1 = [{x : 590,y : 280,r : 50}];
                var arr_2 = [{x : 260,y : 92,r : 43},{x : 600,y : 70,r : 31},{x : 786,y : 305,r : 22},{x : 635,y : 500,r : 28},{x : 506,y : 416,r : 18},{x : 370,y : 395,r : 22}];
                var arr_3 = [{x : 828,y : 93,r : 27},{x : 998,y : 264,r : 37},{x : 849,y : 466,r : 22},{x : 217,y : 462,r : 40},{x : 300,y : 262,r : 18},{x : 432,y : 120,r : 18}];
                //画一条线所需的时间
                var time_num = 500;
                function down(json1,json2,fn){
                    var line_width = Math.sqrt(Math.pow((json2.x-json1.x),2)+Math.pow((json2.y-json1.y),2));
                    var start_x = parseInt(json1.x + (json2.x -json1.x)*(json1.r/line_width));
                    var start_y = parseInt(json1.y + (json2.y -json1.y)*(json1.r/line_width));
                    var end_x = parseInt(json1.x + (json2.x -json1.x)*(1 - json2.r/line_width));
                    var end_y = parseInt(json1.y + (json2.y -json1.y)*(1 - json2.r/line_width));
                    var disX = end_x - start_x;
                    var disY = end_y - start_y;
                    var count = parseInt(time_num/30);
                    var n=0;
                    var timer = null;
                    timer=setInterval(function(){
                        n++;
                        var curx,cury;
                        if (n!=0){
                             curx = parseInt(disX*(n-1)/count);
                             cury = parseInt(disY*(n-1)/count);
                        }else {
                             curx = 0;
                             cury = 0;
                        }
                        var curX = parseInt(disX*n/count);
                        var curY = parseInt(disY*n/count);
                        context.beginPath();
                        context.moveTo(start_x+curx,start_y+cury);
                        context.lineTo(start_x+curX,start_y+curY);
                        context.strokeStyle = 'rgb(224,82,85)';
                        context.stroke();
                        fn && fn();
                        context.closePath();
                        if (n==count){
                            context.beginPath();
                            context.moveTo(start_x,start_y);
                            context.lineTo(end_x,end_y);
                            context.strokeStyle = 'rgb(224,82,85)';
                            context.stroke();
                            fn&&fn();
                            context.closePath();
                            clearInterval(timer);
                        }
                    },30)
                }
                setTimeout(function(){
                    for (var i=0; i<arr_2.length; i++){
                        down(arr_1[0],arr_2[i])
                    }
                },time_num)
                setTimeout(function(){
                    drawCircle(arr[0]);
                    drawCircle(arr[1]);
                    drawCircle(arr[2]);
                    drawCircle(arr[3]);
                    drawCircle(arr[4]);
                    drawCircle(arr[5]);
                },time_num*3);
                setTimeout(function(){
                    down(arr_2[0],arr_2[1])
                    down(arr_2[1],arr_2[2])
                    down(arr_2[1],arr_3[0])
                    down(arr_2[2],arr_3[1])
                    down(arr_2[2],arr_3[2])
                    down(arr_2[2],arr_2[3])
                    down(arr_2[3],arr_2[4])
                    down(arr_2[3],arr_3[3])
                    down(arr_2[4],arr_2[5])
                    down(arr_2[5],arr_3[3])
                    down(arr_2[5],arr_3[4])
                    down(arr_2[5],arr_3[5])
                    down(arr_2[0],arr_3[3])
                    down(arr_3[4],arr_2[0])
                    down(arr_2[1],arr_3[4])
                    down(arr_2[3],arr_3[2])
                },time_num*5);
                setTimeout(function(){
                    drawCircle(arr[6]);
                    drawCircle(arr[7]);
                    drawCircle(arr[8]);
                    drawCircle(arr[9]);
                    drawCircle(arr[10]);
                    drawCircle(arr[11]);
                },time_num*7);
                setTimeout(function(){
                    down(arr_3[0],arr_3[1])
                    down(arr_3[1],arr_3[2])
                    down(arr_3[3],arr_3[4])
                },time_num*9);
                
            });
        }
    };
    return canvas_2;
});