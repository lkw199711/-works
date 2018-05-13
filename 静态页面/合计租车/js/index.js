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

