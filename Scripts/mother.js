//The mother script that links togethor all other scripts. 
//Contains all var declarations

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var width = 0;
var width2 = 0;
var left = 0;
var frm = "";
var compute = "";
var row = 0;
var rows = 0;
var image = "";
var sel = "";
var opt = "";
var opt2 = "";
var sel2 = "";
var forms = new Array();
function equt() /*Loads the pull down menu that allows the user to select an equation*/ {
	sel2 = document.getElementById('equsel');
	opt2 = sel2.options[sel2.selectedIndex].value;
	load();
}
function load() /*Loads the form that is the user interface for the equation*/{
	rows = forms[opt][opt2][0] + 1;
	row = 1;
	frm = "<form><table>";
	while(row<rows){
		frm = frm + "<tr style='text-align: left;'>" + forms[opt][opt2][row] + "</tr>";
		row = row + 1;		
	}
	switch(opt){
		case "1":
			compute = "One" + opt2;
		break;
		case "2":
			compute = "Two" + opt2;
		break;
		case "3":
			compute = "Three" + opt2;	
		break;
		case "4":
			compute = "Four" + opt2;	
		break;
		case "5":
			compute = "Five" + opt2;	
		break;
	}
	compute = "<input type='button' onclick=" + compute + "() value =Calculate id=calc></input><input type='reset' value='Clear Inputs' id=reset></input>";
	frm = frm + "<tr style='text-align: left;'><td>" + compute + "</td></tr></table></form>";
	document.getElementById('manual').innerHTML = "<u><b>Leave blank</b></u> the variable you wish to solve for.<br><br>";
	document.getElementById('form').innerHTML = frm;
	document.getElementById('image').rowSpan = rows;
	document.getElementById('image').innerHTML = image[opt][opt2];//opt = category in physics. opt2 = what equation
}
function position() {
	width = window.innerWidth != null? window.innerWidth: document.body != null? document.body.clientWidth:null;
	document.getElementById('table').style.width = width - 8 + "px";
}
function width() {
	return window.innerWidth != null? window.innerWidth: document.body != null? document.body.clientWidth:null;
}