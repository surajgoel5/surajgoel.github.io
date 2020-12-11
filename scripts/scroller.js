$(document).ready(function() {
  type("p1text");
  $(window).scroll();
})
var p2typed = false;
var p3typed = false;
var p4typed = false;
var lasttyped = false;




const hider_id=['#hider1','#hider2','#hider4','#hider3'];
const totalpages=5;


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

$(window).scroll(function(event) {
  var scroll = $(window).scrollTop();
  controlHiders(scroll);
  
 /* 
  if (scroll < 0.9 * H) {
    var newW = W * scroll / H;
    setHiderWidths(newW * 1.5, 0, 0, 0)
  } 
  
  else if (scroll < 1.9 * H ) {
    var newW = W * (scroll - 1.1 * H) / H;
    newW = newW < 0 ? 0 : newW;
    setHiderWidths(W * 1.3, newW * 1.3, 0, 0)
  }
  
  else if (scroll < 2.9 * H ) {
    var newW = W * (scroll - 2.1 * H) / H;
    newW = newW < 0 ? 0 : newW;
    setHiderWidths(W * 1.3, W * 1.3, newW * 1.3, 0)
  }
  
  else { //if (scroll < 3.9 * H ) {
    var newW = W * (scroll - 3.1 * H) / H;
    newW = newW < 0 ? 0 : newW;
    setHiderWidths(W * 1.3, W * 1.3, W * 1.3, newW * 1.3)
  }
 */
  if (scroll > H) {
    if (!p2typed) {
      p2typed = true;
      type("p2text");
    }
  }
  if (scroll > 2 * H) {
    if (!p3typed) {
      p3typed = true;
      type("p3text");
    }
  }
  if (scroll > 3 * H) {
    if (!p4typed) {
      p4typed = true;
      type("p4text");
    }
  }
  if (scroll > 4 * H) {
    if (!lasttyped) {
      lasttyped = true;
      type("lasttext");
    }
  }
});