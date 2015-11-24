window.onload = function(){
var jianpan = document.getElementById('jianpan');
var anniu   = document.getElementsByClassName('anniu');
var jishi   = document.getElementById('jishi');
var time = 0,timerId,kaiguan = false;
for( var i = 0;i<anniu.length;i++){
	var s =Math.floor(Math.random()*122);
	while( s < 65 || ( s > 90 && s < 97 ) ){
		s = Math.floor(Math.random()*122);
	}
	anniu[i].innerHTML=String.fromCharCode(s);
}
var top = jianpan.firstElementChild;
document.onkeydown = function(e){
	if(e.shiftKey){
		if(e.keyCode != top.innerHTML.charCodeAt(0))
		   return;
	}else{
		if(e.keyCode +32 != top.innerHTML.charCodeAt(0))
		   return;
	}
	if(!kaiguan){
	    var jishiqi = function(){
	       jishi.innerHTML = time++;
	    };
        timerId = setInterval(jishiqi,1000);
        kaiguan = true;
    }
    top.style.background = '#CC02C5';
	top = top.nextElementSibling;
	if(top == null){
		location.reload();
		clearInterval(timerId);
		alert(time);
	}
};
	description.onmousedown = function(){
	   desc.style.display = 'block';
	};
	description.onmouseout= function(){
	   desc.style.display = 'none';
	};
	start.onclick = function(){
		jianpan.style.display='block';
	};
};