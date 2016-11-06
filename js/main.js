// var myClock = new jClock('clock', window.innerWidth * 0.3, window.innerWidth * 0.3);

var myClock = new jClock({
	canvasId: 'clock', 
	clockHight: window.innerWidth * 0.3, 
	clockWidth: window.innerWidth * 0.3
});

$('#input-background').click(function(){
	$('.input-area').removeClass('toFillOpa');
	setTimeout(function(){
		$('.input-area').css('display', 'none'); 
	}, 500); 
}); 

myTab.flash();

$('#setting').click(function(){
	// alert("!!"); 
	$('.input-area').css('display', 'block'); 
	setTimeout(function(){
		$('.input-area').addClass('toFillOpa');
	}, 20); 
});

$("#toStoreNew").click(function(){
	$('.input-area').removeClass('toFillOpa');
	setTimeout(function(){
		$('.input-area').css('display', 'none'); 
	}, 500); 
	myTab.pushData({
		content: $('#content-input').val(), 
		footer: $('#footer-input').val()
	}); 
	myTab.flash(); 
});

// bTab.pullData(); 
// console.log();

window.onresize = function(){
	// console.log(window.innerHeight);
	var w = mapple(window.innerWidth); 
	myClock.setSize(w,w);
	myClock.jClocking(new Date().getSeconds(), 0); 
};

