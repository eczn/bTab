/*
 *  jClock.js :  display time on canvas. 
 *
 *
 */

"use strict"; 
function jClock(canvasId,hourPointerColor,minPointerColor,secPointerColor,out_height,out_width){
	var jClockTimeCore = new Date(),
		PI = Math.PI,
		domCanvas = document.getElementById(canvasId),
		width, 
		height,
		g = domCanvas.getContext('2d'),
		time = {
			hour: jClockTimeCore.getHours(),
			min: jClockTimeCore.getMinutes(), 
			sec: jClockTimeCore.getSeconds() 
		};
	// rgb(153,0,0)

	if (out_width){
		domCanvas.width = out_width;
		width = out_width; 
	} else if (out_height) {
		domCanvas.height = out_height; 
		height = out_height; 
	} else {
		domCanvas.width = 600;
		domCanvas.height = 600;
		width = 600; 
		height = 600; 
	}

	function freshTime(){
		time.hour = jClockTimeCore.getHours();
		time.min = jClockTimeCore.getMinutes();
		time.sec = jClockTimeCore.getSeconds();
	}

	// dev 
	function setSize(new_width,new_height){
		if (new_width != undefined){
			width = new_width;
			domCanvas.width = width; 			
			return 1; 
		} else if (new_height != undefined){
			height = new_height; 
			domCanvas.height = new_height; 
			return 1; 
		} else {
			console.log("set up jClock's size without any value!"); 
			return 0; 
		}
	}

	function rad2deg(rad){
		// 输入弧度制返回度数制 
		// 十二点整的位置是零开始的地方

	}

	function getVec(rad,r){ // deg：12 点时值为0 
		// var trueDeg = deg - 90, // 真deg（跟x正方向夹角）
		return {
			x: r * Math.cos(rad),
			y: r * Math.sin(rad),
			r: r
		};
	}

	function jClocking(){
		var temp = new Date();
		var mySec = temp.getSeconds(),
			myMin = temp.getMinutes(), 
			myHour= temp.getHours(); 
		
		paint((PI*mySec/30)-PI/2, (PI*(myMin+mySec/60)/30)-PI/2, (PI*(myHour+myMin/60)/30)*5-PI/2); 

		setTimeout(jClocking,1000); 
	}

	function paint(secRad,minRad,hourRad){
		g.clearRect(0,0,width,height); 
		
		aPointer(getVec(minRad,240),minPointerColor,3);
		aPointer(getVec(hourRad,120),hourPointerColor,4);

		// secPointerColor = "rgb(153,0,0)";   in general
		aPointer(getVec(secRad,280),secPointerColor,2);
	}

	function aPointer(vec,color,lineWidth){
		if (color){
			g.strokeStyle = color; 
		} else {
			g.strokeStyle = "#000"
		}

		if (lineWidth){
			g.lineWidth = lineWidth;
		} else {
			g.lineWidth = 2; 
		}

		g.beginPath();
		g.moveTo(width/2,height/2);
		g.lineTo(width/2 + vec.x , height/2 + vec.y); 
		g.moveTo(width/2,height/2);
		g.lineTo(width/2 - 30*vec.x/vec.r , height/2 - 30*vec.y/vec.r);
		g.stroke(); 
		g.closePath();
	}

	this.jClocking = jClocking;

}
