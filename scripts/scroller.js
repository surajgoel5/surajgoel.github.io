
//Change these when editing structure i.e adding pages
const totalpages=5;
const hider_id=['#hider1','#hider2','#hider3','#hider4'];
var texts=[["p1text",true],["p2text",false],["p3text",false],["p4text",false],["lasttext",false]];



$(document).ready(function() {
  type(texts[0][0]);
  $(window).scroll();
})

var H = window.innerHeight;
var W = window.innerWidth;
	

function getPageNo(scroll){
	var pos=scroll/H
	var pno=Math.ceil(pos)
	pos=pos-pno+1;

	return[pno,pos];
}

function controlHiders(scroll){
	
	var H = window.innerHeight;
	var W = window.innerWidth;
	var [pno,pos] = getPageNo(scroll);
	console.log(pno,pos);
	
	
	for (var i = 0; i < totalpages; i++){
		var newW = W * (scroll- (i+0.1)*H )/ H;
		newW = newW < 0 ? 0 : newW;
		newW = newW>1.3*W?1.3*W: newW;
		$(hider_id[i]).css("width", newW*1.3);
		console.log(hider_id[i],newW*1.3);
		} 
	
}

function typeOnPage(scroll){
	var [pno,pos] = getPageNo(scroll);
	for (var i = 0; i < pno; i++){
	
	if (!texts[i][1]){
		texts[i][1]=true;
		type(texts[i][0]);
	}
	}
	
}


$(window).scroll(function(event) {
	
  var scroll = $(window).scrollTop();
 controlHiders(scroll);
typeOnPage(scroll);

});