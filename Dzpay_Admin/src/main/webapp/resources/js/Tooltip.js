//** 사용자의 EXPLORER 정보를 초기화 합니다. **//
var dom = (document.getElementById) ? true : false; 
var ie4 = (document.all && !dom) ? true : false; 
var ie5 = ((navigator.userAgent.indexOf("MSIE")>-1) && dom) ? true : false;
var ns5 = ((navigator.userAgent.indexOf("Gecko")>-1) && dom) ? true: false; 
var nodyn = (!ns5 && !ie4 && !ie5) ? true : false;
var tipFollowMouse= true; //마우스를 따라다니게 할건지 여부 (true/false)
var origWidth, origHeight; 
if (nodyn) { event = "nope" } 

//** MOUSE EVENT가 있을 경우에만 TIP이 보이도록 설정합니다. **/
var tipOn = false;

//** 사용자 정보에 따라 MOUSE EVENT의 위치정보를 지정합니다. **/
var mouseX, mouseY;
function trackMouse(evt) { 
	mouseX = (ns5)? evt.pageX: window.event.clientX + document.body.scrollLeft; 
	mouseY = (ns5)? evt.pageY: window.event.clientY + document.body.scrollTop; 
	if (tipOn) positionTip(evt); 
} 

function positionTip(evt) { 
	if (!tipFollowMouse) { 
	        mouseX = (ns5)? evt.pageX: window.event.clientX + document.body.scrollLeft; 
	        mouseY = (ns5)? evt.pageY: window.event.clientY + document.body.scrollTop; 
	} 
	var tpWd = (ie4||ie5)? CalnTooltip.clientWidth: CalnTooltip.offsetWidth; 
	var tpHt = (ie4||ie5)? CalnTooltip.clientHeight: CalnTooltip.offsetHeight; 
	
	var winWd = (ns5)? window.innerWidth-20+window.pageXOffset: document.body.clientWidth+document.body.scrollLeft; 
	var winHt = (ns5)? window.innerHeight+window.pageYOffset: document.body.clientHeight+document.body.scrollTop; 
	
	if ((mouseX+offX+tpWd)>winWd) 
	    CalnTipcss.left = mouseX-(tpWd+offX)+"px"; 
	else
		CalnTipcss.left = mouseX+offX+"px";

	if ((mouseY+offY+tpHt)>winHt)
		CalnTipcss.top = mouseY-(tpHt+offY)+"px"; 
	else
		CalnTipcss.top = mouseY+offY+"px";

	if (!tipFollowMouse) t1=setTimeout("CalnTipcss.visibility='visible'",100);
}

var offX, offY;
function DefineTipStyle(opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10, opt11) { 
	/******* TOOPTIP BOX의 STYLE을 정의 합니다. ******* 
	- opt1 : 마우스와 상자간의 가로 간격
	- opt2 : 마우스와 상자간의 세로 간격
	- opt3 : Tooltip width
	- opt4 : Font Type
	- opt5 : Font Size
	- opt6 : Font Color
	- opt7 : Background Color
	- opt8 : Border Color
	- opt9 : Border Size
	- opt10 : Border Style
	- opt11 : 상자와 상자안의 내용간의 여백 
	*****************************************************/

	offX = opt1;
	offY = opt2;
	if (nodyn) return;
	if (ie4||ie5||ns5) {
		CalnTipcss.width = opt3+"px"; 
		CalnTipcss.fontFamily = opt4; 
		CalnTipcss.fontSize = opt5; 
		CalnTipcss.color = opt6; 
		CalnTipcss.backgroundColor = opt7; 
		CalnTipcss.borderColor = opt8; 
		CalnTipcss.borderWidth = opt9+"px"; 
		CalnTipcss.borderStyle = opt10;
		CalnTipcss.padding = opt11+"px";
	} 
	
	if (CalnTooltip && tipFollowMouse) { 
		document.onmousemove = trackMouse; 
	}
} 