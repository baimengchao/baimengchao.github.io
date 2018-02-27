/*
    白梦超
    2018-02-24
    canvas 动画  公司结构
*/

define([],function(){
    var canvas_1 = {
        init: function(){
            $(function(){
                var myCanvas=document.getElementById('myCanvas');
                myCanvas.setAttribute('width','1200');
                myCanvas.setAttribute('height','700');
                myCanvas.style.background = '#fff';
                var context=myCanvas.getContext('2d');
                context.lineWidth = 1;
                var arr = [{x : 600,y : 50,width : 120,height : 42,radius : 7,content : '总经理'},
                           {x : 726,y : 130,width : 150,height : 42,radius : 9,content : '总经理助理'},
                           {x : 150,y : 240,width : 150,height : 42,radius : 9,content : '市场营销部'},
                           {x : 370,y : 240,width : 120,height : 42,radius : 9,content : '技术部'},
                           {x : 600,y : 240,width : 120,height : 42,radius : 7,content : '设计部'},
                           {x : 826,y : 240,width : 130,height : 42,radius : 8,content : '管理中心'},
                           {x : 1051,y : 240,width : 130,height : 42,radius : 8,content : '财务中心'},
                           {x : 81,y : 425,width : 120,height : 42,radius : 7,content : '渠道部'},
                           {x : 230,y : 425,width : 120,height : 42,radius : 7,content : '直销部'},
                           {x : 307,y : 345,width : 120,height : 42,radius : 7,content : '研发部'},
                           {x : 455,y : 345,width : 120,height : 42,radius : 7,content : '开发部'},
                           {x : 600,y : 345,width : 120,height : 42,radius : 7,content : 'UI设计部'},
                           {x : 752,y : 425,width : 120,height : 42,radius : 7,content : '人事部'},
                           {x : 899,y : 425,width : 120,height : 42,radius : 7,content : '行政部'},
                           {x : 1051,y : 345,width : 120,height : 42,radius : 7,content : '财务部'}
                        ]
                //线的端点分为七层
                var arr_1 = [{x : 600,y : 50}];
                var arr_2 = [{x : 600,y : 130},{x : 726,y : 130}];
                var arr_3 = [{x : 150,y : 180},{x : 370,y : 180},{x : 600,y : 180},{x : 826,y : 180},{x : 1051,y : 180}];
                var arr_4 = [{x : 150,y : 240},{x : 370,y : 240},{x : 600,y : 240},{x : 826,y : 240},{x : 1051,y : 240}];
                var arr_5 = [{x : 307,y : 300},{x : 370,y : 300},{x : 455,y : 300}];
                var arr_6 = [{x : 307,y : 345},{x : 455,y : 345},{x : 600,y : 345},{x : 1051,y : 345}];
                var arr_7 = [{x : 81,y : 355},{x : 150,y : 355},{x : 230,y : 355},{x : 752,y : 355},{x : 826,y : 355},{x : 899,y : 355}];
                var arr_8 = [{x : 81,y : 425},{x : 230,y : 425},{x : 752,y : 425},{x : 899,y : 425}];
                //参数说明
                /*var json = {
                    x : 540,				//矩形中心位置x坐标
                    y : 50,					//矩形中心位置y坐标
                    width : 120,			//矩形的宽度
                    height : 42,			//矩形的高度
                    radius : 7,				//矩形圆角半径
                    content : '总经理'		//矩形里面的文字内容
                }*/
                function rectangle(json){
                    context.beginPath();
                    context.moveTo(json.x-json.width/2+json.radius,json.y-json.height/2);
                    context.lineTo(json.x+json.width/2-json.radius,json.y-json.height/2);
                    context.arc(json.x+json.width/2-json.radius, json.y-json.height/2+json.radius, json.radius, Math.PI/2*3, 0);
                    context.lineTo(json.x+json.width/2,json.y+json.height/2-json.radius);
                    context.arc(json.x+json.width/2-json.radius, json.y+json.height/2-json.radius, json.radius, 0, Math.PI/2);
                    context.lineTo(json.x-json.width/2+json.radius,json.y+json.height/2);
                    context.arc(json.x-json.width/2+json.radius, json.y+json.height/2-json.radius, json.radius, Math.PI/2, Math.PI);
                    context.lineTo(json.x-json.width/2,json.y-json.height/2+json.radius);
                    context.arc(json.x-json.width/2+json.radius, json.y-json.height/2+json.radius, json.radius, Math.PI, Math.PI/2*3);
                    context.strokeStyle = '#e05255';
                    context.stroke();
                    context.fillStyle = '#e05255';
                    context.fill();
                    context.closePath();
                    context.font = 'normal 21px "微软雅黑"';
                    context.textAlign = 'center';
                    context.textBaseline = "middle";
                    context.strokeStyle = '#fff';
                    context.fillStyle = '#fff';
                    context.fillText(json.content, json.x, json.y);	
                }
                var time_num = 500;
                //划线方法
                function down(json1,json2,fn){
                    var disX = json2.x - json1.x;
                    var disY = json2.y - json1.y;
                    var count = parseInt(time_num/30);
                    var n=0;
                    var timer = null;
                    timer=setInterval(function(){
                        n++;
                        var curX = parseInt(disX*n/count);
                        var curY = parseInt(disY*n/count);
                        //context.clearRect(json1.x-1,json1.y,json2.x+1,json2.y);
                        context.beginPath();
                        context.moveTo(json1.x,json1.y);
                        context.lineTo(json1.x+curX,json1.y+curY);
                        context.strokeStyle = 'rgb(224,82,85)';
                        context.stroke();
                        fn&&fn();
                        context.closePath();
                        if (n==count){
                            context.beginPath();
                            context.moveTo(json1.x,json1.y);
                            context.lineTo(json1.x+curX,json1.y+curY);
                            context.strokeStyle = 'rgb(224,82,85)';
                            context.stroke();
                            fn&&fn();
                            context.closePath();
                            clearInterval(timer);
                        }
                    },30)
                }
                var _i=1;
                rectangle(arr[0]);
                down(arr_1[0],arr_2[0],function(){
                    rectangle(arr[0]);
                })
                setTimeout(function(){
                    down(arr_2[0],arr_2[1])
                },time_num)
                setTimeout(function(){
                    rectangle(arr[1]);
                    down(arr_2[0],arr_3[2])
                },time_num*2)
                setTimeout(function(){
                    down(arr_3[2],arr_3[0])
                    down(arr_3[2],arr_3[4])
                },time_num*3)
                setTimeout(function(){
                    down(arr_3[0],arr_4[0])
                    down(arr_3[1],arr_4[1])
                    down(arr_3[2],arr_4[2])
                    down(arr_3[3],arr_4[3])
                    down(arr_3[4],arr_4[4])
                },time_num*4)
                
                setTimeout(function(){
                    down(arr_4[0],arr_7[1],function(){
                        rectangle(arr[2]);
                    })
                    down(arr_4[1],arr_5[1],function(){
                        rectangle(arr[3]);
                    })
                    down(arr_4[2],arr_6[2],function(){
                        rectangle(arr[4]);
                    })
                    down(arr_4[3],arr_7[4],function(){
                        rectangle(arr[5]);
                    })
                    down(arr_4[4],arr_6[3],function(){
                        rectangle(arr[6]);
                    })
                },time_num*5)
                setTimeout(function(){
                    down(arr_7[1],arr_7[0])
                    down(arr_7[1],arr_7[2])
                    down(arr_5[1],arr_5[0])
                    down(arr_5[1],arr_5[2])
                    down(arr_7[4],arr_7[3])
                    down(arr_7[4],arr_7[5])
                    rectangle(arr[11]);
                    rectangle(arr[14]);
                },time_num*6)
                setTimeout(function(){
                    down(arr_7[0],arr_8[0])
                    down(arr_7[2],arr_8[1])
                    down(arr_5[0],arr_6[0])
                    down(arr_5[2],arr_6[1])
                    down(arr_7[3],arr_8[2])
                    down(arr_7[5],arr_8[3])
                },time_num*7)
                setTimeout(function(){
                    rectangle(arr[7]);
                    rectangle(arr[8]);
                    rectangle(arr[9]);
                    rectangle(arr[10]);
                    rectangle(arr[12]);
                    rectangle(arr[13]);
                },time_num*8)
            })
        }
    };
    return canvas_1;
});