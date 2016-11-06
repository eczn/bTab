// note.js
// note: Loader&Writer
var defaultRender = function(str){
	// console.log(str); 
	$(".note-display").html(str); 

	$(".note-del-before").click(function(e){
		var temp = $(this).parent().parent(); 
		note.delByPosition(temp.attr('list-position')); 
		
		temp.addClass( (temp.attr('list-position') == 0)? 'firPop':'notFirPop');
		setTimeout(function(){
			temp.remove(); 
		},400); 
	}); 

}

$("#note-save").click(function(e){
	// $("#123 .note-title").val("1111"); 
	var titleInput = $(".note-edit .note .note-title").val(); 
	var bodyInput = $(".note-edit .note .note-des").val(); 
	var dateInput = $(".note-edit .note .date-select").val(); 
	var timeInput = $(".note-edit .note .time-select").val(); 


	note.push({
		title: titleInput, 
		body: bodyInput, 
		date: new Date(dateInput+" "+ timeInput)
	}); 

	chrome.notifications.create(
		'id1',
		{
			type: 'list',
			title: "贴好了",
			message: titleInput,
			iconUrl: "images/geometry22.png",
			items: [{ title: "", message: bodyInput}]
		},
		function(e) { 
			// console.log(e); 
		} 
	);

	note.render(defaultRender); 

});


// ===== 

var note = (function(doc){
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

	var getCounter = function(){
		var num = noteConfig.counter++; 
		localStorage.config = JSON.stringify(noteConfig); 

		return num; 
	}

	var push = function(elem){
		elem.id = getCounter(); 

		console.log(elem); 
		console.log(list); 
		list.push(elem); 
		localStorage.list = JSON.stringify(list);
	}

	var delByPosition = function(pos){		
		list.splice(pos, 1); 
		localStorage.list = JSON.stringify(list);
	}

	var render = function(callBack){	
		var templateStr =	"<div class='note' id='$id$' list-position='$pos$'>" + 
								"<div class='note-title'>$title$</div>" + 
								"<div class='date-select'>$date$</div>" +
								"<div class='note-des'>$body$</div>" + 
								"<span class='note-del'><span class='note-del-before'></span></span>" +
							"</div>"; 
		var middle = ''; 
		var total = ''; 

		var listR = list.slice(0, list.length);
		listR.reverse(); 

		for (elem in listR){
			middle = templateStr.replace('$title$', listR[elem].title); 
			middle = middle.replace('$id$', listR[elem].id); 
			middle = middle.replace('$body$', listR[elem].body); 
			middle = middle.replace('$date$', listR[elem].date); 
			middle = middle.replace('$pos$', listR.length-1-elem);
			// alert(middle); 
			total += middle; 
			middle = null; 
		}

		callBack(total); 
	}


	console.log(list); 

	return {
		config: noteConfig,
		getCounter: getCounter,
		push: push,
		render: render,
		delByPosition: delByPosition
	}


})(window.doc)





note.render(defaultRender); 


