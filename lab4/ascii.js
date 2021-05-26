
 "use strict";

 window.onload = function() {
     document.getElementById("btnstart").onclick = ftimer;
     document.getElementById("btnstop").onclick = stop;
     document.getElementById("ddlanimation").onchange = animation;
     document.getElementById("ddlsize").onchange = fsize;
     document.getElementById("chkturbo").onchange = turbo;
 };
 
 var animate = [];
 var timer = null;
 var i = 0;
 var frame = null;
 
 function start() {
     document.getElementById("txtarea").value = animate[i];
     if (i < animate.length - 1) {
         i++;
     } else {
         i = 0;
     }
     document.getElementById("btnstop").disabled = false;
     document.getElementById("btnstart").disabled = true;
     document.getElementById("ddlanimation").disabled = true;    
     document.getElementById("chkturbo").disabled = false;    
 
 //    $("#btnstop").removeAttr("disabled");
 //    $("#btnstart").attr("disabled", "disabled");
 }
 
 function ftimer() {
     if (timer == null) {
         timer = setInterval(start, 250);
     }
 }
 
 function stop() {
     document.getElementById("btnstop").disabled = true;
     document.getElementById("btnstart").disabled = false;
     document.getElementById("ddlanimation").disabled = false;    
     clearInterval(timer);
     timer = null;
     document.getElementById("txtarea").value = frame;
     i = 0;
 }
 
 function animation() {
     document.getElementById("btnstart").disabled = false;
     var animation = document.getElementById("ddlanimation").value;
     animate = ANIMATIONS[animation].split("=====\n");
 
     frame = ANIMATIONS[animation];
 
     document.getElementById("txtarea").value = ANIMATIONS[animation];
 //	$("#txtarea").val(ANIMATIONS[animation]);
 
 
 }
 
 function fsize() {
     var text = document.getElementById("txtarea");
     text.style.fontSize = document.getElementById("ddlsize").value + "pt";
 //    $("#txtarea").css("fontSize", size);
 }
 
 function turbo() {
 //    var check = $("#chkturbo").attr("checked");
     var check = document.getElementById("chkturbo").checked;
     clearInterval(timer);
     if (check){
         timer = setInterval(start, 50);
     }else{
         timer = setInterval(start, 250);      
     }
    }