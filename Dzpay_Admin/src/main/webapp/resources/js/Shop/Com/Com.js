function Sel_Indust(){
	url = "./ADSPShopSelectindust.jsp?fistindust="+ document.form1.fistindust.value;
	var w_search = window.open(url,'w_search','left=250,top=250,width=450,height=265');	
}


function set_Indust(indust_code, indust_value ) {
	opener.set_Indust1(indust_code, indust_value);
	this.close();
}

function set_Indust1(indust_code, indust_value ) {
		document.form1.secondIndust.value = indust_code;
		document.form1.secondIndust_name.value = indust_value;
	
}