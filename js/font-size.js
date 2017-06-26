/**
 * Created by SE7EN on 2017/6/23.
 */
window.addEventListener('orientationchange',setRem);
window.addEventListener('resize',setRem);
setRem();
function setRem(){
    var html=document.querySelector('html');
    var width=html.getBoundingClientRect().width;
    html.style.fontSize=width/15+"px"
};