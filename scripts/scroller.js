$(document).ready(function(){
	type("p1text");
	$(window).scroll();
	})

var p2typed=false;
var p3typed=false;
var p4typed=false;
var lasttyped=false;
$(window).scroll(function (event) {
	
    var scroll = $(window).scrollTop();
	var H=window.innerHeight;
	var W=window.innerWidth;
	
	if (scroll<0.9*H && scroll>0*H){
	var newW=W*scroll/H;
		$("#hider1").css("width",newW*1.3);
		$("#hider2").css("width",0);
		$("#hider3").css("width",0);
		$("#hider4").css("width",0);
		}
	else if (scroll>=0.9*H && scroll<=1.1*H){
		$("#hider1").css("width",W*1.3);
		$("#hider2").css("width",0);
		$("#hider3").css("width",0);
		$("#hider4").css("width",0);
		}
	else if (scroll<1.9*H && scroll>1.1*H){
	var newW=W*(scroll-1.1*H)/H;
	newW = newW < 0 ? 0 : newW;
	
	$("#hider1").css("width",$( window ).width()*1.3);
	$("#hider2").css("width",newW*1.3);
	$("#hider3").css("width",0);
	$("#hider4").css("width",0);
		}
		
	else if (scroll>=1.9*H && scroll<=2.1*H){
		$("#hider1").css("width",W*1.3);
		$("#hider2").css("width",W*1.3);
		$("#hider3").css("width",0);
		$("#hider4").css("width",0);
		}	
	else if (scroll<2.9*H && scroll>2.1*H){
		var newW=W*(scroll-2.1*H)/H;
	newW = newW < 0 ? 0 : newW;
	
	$("#hider3").css("width",0);
	$("#hider1").css("width",W*1.3);
	$("#hider2").css("width",W*1.3);
	$("#hider4").css("width",newW*1.3);
		
		
		}
	else if (scroll>=2.9*H && scroll<=3.1*H){
		$("#hider1").css("width",W*1.3);
		$("#hider2").css("width",W*1.3);
		$("#hider3").css("width",0);
		$("#hider4").css("width",W*1.3);
		}	
		
		
		
	else if (scroll<3.9*H && scroll>3.1*H){
		var newW=$( window ).width()*(scroll-3.1*H)/H;
	newW = newW < 0 ? 0 : newW;
	
	$("#hider3").css("width",newW*1.3);
	$("#hider1").css("width",$( window ).width()*1.3);
	$("#hider2").css("width",$( window ).width()*1.3);
	$("#hider4").css("width",$( window ).width()*1.3);	
		
		}
		
		
	if (scroll>$(window).height()){
		if(!p2typed){
		p2typed=true;
		type("p2text");
		}
		}
	if (scroll>2*$(window).height()){
			if(!p3typed){
		p3typed=true;
		type("p3text");
		}
			}
	if (scroll>3*$(window).height()){
			if(!p4typed){
		p4typed=true;
		type("p4text");
		}
			}
	if (scroll>4*$(window).height()){
			if(!lasttyped){
		lasttyped=true;
		type("lasttext");
		}	
				
	}
	
	
    
});