var newWindow=null;function closeWin(){if(newWindow!=null){if(!newWindow.closed)
newWindow.close();}}
function popUpWin(url,type,strWidth,strHeight){closeWin();if(type=="fullScreen"){strWidth=screen.availWidth-20;strHeight=screen.availHeight-20;}
var tools="";if(type=="standard")tools="resizable,toolbar=no,location=no,scrollbars=no,width="+strWidth+",height="+strHeight+",left=10,top=10";if(type=="resume")tools="resizable,toolbar=no,location=no,scrollbars=yes,width="+strWidth+",height="+strHeight+",left=20,top=20";newWindow=window.open(url,'newWin',tools);newWindow.focus();}