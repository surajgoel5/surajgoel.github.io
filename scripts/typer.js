//Usage type(id);


function type(id){
setTimeout(function foo1(){SPY.text(id,id);},0);
}

var SPY = function() {
  function e(a, d, b) {
    var c, f, g, h;
    b == a.length ? k.animationComplete = !0 : (g = d.innerHTML, h = Math.floor(21 * Math.random() + 5), c = 32 === a[b] ? 32 : a[b] - h, f = setInterval(function() {
      d.innerHTML = g + String.fromCharCode(c);
      c == a[b] ? (clearInterval(f), c = 32, b++, setTimeout(function() {
        e(a, d, b);
      }, 10)) : c++;
    }, 5));
  }
  var k = {};
  return k = {animationComplete:!1, text:function(a,old) {
    this.animationComplete = !1;
	
	document.getElementById(old).innerHTML="";
	document.getElementById(a).innerHTML="";

    a = document.getElementById(a);

	
	
    for (var d =a.getAttribute("lol"), b = [], c = 0;c < d.length;c++) {
      b.push(d.charCodeAt(c));
    }
	a.innerHTML="";
 
    e(b, a, 0);
		
  }};
}();
