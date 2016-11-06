// setCookie('bTabContent', "i am the bone of my soul", 1); 
// setCookie('bTabFooter', "Cscw ★ varEczn@GDUTTTT", 1); 

var myTab = (function(doc){
	var bTab = new Object();
	// bTab.prototype = new Object(); 

	bTab.pullData = function(){
		return {
			content: getCookie('bTabContent'),
			footer: getCookie('bTabFooter')
		}
	}

	bTab.pushData = function(obj){
		setCookie('bTabContent', obj.content, 233); 
		setCookie('bTabFooter', obj.footer, 233); 
	}

	bTab.flash = function(){
		// console.log(this.pullData);
		var temp = this.pullData(); 
		// console.log(temp);
		// content-container
		$('#content-container').html(temp.content);
		// footer 
		$('footer').html(temp.footer); 
	}

	bTab.loader = function(){
		bTab.flash(); 
	}

	return bTab; 
})(window.document);

function setCookie(c_name, value, expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString()); 
}

function getCookie(c_name){
	if (document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start != -1){ 
			c_start = c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1){
				c_end=document.cookie.length
			}
			return unescape(document.cookie.substring(c_start,c_end))
		}
	}
	return "";
}

