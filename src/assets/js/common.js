// 给html根标签设置字体大小,这种方式只适用于移动端
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

//使用fastClick
window.addEventListener('load', function(){
  FastClick.attach(document.body);
}, false);

//去除多指
document.documentElement.addEventListener('touchmove', function(e){
  if(e.touches.length > 1){
    e.preventDefault();
  }
}, false);