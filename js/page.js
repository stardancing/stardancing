/*导航点击切换
 ------------------------------------------------*/
    $('.header_nav li a').hover(function(){
        $(this).css('color','#88b929');
    },function(){
        $(this).css('color','#666');
    })

/*教师简介
 ------------------------------------------------*/
function introduceSlideUp(){
    $('.intr_con li').hover(function(){                        
      $(this).children('.intr_con_box').stop().animate({'top':'-115px'},500);
      $(this).children('.intr_con_box').css({'background':'#7ba725'});
      $(this).find('h2,p').css('color','#fff');
    },function(){                       
      $(this).children('.intr_con_box').stop().animate({'top':'0px'},500);
      $(this).children('.intr_con_box').css({'background':'#fff'});
      $(this).find('h2,p').css('color','#8d8d8d');
    })
}

/*培训视频
 ------------------------------------------------*/
function videoHover(){
    $('.tog_box01 li').hover(function(){
        $(this).children('.play_but').css({'z-index':'999'});
    });
}

/*活动视频鼠标移入效果
 ------------------------------------------------*/
function activeVideo(){
    $('.activity_box li').hover(function(){
        $(this).children('.play_but').stop(true,true).show();
    },function(){
        $(this).siblings('li').children('.play_but').stop(true,true).hide();
    })
}

/*bright.html 今日头条切换
 ------------------------------------------------*/
function newsListBox(){
    //初始化全局变量
    var i = 0;
    //var timer03 = null;
    var oDlLen = $('.news_list_box dl').length;
    //定时切换的执行函数
    function timeTabFun(){
        i++;
        //判断i的值
        if( i >= oDlLen  ){
            i = 0;
        }
        //执行效果
        $('.news_list_box dl').eq(i).stop().show().siblings('dl').stop().hide();
        $('.scroll_dot li').eq(i).addClass('li_course').siblings('li').removeClass('li_course');
    }
    //定时器
    timer03 = setInterval(function(){
        timeTabFun();
    },1500);

    //鼠标移入到清除定时器
    $('.news_list').hover(function(){
        clearInterval(timer03);
        $('.scroll_dot li').click(function(){
            var ind = $(this).index();
            $(this).addClass('li_course').siblings('li').removeClass('li_course');
            $('.news_list_box dl').eq(ind).stop().show().siblings('dl').stop().hide();
        })
    },function(){
        timer03 = setInterval(function(){
            timeTabFun();
        },1500);
    });
}

/*bright01.html 新聞左右切換功能
 ------------------------------------------------*/
$(function(){
    var j = 0;
    var objLi = $('.scroll_ul li:gt(6)').clone();
    var oliLen = $('.scroll_ul li').length;

    $('.tib_l img,.tib_r img').click(function(){
        ++j;
        if( j >= oliLen  ){
            j = 0;
            $('.scroll_ul').css({'left':'0px'});
        }
       $('.scroll_ul').append(objLi);
        $('.scroll_ul li').show();
        $('.scroll_ul').stop().animate({'left':-j*150+'px'});
    })
})


/*contact.html  切换百度地图和校区名称
------------------------------------------------*/
function tabBaiduMap(){
    $('.tabScroll').click(function(){
        $('.tab_map01,.tab_map02,.campus01,.campus02').toggle();
    });
    $('.map_l span.fr').click(function(){
        $('.map_r div').toggle();
    });
    /*首页地图切换
     ------------------------------------------------*/
    function indexMapToggle(){
        $('.indexMapToggle').click(function(){
            $('.site01,.site02').toggle();
        });
    }

}

/*course01.html  相关视频切换
 ------------------------------------------------*/
$(function(){
    var i = 0;
    var obj = $('.curr_box02 ul li:gt(3)').clone();
    var liLen = $('.curr_box02 ul li').length;

    $('.dot_arr_l,.dot_arr_r').click(function(){
        ++i;
        if( i >= liLen  ){
            i = 0;
            $('.curr_box02 ul').css({'left':'0px'});
        }
        $('.curr_box02 ul').append(obj);
        $('.curr_box02 ul').stop().animate({'left':-i*252+'px'});
    })
})

/*底部版权鼠标点击时切换颜色
 -----------------------------------------------*/
function copyColorTab(){
    $('.copyright a').click(function(){
        $(this).addClass('course').siblings().removeClass('course');
    });
}

$(document).ready(function(){

    //navaTabColor();

    copyColorTab();

    activeVideo();

    newsListBox();

    introduceSlideUp();

    videoHover();

   // resultsTitleTab();
    
    tabBaiduMap();

});
