// note.js
// note: Loader&Writer

$("#note-save").click(function(e){
	// $("#123 .note-title").val("1111"); 

	var elem = {
		title: 'test', 
		body: 'test', 
		date: new Date()
	}; 

	note.push(elem); 

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

	var render = function(){

	}

	var push = function(elem){
		elem.id = getCounter(); 

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

		for (elem in list){
			middle = templateStr.replace('$title$', list[elem].title); 
			middle = middle.replace('$id$', list[elem].id); 
			middle = middle.replace('$body$', list[elem].body); 
			middle = middle.replace('$date$', list[elem].date); 
			middle = middle.replace('$pos$', elem); 
			// alert(middle); 
			total += middle; 
			middle = null; 
		}

		callBack(total); 
	}
	// console.log(list); 

	console.log(list); 

	return {
		config: noteConfig,
		getCounter: getCounter,
		push: push,
		render: render,
		delByPosition: delByPosition
	}


})(window.doc)


note.render(function(str){
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
});  
