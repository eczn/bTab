var basicN = {
	type:"basic",
	title:"。。。。",
	message:"you click the clock",
	iconUrl:"images/black.png"
};

var listN = {
	type: 'list',
	title: "桌面提醒",
	message: "中大奖了！",
	iconUrl: "images/black.png",
	items: [{ title: "1.", message: "下班了"},
	{ title: "2.", message: "吃饭了."},
	{ title: "3.", message: "中奖了."}]
}; 

var imageN = {
	type: "image", 
	title: "image type", 
	message: "....",
	iconUrl: "images/black.png", 
	imageUrl: "images/geometry22.png" 
}; 

var to = 0; 

var progressN = {
	type: 'progress',
	title: "桌面提醒",
	message: "当前进度...",
	iconUrl: "images/black.png",
	progress: to
};

$("#clock").click(function(e){
	chrome.notifications.create('id1',progressN,
		function() { 

		} 
	);
	progressN.progress = to++; 
	// to++; 
}); 
