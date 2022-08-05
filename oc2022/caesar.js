/*
created by 盧 暁南@ 山梨大学
2021/7
*/

// get a random int in [min, max]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function caesarCipher(str, k) {
    if (k < 0)
        k = k + 26;
    str = str.toUpperCase();
	var result = '';
    var charcode = 0;

    for (var i = 0; i < str.length; i++) {
        charcode = str[i].charCodeAt();
		if (charcode >= 65 && charcode <= 90)
			newcharcode = (charcode - 65 + k) % 26 + 65;
		else
			newcharcode = charcode;
        result += String.fromCharCode(newcharcode);
    }
    return result;
}


function caesarEx(){
    var str = "Welcome to University of Yamanashi";
	var k = getRandomInt(2, 10);
	return caesarCipher(str, k);
}


function showCaesarCiphertext() {
    var ciphertext = caesarEx();
    var target = document.getElementById("caesar_text");
    target.innerHTML = "<tt>" + ciphertext + "</tt>";
    target = document.getElementById("current_text");
    target.innerHTML = ciphertext;
}


function getCaesarText(){
    var source = document.getElementById('current_text');
    return source.textContent;
}

function OnButtonClickCaesar() {
    var caesar_text = getCaesarText();
    decrypted_text = caesarCipher(caesar_text, -1);
    
    document.getElementById("current_text").innerHTML = decrypted_text;
    if (decrypted_text.indexOf('WELCOME') >= 0)
        document.getElementById("output_caesar").innerHTML += "<font color=\"red\"><tt>" +  decrypted_text + "</font></tt><br>";
    else
        document.getElementById("output_caesar").innerHTML += "<tt>" +  decrypted_text + "</tt><br>";
}

