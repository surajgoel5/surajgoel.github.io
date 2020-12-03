$(document).ready(function(){
	type("p1text");
	$(window).scroll();
	})

var p2typed=false;
var p3typed=false;
var p4typed=false;
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
	
	if (scroll<1.1*$(window).height()){
	var newW=$( window ).width()*scroll/$( window ).height();
		$("#hider1").css("width",newW*1.05);
		$("#hider2").css("width",0);
		$("#hider3").css("width",0);
		}
	
	else if (scroll<2.1*$(window).height()){
	var newW=$( window ).width()*(scroll-1.1*$( window ).height())/($( window ).height());
	newW = newW < 0 ? 0 : newW;
	$("#hider1").css("width",$( window ).width()*1.05);
	
		$("#hider2").css("width",newW*1.1);
		
		$("#hider3").css("width",0);
		}
	else if (scroll<3.1*$(window).height()){
		var newW=$( window ).width()*(scroll-2.1*$( window ).height())/($( window ).height());
	newW = newW < 0 ? 0 : newW;
		$("#hider3").css("width",newW*2.1);
		
		$("#hider1").css("width",$( window ).width()*1.05);
	
		$("#hider2").css("width",$( window ).width()*1.1);
		
		
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
	
	
    
});