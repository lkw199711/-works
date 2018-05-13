var ul=document.getElementById('nav');
var aa=ul.getElementsByTagName('a');
for(var i=0;i<aa.length;i++){
	aa[i].onclick=function(){
		for(var i=0;i<aa.length;i++){
			aa[i].className='';
			// 清除所有元素类名
		}
		this.className='active';
		// 为点进获得焦点元素添加类名
	}
}


var ul2=document.getElementById('u2');
var ab=ul2.getElementsByTagName('li');
var orderContent=document.getElementById('order-content');
var div=orderContent.getElementsByTagName('div');
for(var i=0;i<ab.length;i++){
	ab[i].index=i;
	ab[i].onclick=function(){
		for(var i=0;i<ab.length;i++){
			div[i].className="";
			ab[i].className='';
			// 清除所有元素类名
		}
		this.className='active';
		div[this.index].className='show';
		// 为点进获得焦点元素添加类名
	}
}

var limit_seconds = 9000;
  function deal_limit_time(){
   if(limit_seconds > 0)
	{
	  var hours = Math.floor(limit_seconds/3600);
	  var minutes = Math.floor(limit_seconds/60)%60;
	  var seconds = Math.floor(limit_seconds%60);
	  if(hours<10){hours = "0" + hours;}
	  else 
	    if(hours>99){hours = "99";}
		else{hours = hours + "";}
	  if(minutes<10){minutes = "0" + minutes;}
	  else{minutes = minutes + "";}
	  if(seconds<10){seconds = "0" + seconds;}
	  else{seconds = seconds + ""}  
	  var msgTime = "距特价结束时间还剩：<span class=\"key\">"
	  +hours.substr(0,2)+"</span>小时<span class=\"key\">"
	  +minutes.substr(0,2)+"</span>分<span class=\"key\">"
	  +seconds.substr(0,2)+"</span>秒";
	  document.getElementById("limit_time").innerHTML = msgTime;
	  document.getElementById("limit_time1").innerHTML = msgTime;
	  document.getElementById("limit_time2").innerHTML = msgTime;
	  --limit_seconds;
	 }
  }
  timer = setInterval("deal_limit_time()",1000);


   setInterval("showtime.innerHTML=new Date().toLocaleString()",1000);
