/*轮播banner
 ---------------------------------------*/
$(function(){
    var i = 0;

    var timer03 = setInterval(function(){
        i++;
        if( i >= $('.banner_img li').length ){
            i = 0;
        }
        $('.banner_img li').eq(i).stop().show().siblings().stop().hide();
        $('.dot li').eq(i).addClass('dot_hover').siblings('li').removeClass('dot_hover');

    },2000);
    clearInterval( timer03 );

    $('.banner_img li,.dot li').hover(function(){
        clearInterval( timer03 );

    },function(){
         timer03 = setInterval(function(){
            i++;
            if( i >= $('.banner_img li').length ){
                i = 0;
            }
            $('.banner_img li').eq(i).stop().show().siblings().stop().hide();
            $('.dot li').eq(i).addClass('dot_hover').siblings('li').removeClass('dot_hover');
        },2000)
    })

    $('.dot li').click(function(){
        var inds = $(this).index();
        $(this).addClass('dot_hover').siblings('li').removeClass('dot_hover');
        $('.banner_img li').eq(inds).stop().show().siblings().stop().hide();
    })
})

/*首页师资力量下下滑效果
---------------------------------------*/
function teacherSlideImg(par01,par02,par03){
    $('.'+par01).hover(function(){
        $('.'+par01).children('.'+par03).stop().slideToggle();

    })
}

/*培训视频切换
 ---------------------------------------*/
function trainVideoTag(){
    $('.video_box01').click(function(){
        $(this).addClass('box01_bg').css({'color':'#fff','height':'42px','border':'0'}).siblings().removeClass('box01_bg border0').css('height','34px');
        $('.vedio_toggle .tog_box01').show().siblings().hide();
    });
    $('.video_box02').click(function(){
        $(this).addClass('box01_bg border0').css('height','42px').siblings().removeClass('box01_bg border0').css({'color':'#9d9d9d','height':'34px','border':'1px solid #9d9d9d','border-radius':'2px'});
        $('.vedio_toggle .tog_box02').show().siblings().hide();
    });
}

/*培训课程切换
 ---------------------------------------*/
function trainVideoTag1(){
    $('.video_box03').click(function(){
        $(this).addClass('box01_bg').css({'color':'#fff','height':'42px','border':'0'}).siblings().removeClass('box01_bg border0').css('height','34px');
        $('.vedio_toggle .tog_box03').show().siblings().hide();
    });
    $('.video_box04').click(function(){
        $(this).addClass('box01_bg border0').css('height','42px').siblings().removeClass('box01_bg border0').css({'color':'#9d9d9d','height':'34px','border':'1px solid #9d9d9d','border-radius':'2px'});
        $(this).removeAttr('style');
        $(this).css('height','42px');
        $('.vedio_toggle .tog_box04').show().siblings().hide();
    });
    $('.video_box05').click(function(){
      	$(this).addClass('box01_bg border0').css('height','42px').siblings().removeClass('box01_bg border0').css({'color':'#9d9d9d','height':'34px','border':'1px solid #9d9d9d','border-radius':'2px'});
      	$(this).removeAttr('style');
      	$(this).css('height','42px');
        $('.vedio_toggle .tog_box05').show().siblings().hide();
    });
    $('.video_box06').click(function(){
        $(this).addClass('box01_bg border0').css('height','42px').siblings().removeClass('box01_bg border0').css({'color':'#9d9d9d','height':'34px','border':'1px solid #9d9d9d','border-radius':'2px'});
        $(this).removeAttr('style');
        $(this).css('height','42px');
        $('.vedio_toggle .tog_box06').show().siblings().hide();
    });
}

/*师资力量时间及内容切换
 ---------------------------------------*/
//滚动条监听
window.onscroll = function() {
    //原生兼容获取
    // var winScrHeight = document.body.scrollTop || document.documentElement.scrollTop;
    //jq获取
    var winScrHeight = $(window).scrollTop();
    //console.log(winScrHeight);
    var i = 0;
    var timer02 = null;
    var oTimeLiLen = $('.time_list li').length;
    //触发定时器
    if (winScrHeight >= 2600 && winScrHeight <= 3500) {
        //定时执行函数
        clearInterval(timer02);
        timer02 = setInterval(function () {
            //移出滚动事件美监听
             window.onscroll = function(){
                return false;
            }
            i++;
            if (i >= oTimeLiLen) {
                i = 0;
            }
            //定时执行的代码
            $('.time_list li').eq(i).addClass('time_courrse').siblings().removeClass('time_courrse');
            $('.brigth_con>div').eq(i).show().siblings('div').hide();
        }, 1500);
    }
}

/*培训视频显示的遮罩层和播放按钮
 ---------------------------------------*/
function indexVideoMask(){
    $('.tog_box01 li,.tog_box02 li').hover(function(){
        $(this).children('.play_but').show().siblings().children('.gary').hide();
    },function(){
        $(this).children('.play_but').hide();
    })
}

$(document).ready(function(){

   // timeConTab();

    trainVideoTag();
    trainVideoTag1();

    indexVideoMask();

    teacherSlideImg();

    var people01 = [ 'people01','peo_img_01','slideBox01'];
    var people02 = [ 'people02','peo_img_02','slideBox02'];
    var people03 = [ 'people03','peo_img_3','slideBox03'];
    var people04 = [ 'people04','peo_img_4','slideBox04'];
    var people05 = [ 'people05','peo_img_5','slideBox05'];
    var people06 = [ 'people06','peo_img_6','slideBox06'];
    teacherSlideImg( people01[0], people01[1],people01[2]);
    teacherSlideImg( people02[0], people02[1],people02[2]);
    teacherSlideImg( people03[0], people03[1],people03[2]);
    teacherSlideImg( people04[0], people04[1],people04[2]);
    teacherSlideImg( people05[0], people05[1],people05[2]);
    teacherSlideImg( people06[0], people06[1],people06[2]);

});