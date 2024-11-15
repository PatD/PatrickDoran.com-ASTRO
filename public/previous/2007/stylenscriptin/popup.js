function togglecomments (postid) { 
   var whichpost = document.getElementById(postid); 
   if (whichpost.className=="commentshown") { 
      whichpost.className="commenthidden"; 
   } 
   else { 
      whichpost.className="commentshown"; 
   } 
} 


var newWindow = null;

function closeWin(){
	if (newWindow != null){
		if(!newWindow.closed)
			newWindow.close();
	}
}

function popUpWin(url, type, strWidth, strHeight){
	
	closeWin();
	
	if (type == "fullScreen"){
		strWidth = screen.availWidth - 20;
		strHeight = screen.availHeight - 180;
	}
	
	var tools="";
	if (type == "standard" || type == "fullScreen") tools = "resizable,toolbar=yes,location=yes,scrollbars=yes,menubar=yes,width="+strWidth+",height="+strHeight+",top=0,left=0";
	if (type == "kansasminisite" || type == "fullScreen") tools = "resizable,toolbar=no,location=no,scrollbars=no,menubar=no,width="+strWidth+",height="+strHeight+",top=10,left=10";
	if (type == "console") tools = "resizable,toolbar=no,location=no,scrollbars=no,width="+strWidth+",height="+strHeight+",left=10,top=10";
	if (type == "conscroll") tools = "resizable,toolbar=no,location=no,scrollbars=yes,width="+strWidth+",height="+strHeight+",left=10,top=10";
	newWindow = window.open(url, 'newWin', tools);
	newWindow.focus();
}