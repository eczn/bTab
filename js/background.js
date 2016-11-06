// background.js
chrome.browserAction.onClicked.addListener(function(tab){  
    chrome.tabs.create({
    	url: "chrome://newtab"
    });  
});

// function notify(){
// 	var opt = {
// 		type: "list",
// 		title: "桌面提醒",
// 		message: "msg",
// 		iconUrl: "icon128.png",
// 		items: [
// 			{ title: "1.", message: "下班了"},
// 			{ title: "2.", message: "吃饭了."},
// 			{ title: "3.", message: "中奖了."}
// 		]
// 	}
// 	chrome.notifications.create('', opt, function(id){

// 	}); 

// 	chrome.notifications.create('222', opt, function(id){
// 		console.log("id: "+ id); 
// 	});
// }


// notify();

// var baba = {
// 	type: 'progress',
// 	title: "桌面提醒",
// 	message: "当前进度...",
// 	iconUrl: "images/black.png",
// 	progress: 80
// };

// chrome.notifications.create('id1',baba,
// 		function() { 
// 			alert("!"); 
// 		} 
// );


function check(){
	// alert("!"); 

}


setInterval(check, 6000); 
