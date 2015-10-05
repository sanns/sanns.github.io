'use strict';

$(document).ready(function() {
	
	
	
    $(".navi__item").hover(function () { //либо hover, либо изменение окна
		var ww = $(window).width();
		var naviLvl2 = $(this).find('.navi--lvl2');
		
		console.info(' ww' + ww);
		
		var elW = naviLvl2.outerWidth();
		
			var newPos = ww - elW;
			
		if ( naviLvl2.offset().left + elW > ww)
			naviLvl2.offset({left: newPos}) //todo отрицательное значение, почему-то, прибавляет, а не замещает
			//относительно чего ставится left ?
		else if(naviLvl2.offset().left < 0)
			naviLvl2.offset({left: 0});
		
		console.info(' elW' + elW);
		console.info(' newpos ' + newPos);
		
		// 95wv:
		// if (elW > ww) 
			// elW = ww; //можно и так?
		
		console.info(' elW' + elW);
	});
	
	
	


});