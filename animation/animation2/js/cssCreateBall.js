function cssCreateBall() {
    // opt = {
    //        targetBox: 'boxOut',   目标元素外包盒子id，必须是id
    //        obj: 9|| [1,2,3,4,5,6,8],         球体元素分两类，数字 - 球体总行数每行比上一行多两个；数组-分别设置每一行个数
    // }
    
    //旋转的盒子，下面会定义
    //this.oBox

    this.init = function (opt) {
        this.opt = opt;
        //外包盒子
        this.outBox = document.getElementById(this.opt.targetBox);

        this.addElements(opt.obj);

        this.createBall()

        this.listenMouseMove()
    }

    //创建元素方法  添加元素多行，每行比上一行多两个,一半行数+1;可以传一个数组，自定义每行行个数，
    this.addElements = function (obj) {
        this.oBox = document.createElement('div');
        var oBox = this.oBox
        oBox.style.width = '100%';
        oBox.style.height = '100%';
        this.outBox.appendChild(oBox);
        if (typeof obj == 'number') {
            for (var j = 0; j < obj; j++) {
                if (j < obj / 3) {
                    for (var i = 0; i < 2 * j + 1; i++) {
                        var odiv = document.createElement('div');
                        odiv.setAttribute('line', j + 1)
                        oBox.appendChild(odiv);
                    }
                } else {
                    for (var i = 0; i < 2 * (obj - j - 1) + 1; i++) {
                        var odiv = document.createElement('div');
                        odiv.setAttribute('line', j + 1)
                        oBox.appendChild(odiv);
                    }
                }
            }
        } else {
            for (var j = 0; j < obj.length; j++) {
                for (var i = 0; i < obj[j]; i++) {
                    var odiv = document.createElement('div');
                    odiv.setAttribute('line', j + 1)
                    oBox.appendChild(odiv);
                }
            }
        }

    }

    //生成球体
    this.createBall = function () {
        var aDiv = this.oBox.getElementsByTagName('div');
        var maxLine = aDiv[aDiv.length - 1].getAttribute('line');
        var j = 0;

        //球体
        for (; j < maxLine; j++) {
            var linDiv = [];
            for (var m = 0; m < aDiv.length; m++) {
                if (aDiv[m].getAttribute('line') == (j +
                        1)) {
                    linDiv.push(aDiv[m]);
                }
            }
            var i = 0;
            var degX = 180 / (maxLine - 1) * (j - (maxLine - 1) / 2);
            var degY = 360 /
                linDiv.length;
            for (; i < linDiv.length; i++) {
                linDiv[i].style.transition = "all " + (j * 5 + i) + "s liner";
                linDiv[i].style.transform = 'rotateY(' + degY * i + 'deg) rotateX(' +
                    degX + 'deg) translateZ(200px)';

            }
        }
    }

    //监听页面滑动
    this.listenMouseMove = function () {
        var oBox = this.oBox;
        var x, y, startX, startY, moveX, moveY;
        startX = 10;
        startY = 10;
        this.outBox.addEventListener('mousedown', function (e) {
            x = e.pageX;
            y = e.pageY;

            downStartX = startX;
            downStartY = startY
            document.addEventListener('mousemove', fn1, false)
            document.addEventListener('mouseup', fn2, false)
        }, false)

        var fn2 = function () {
            document.removeEventListener('mousemove', fn1)
            document.removeEventListener('mouseup', fn2)
        }
        var fn1 = function (e) {
            moveX = e.pageX;
            moveY = e.pageY;

            startX = downStartX - (moveY - y);
            startY = downStartY + (moveX - x);

            //oBox.style.transform = ' rotateY(' + (startY + moveX - x) + 'deg)';
            oBox.style.transform = 'rotateX(' + startX + 'deg) rotateY(' + startY + 'deg)';

        }
    }
}