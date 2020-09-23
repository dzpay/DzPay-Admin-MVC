function go_menu(code1,code2) {
   //      parent.window.location = "/Modules/Main/ADMainFrame.jsp?root_seq="+code1+"&root_nm="+code2;
         parent.links.window.location = "/Modules/Main/menu.jsp?root_seq="+code1+"&root_nm="+code2+"&check_flag=N";

}
function go_page(code1,code2,code3,code4) {
   //    parent.window.location = "/Modules/Main/ADMainFrame.jsp?root_seq="+code1+"&root_nm="+code2;
         parent.links.window.location = "/Modules/Main/menu.jsp?root_seq="+code1+"&root_nm="+code2+"&check_flag=Y";
		 
         parent.mains.window.location = "/Modules"+code3+"?mnu_no="+code4;
}

function extended_go_page(code1,code2,code3,code4,val) {
         parent.links.window.location = "/Modules/Main/menu.jsp?root_seq="+code1+"&root_nm="+code2+"&check_flag=Y&val=" + val;
         parent.mains.window.location = "/Modules"+code3+"?mnu_no="+code4;
		// alert( "/Modules"+code3+"?mnu_no="+code4);
}

function logout(){
	parent.location.href="/Modules/Login/ADLogout.jsp";
} 

var showIdx = -1;

function showDivWindow(idx)
{
	var id;
	if(showIdx != -1)
	{ 
		
		id = eval("document.all.menu"+showIdx);
		id.style.display = "none";
	}
	
	id = eval("document.all.menu"+idx);
			
	id.style.display = "";
	showIdx = idx;
}

function closeDivWindow(idx)
{
	var id = eval("document.all.menu"+idx);
	id.style.display = "none";
}
