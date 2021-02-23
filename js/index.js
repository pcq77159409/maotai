$(function() {
    // let tip = new LandscapeTip(); //插件的使用
    //原生js方式
    function rote() {
        if (window.orientation == 180 || window.orientation == 0) {
            console.log('竖屏');
            $('.land').fadeOut();
            $('.content').fadeIn();

        }
        if (window.orientation == 90 || window.orientation == -90) {
            console.log('横屏');
            $('.land').fadeIn();
            $('.content').fadeOut();
        }
    }
    rote();
    window.addEventListener('orientationchange', function() {
        rote();
    });
    //图片预加载
    var manifest = [
        'img/fx.jpg',
        'img/lad_bg.jpg',
        'img/p1_bg.jpg',
        'img/p2_Bg.jpg',
        'img/p3_bg.jpg',
        'img/p5_1bg.jpg',
        'img/p5_bg.jpg',
        'img/p6_bg.jpg',
        'img/p7_bg.jpg',
        'img/hj_1.png',
        'img/h_1.png',
        'img/h_2.png',
        'img/h_3.png',
        'img/h_4.png',
        'img/lad1_1.png',
        'img/lad1_2.png',
        'img/lad1_3.png',
        'img/lad1_4.png',
        'img/lad1_5.png',
        'img/lad_1.png',
        'img/lad_2.png',
        'img/lad_3.png',
        'img/lad_4.png',
        'img/lad_5.png',
        'img/muse.png',
        'img/p1_1.png',
        'img/p1_2.png',
        'img/p1_3.png',
        'img/p1_4.png',
        'img/p1_4_1.png',
        'img/p1_5.png',
        'img/p1_6.png',
        'img/p1_7.png',
        'img/p1_8.png',
        'img/p1_9.png',
        'img/p2_1.png',
        'img/p2_2.png',
        'img/p2_3.png',
        'img/p2_4.png',
        'img/p2_5.png',
        'img/p3_1.png',
        'img/p3_10.png',
        'img/p3_11.png',
        'img/p3_12.png',
        'img/p3_2.png',
        'img/p3_3.png',
        'img/p3_3_1.png',
        'img/p3_4.png',
        'img/p3_5.png',
        'img/p3_6.png',
        'img/p3_7.png',
        'img/p3_8.png',
        'img/p3_9.png',
        'img/p4_1.png',
        'img/p4_10.png',
        'img/p4_11.png',
        'img/p4_12.png',
        'img/p4_13.png',
        'img/p4_14.png',
        'img/p4_15.png',
        'img/p4_16.png',
        'img/p4_17.png',
        'img/p4_2.png',
        'img/p4_3.png',
        'img/p4_4.png',
        'img/p4_5.png',
        'img/p4_5_1.png',
        'img/p4_6.png',
        'img/p4_7.png',
        'img/p4_8.png',
        'img/p4_9.png',
        'img/p4_9_1.png',
        'img/p4_bg.png',
        'img/p5_1.png',
        'img/p5_10.png',
        'img/p5_11.png',
        'img/p5_11_2.png',
        'img/p5_12.png',
        'img/p5_13.png',
        'img/p5_14.png',
        'img/p5_15.png',
        'img/p5_16.png',
        'img/p5_17.png',
        'img/p5_18.png',
        'img/p5_2.png',
        'img/p5_3.png',
        'img/p5_4.png',
        'img/p5_5.png',
        'img/p5_6.png',
        'img/p5_7.png',
        'img/p5_8.png',
        'img/p5_9.png',
        'img/p6_1.png',
        'img/p6_10.png',
        'img/p6_2.png',
        'img/p6_3.png',
        'img/p6_4.png',
        'img/p6_5.png',
        'img/p6_6.png',
        'img/p6_7.png',
        'img/p6_8.png',
        'img/p6_9.png',
        'img/p7_1.png',
        'img/p7_10.png',
        'img/p7_11.png',
        'img/p7_2.png',
        'img/p7_3.png',
        'img/p7_4.png',
        'img/p7_5.png',
        'img/p7_6.png',
        'img/p7_7.png',
        'img/p7_8.png',
        'img/p7_9.png',
        'img/p8_1.png',
        'img/p8_2.png',
    ];
    $.preload(manifest, {
        order: false,
        each: function(count) {
            // loading 进度条
            var precent = Math.round((count + 1) / manifest.length * 100) + "%";
            $('.lad-span span').css('width', precent);
            if (precent == '1%') {
                $('.lad1-1').css('animation', 'move_lad 1.5s  forwards');
            }
            if (precent == '20%') {
                $('.lad1-2').css('animation', 'move_lad 1.5s  forwards');
            }
            if (precent == '40%') {
                $('.lad1-3').css('animation', 'move_lad 1.5s  forwards');
            }
            if (precent == '60%') {
                $('.lad1-4').css('animation', 'move_lad 1.5s  forwards');
            }
            if (precent == '80%') {
                $('.lad1-5').css('animation', 'move_lad 1.5s  forwards');
            }
        },
        end: function() {
            // console.log('加载完成');
            $('.loading').fadeOut();
            $('.open').fadeIn();
            setTimeout(function() { //一秒后放大图片
                $('.open').addClass('scale');
                $('.p1-bg').addClass('p1-bg-ft');
                setTimeout(function() { //过渡动画要三秒
                    $('.yao').fadeIn();
                    $('.p1-1').fadeOut();
                    $('.open').on('click', function() { //点击酒触发动画
                        $('.open').off('click'); //点击后把自身的点击事件移除
                        $(this).animate({
                            top: '-40vh'
                        }, 3000);
                        $('.liquor').animate({
                            top: '44vh'
                        }, 3000);
                        $('.p1-2').addClass('tro');
                        setTimeout(function() {
                            $('.p1-2').hide();
                            $('.p1-5').show();
                        }, 1000);
                        setTimeout(function() {
                            $('.p1-9').fadeIn();
                            $('.p1-5').hide();
                            $('.p1-6').show();
                            setTimeout(function() {
                                $('.p1-6').hide();
                                $('.p1-7').show();
                            }, 300);
                            setTimeout(function() {
                                $('.p1-7').hide();
                                $('.p1-8').show();
                                setTimeout(function() {
                                    $('.open').fadeOut();
                                    $('.make').fadeIn();
                                }, 2500);
                            }, 600);
                        }, 3000);
                    });
                }, 3000);
            }, 1000);
        }
    });

    $('.m-btn').on('click', function() { //进入到第一步
        $('.make').fadeOut();
        $('.make-one').fadeIn();
        $('.make-one').addClass('animate');
        new OneTouch();
    });
    //拖拽一
    class OneTouch {
        constructor() {
            this.plie = document.querySelector('.p3-9');
            this.moc = document.querySelector('.m-o-c');
            this.touchStart = {
                x: this.plie.offsetLeft,
                y: this.plie.offsetTop
            };
            this.mouseStart = {
                x: null,
                y: null
            }
            this.flag = true;
            this.num = 0;
            this.init();
        };
        init() {
            this.plie.addEventListener('touchstart', this.start.bind(this));
            this.plie.addEventListener('touchmove', this.move.bind(this));
            this.plie.addEventListener('touchend', this.end.bind(this));
        };
        start(e) {
            this.mouseStart.x = e.targetTouches[0].pageX;
            this.mouseStart.y = e.targetTouches[0].pageY;
        };
        move(e) {
            let maxX = document.body.offsetWidth - this.plie.offsetWidth;
            let maxY = document.body.offsetHeight - this.plie.offsetHeight;
            this.moveX = e.targetTouches[0].pageY - this.mouseStart.y + this.touchStart.x;
            this.moveY = -(e.targetTouches[0].pageX - this.mouseStart.x) + this.touchStart.y;
            if (this.moveX <= -20) {
                this.moveX = -20;
            } else if (this.moveX >= maxY) {
                this.moveX = maxY;
            }
            if (this.moveY <= -20) {
                this.moveY = -20;
            } else if (this.moveY >= maxX + 40) {
                this.moveY = maxX + 40;
            }
            this.plie.style.left = this.moveX + 'px';
            this.plie.style.top = this.moveY + 'px';
        };
        end() {
            this.plie.style.left = this.touchStart.x + 'px';
            this.plie.style.top = this.touchStart.y + 'px';
            let mlMin = this.moc.offsetLeft - this.plie.offsetWidth;
            let mlMax = this.moc.offsetLeft + this.moc.offsetWidth;

            let mtMin = this.moc.offsetTop - this.plie.offsetHeight;
            let mtMax = this.moc.offsetTop + this.moc.offsetHeight;
            console.log(this.moveX);
            console.log(this.moveY);
            console.log(mlMax);
            console.log(mlMin);
            console.log(mtMax);
            console.log(mtMin);
            if (this.moveX <= mlMax && this.moveX >= mlMin) {
                if (this.moveY <= mtMax && this.moveY >= mtMin) {
                    $('.hand').fadeOut();
                    $('.plie').fadeOut();
                    $('.p3-9').fadeOut();
                    $('.dian').fadeIn();
                    $('.p3-11').hide();
                    $('.p3-12').show();
                    $(document).on('click', () => {
                        if (this.flag == true) {
                            this.num++;
                            this.flag = false;
                            setTimeout(() => {
                                this.flag = true;
                                $('.p3-3').css('animation', 'none');
                                $('.p3-3-1').css('animation', 'none');
                            }, 1000);
                            if (this.num == 1) {
                                $('.lad-s').fadeIn();
                            } else if (this.num == 5) {
                                $('.lad-b').fadeIn();
                                $('.lad-s').css('background-position', '0 0');
                                $(document).off('click');
                                $('.dian').fadeOut();
                                $('.m-o-btn').css('animation', 'r 1s infinite alternate');
                                $('.m-o-btn').on('click', function() {
                                    $('.make-one').fadeOut();
                                    $('.make-two').fadeIn();
                                    new TwoTouch();
                                });
                            } else {
                                $('.lad-s').css('background-position', '-' + this.num * 18 + 'px 0');
                            }
                            $('.p3-5').animate({
                                height: this.num * 20 + '%'
                            });
                            $('.p3-3').css('animation', 'sx .5s');
                            $('.p3-3-1').css('animation', 'sx .5s .5s');
                        }
                    });
                }
            }
        }
    };
    //拖拽二
    class TwoTouch {
        constructor() {
            this.plie = document.querySelector('.p4-9-1');
            this.moc = document.querySelector('.m-t-b');
            this.touchStart = {
                x: this.plie.offsetLeft,
                y: this.plie.offsetTop
            };
            this.mouseStart = {
                x: null,
                y: null
            }
            this.flag = true;
            this.num = 0;
            this.init();
        };
        init() {
            this.plie.addEventListener('touchstart', this.start.bind(this));
            this.plie.addEventListener('touchmove', this.move.bind(this));
            this.plie.addEventListener('touchend', this.end.bind(this));
        };
        start(e) {
            this.mouseStart.x = e.targetTouches[0].pageX;
            this.mouseStart.y = e.targetTouches[0].pageY;
        };
        move(e) {
            let maxX = document.body.offsetWidth - this.plie.offsetWidth;
            let maxY = document.body.offsetHeight - this.plie.offsetHeight;
            this.moveX = e.targetTouches[0].pageY - this.mouseStart.y + this.touchStart.x;
            this.moveY = -(e.targetTouches[0].pageX - this.mouseStart.x) + this.touchStart.y;
            if (this.moveX <= -20) {
                this.moveX = -20;
            } else if (this.moveX >= maxY) {
                this.moveX = maxY;
            }
            if (this.moveY <= -20) {
                this.moveY = -20;
            } else if (this.moveY >= maxX + 40) {
                this.moveY = maxX + 40;
            }
            this.plie.style.left = this.moveX + 'px';
            this.plie.style.top = this.moveY + 'px';
        };
        end() {
            this.plie.style.left = this.touchStart.x + 'px';
            this.plie.style.top = this.touchStart.y + 'px';
            let mlMin = this.moc.offsetLeft - this.plie.offsetWidth;
            let mlMax = this.moc.offsetLeft + this.moc.offsetWidth;

            let mtMin = this.moc.offsetTop - this.plie.offsetHeight;
            let mtMax = this.moc.offsetTop + this.moc.offsetHeight;
            if (this.moveX <= mlMax && this.moveX >= mlMin) {
                if (this.moveY <= mtMax && this.moveY >= mtMin) {
                    $('.p4-5').hide();
                    $('.p4-12').hide();
                    $('.p4-9-1').hide();
                    $('.hand1').hide();
                    $('.p4-6').show();
                    $('.m-t-bj').show();
                    $('.hand2').show();
                    $('.m-t-b').on('click', function() {
                        $('.p4-6').hide();
                        $('.hand2').hide();
                        $(this).addClass('trans');
                        setTimeout(function() {
                            $('.m-t-b').hide();
                            $('.m-t-zl .p4-13').hide();
                            $('.m-t-zl .p4-17').show();
                            $('.m-t-zy').fadeIn();
                            $('.p4-14').addClass('p4-14-tr');
                            $('.make-two .m-t-btn').css('animation', 'r 1s infinite alternate');
                            $('.m-t-btn').on('click', function() {
                                $('.make-two').fadeOut();
                                $('.make-three').fadeIn();


                                $('.m-t-btn').on('click', function() {
                                    $('.make-three').hide();
                                    $('.p7').show();
                                    $('.p7-10').on('click', function() {
                                        $('.p7').fadeOut();
                                        $('.p6').fadeIn();
                                    });
                                });
                            });
                        }, 1900);
                    });
                }
            }
        }
    };


});