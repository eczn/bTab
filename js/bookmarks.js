// alert("stand by");

// chrome.bookmarks.getRecent(5, function(bookmarksList){
// 	console.log(bookmarksList);
// });

// chrome.bookmarks.get("91", function(d){
// 	console.log(d);
// });

var Tree; 
chrome.bookmarks.getTree(function q(result){
	console.log(result);
});


