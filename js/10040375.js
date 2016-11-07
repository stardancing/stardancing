



















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
    var id ='',ids='0123456789abcdef';
    for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m7827.talk99.cn/monitor',
chat:'http://chat7812.talk99.cn/chat',
file:'http://static.soperson.com/131221',
compId:10033779,
confId:10040375,
vId:d_genId(),
lang:'sc',
fixFlash:1,
subComp:12296,
_mark:'b65c8ca8a0124c6e2fef02fbc95b14c99ae26427b75ec9a584eba179c58188bd1f74af8ee74d74c0'
}

, monParam:{
index:4,
preferConfig:0,

title:'\u5728\u7ebf\u5ba2\u670d',
text:'\u60a8\u597d\uff0c\u6b22\u8fce\u5149\u4e34\u672c\u7ad9\uff0c\u6211\u662f\u4eca\u5929\u7684\u5728\u7ebf\u670d\u52a1\u4eba\u5458\uff0c\u70b9\u51fb\u5f00\u59cb\u4ea4\u8c08\u5373\u53ef\u4e0e\u6211\u6c9f\u901a ',
auto:5,
group:'10045470',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:4,
mini:1,
pos:1,
offShow:0,
loop:0,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:1,
monHideStatus:[0,0,0],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0
}


, panelParam:{
category:'win',
preferConfig:0,
position:1,
vertical:180,
horizon:5

,mode:0,
index:2

,width:120



,title:'\u5317\u4eac\u65b0\u58f0\u4ee3\u97f3\u4e50\u4e2d\u5fc3'


, headClr:'#FFFFFF',
headBgClr:'#80CB40',
borderClr:'#80CB40',
phone:'18010036848'



,customers:{"showRobot":0,"groups":[{"id":10045470,"phone":0,"count":4,"name":"\u9ed8\u8ba4\u5206\u7ec4","active":1,"customers":[{"id":"xsdadmin1","status":1,"name":"\u96ea\u513f\u8001\u5e08","busy":0,"offline":0},{"id":"xsd_zixun01","status":0,"name":"\u6d0b\u6d0b\u8001\u5e08","busy":0,"offline":0},{"id":"xsd_zixun02","status":0,"name":"\u97e9\u8001\u5e08","busy":0,"offline":0},{"id":"a2242985260","status":0,"name":"\u96ea\u513f\u8001\u5e08","busy":0,"offline":0}],"sms":0,"mode":1,"online":1}],"mode":"1"}



}



};

if(typeof talk99Init == 'function'){
    talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){


document.write('<div id="doyoo_panel"></div>');


document.write('<div id="doyoo_monitor"></div>');


document.write('<div id="talk99_message"></div>')

document.write('<div id="doyoo_share" style="display:none;"></div>');
document.write('<lin'+'k rel="stylesheet" type="text/css" href="http://static.soperson.com/131221/talk99.css?150728"></li'+'nk>');
document.write('<scr'+'ipt type="text/javascript" src="http://static.soperson.com/131221/talk99.js?160203" charset="utf-8"></scr'+'ipt>');

}
}
