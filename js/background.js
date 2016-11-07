// background.js
chrome.browserAction.onClicked.addListener(function(tab){  
    chrome.tabs.create({
    	url: "chrome://newtab"
    });  
});


var watchDog = (function(){
	var noteConfig = new Object(); 
	var list = new Object(); 

	if (localStorage.hasOwnProperty('config')){
		noteConfig = JSON.parse(localStorage['config']); 

	
	} else {
		var defaultConfig = {
			counter: 0, 
			master: 'eczn'
		};
		localStorage.config = JSON.stringify(defaultConfig); 

		noteConfig = defaultConfig; 
		// counter = parseInt(localStorage.config.counter); 
		// call config function 
	}

	if (localStorage.hasOwnProperty('list')){
		list = JSON.parse(localStorage['list']); 
	} else {

		list = []; 
		
		localStorage.list = JSON.stringify(list); 
	}


	var check = function(){
		// console.log("!");
		var now = new Date(); 
		var objTime; 
		// console.log(list); 

		for (x in list){
			objTime = new Date(list[x].date); 
			if (objTime.getTime() <= now.getTime()) {
				console.log(list[x].title);
				chrome.notifications.create('id1',{
						type: 'list',
						title: list[x].title,
						message: '....Attention',
						iconUrl: "images/geometry22.png",
						items: [{ title: "", message: list[x].body}]
					},
					function(id) { 
						// console.log(id); 
					} 
				);
			}
		}
	}


	// console.log(list); 

	return {
		config: noteConfig,
		list: list,
		check: check
	}
})(); 

setInterval(watchDog.check, 60000); 
