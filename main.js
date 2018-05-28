//index.js
//(c) 2017 by Dionesius Agung AP
//For ARC Project 1
//March 2017

function change(event, elmt) {
	var prof = document.getElementById("isipr");
	var skill = document.getElementById("isisk");
	var port = document.getElementById("isipt");
	
	prof.style.display = "none";
	skill.style.display  = "none";
	port.style.display = "none";
	
	document.getElementById("profile").style.backgroundColor = "rgba(0,0,0,0.5)";
	document.getElementById("skills").style.backgroundColor = "rgba(0,0,0,0.5)";
	document.getElementById("portfolio").style.backgroundColor = "rgba(0,0,0,0.5)";
	document.getElementById("cv").style.backgroundColor = "rgba(0,0,0,0.5)";
	
	document.getElementById(event).style.display = "block";
	document.getElementById(elmt).style.backgroundColor = "rgba(255,255,0,0.9)";
}

change("isipr","profile");