 	function refresh(){
		if (event.keyCode == 116){
			window.event.keyCode = "";
			window.parent.mains.location.reload() 
			return false;
		}
	}
	document.onkeydown = refresh


	function viewHelp(URL){
		URL = URL.substring(0,URL.length-3)+"html"
		window.open("/Modules/help/"+URL,"post","toolbar=no ,width=640 ,height=400 ,directories=no,status=yes,scrollbars=yes,menubar=no");
	}

 var totcount;

function setConfig(num){
  totcount = num;
}

function clickshow(num) {

  var showcase;
  var totcount1 = totcount;

	for (i=1;i<totcount1+1;i++) 	{
		menu=eval("document.all.block"+i+".style");
		imgch=eval("document.bar"+i);
			if (num==i)	{
			    if (menu.display=="block"){
			        menu.display="none";
		    	}
		    	else{
			        menu.display="block";
			        showcase = "1";
		    	}
		  }
	}

	if (showcase == "1"){
	    for (i=1;i<totcount1+1;i++) 	{
	  	    menu=eval("document.all.block"+i+".style");
		      imgch=eval("document.bar"+i);
		  	  if (num!=i){
	  		      if (menu.display=="block") menu.display="none";
	  	    }
	   }
	}
}




function logout(){
	parent.location.href="/Modules/Login/ADLogout.jsp";
} 


function outandin(admin_id){	
	parent.location.href="/Modules/Login/ADLogout.jsp?admin_id="+admin_id;	
} 


function init_go(code){
	window.parent.mains.location.href = code;
} 


function view_mypage() {

	window.open("../System/Manager/ADACManagerViewMain.jsp?mnu_no=AA000002&code2=Y", "ADACManagerView_0", 'resize=no, scrollbars=yes ,height=500, width=850,location=no,directory=no,toolbar=no');
}
