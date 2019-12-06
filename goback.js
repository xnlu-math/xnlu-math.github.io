/*

Go back by Xiao-Nan LU

*/


var myURL="https://xnlu-math.github.io/"

function generateGoBack(){
	document.write( '<a href="' + myURL + '" target="_top">Go back to Xiao-Nan Lu\'s homepage</a>')
}

function isHidden(oDiv){
	var vDiv = document.getElementById(oDiv);
	vDiv.style.display = (vDiv.style.display == 'none')?'block':'none';
}