/*

Go back by Xiao-Nan LU

*/


var myURL="https://xnlu-math.github.io/"

/*
function generateGoBack(){
	document.write( '<p> [ <a href="' + myURL + '" target="_top">Go back to Xiao-Nan Lu\'s homepage</a> ] </p>')
}
*/

function generateGoBack() {
    var goBackParagraph = document.createElement('p');
    var link = document.createElement('a');
    link.href = myURL;
    link.target = '_top';
    link.textContent = "Go back to Xiao-Nan Lu's homepage";
    goBackParagraph.appendChild(document.createTextNode('[ '));
    goBackParagraph.appendChild(link);
    goBackParagraph.appendChild(document.createTextNode(' ]'));
    
    var destinationElement = document.getElementById('goBackContainer'); // Change 'goBackContainer' to the ID of the element where you want to append the link
    destinationElement.appendChild(goBackParagraph);
}


function isHidden(oDiv){
	var vDiv = document.getElementById(oDiv);
	vDiv.style.display = (vDiv.style.display == 'none')?'block':'none';
}