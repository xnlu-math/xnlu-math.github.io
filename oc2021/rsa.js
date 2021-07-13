/*
created by 盧 暁南@ 山梨大学
2021/7
*/

function gcd(a, b){
    if (a == 0 || b == 0)
        return 0;
    if (a == b)
        return a;
    if (a > b)
        return gcd(a - b, b);  
    return gcd(a, b - a);
}

function modInverse(a, m){
    if (m == 1)
        return 0;

    var m0 = m;
    var y = 0;
    var x = 1;
    while (a > 1){
        var q = parseInt(a / m);
        var t = m;

        // m is remainder now, process same as Euclid algo
        m = a % m;
        a = t;
        t = y;
 
        y = x - q * y;
        x = t;
    }
    if (x < 0)
        x += m0;
    return x;
}
 

function isPrime(n){
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n%2 == 0 || n%3 == 0) return false;
    for (let i=5; i*i<=n; i=i+6)
        if (n%i == 0 || n%(i+2) == 0)
        return false;
    return true;
}

function nextPrime(N){
    if (N <= 1)
        return 2;
 
    let prime = N;
    let found = false;
 
    // Loop continuously until isPrime returns
    // true for a number greater than n
    while (!found) {
        prime++;
        if (isPrime(prime))
            found = true;
    }
    return prime;
}

// convert text to array of unicode 
function convertToUnicodeStr(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i).toString(10));//.padStart(5, "0")
    }// since max 0xffff = 65535 (5 digits)
    return arr;
}

// convert unicode string to text
function convertToPlainStr0(code) {
    var result = "";
    while (code.length > 5){
        char_code = code.substr(-5);
        code = code.slice(0,-5);
        result = String.fromCodePoint(char_code) + result;
    }
    result = String.fromCodePoint(code) + result;
    return result;
}

// convert unicode array to text
function convertToPlainStr(code) {
    var arr = code.split(',');
    var result = "";
    for (const char_code of arr) {
        result += String.fromCodePoint(char_code);
    }
    return result;
}


function OnButtonClickToUni() {
    var plain_text = document.getElementById('plain_text').value;
    var target = document.getElementById('plain_text_uni');
    //target.readOnly = true;
    target.value = convertToUnicodeStr(plain_text);
}

function OnButtonClickToTxt() {
    var text = document.getElementById('plain_text_uni').value;
    var target = document.getElementById('plain_text_txt');
    //target.readOnly = true;
    target.value = convertToPlainStr(text);
}

function OnButtonClickShowN() {
    var p = parseInt(document.getElementById('prime_p').value);
    var q = parseInt(document.getElementById('prime_q').value);
    if (!isPrime(p)) {
        p2 = nextPrime(p);
        alert("p="+p+"は素数じゃない．p="+ p2 + "にしますね．");
        p = p2;
        document.getElementById('prime_p').value = p;
    }
    if (!isPrime(q)) {
        q2 = nextPrime(q);
        alert("q="+q+"は素数じゃない．q="+ q2 + "にしますね．");
        q = q2;
        document.getElementById('prime_q').value = q;
    }
    if (p===q){
        q2 = nextPrime(q+1);
        alert("p と q が異なる素数じゃないといけない．q="+ q2 + "にしますね．");
        q = q2;
        document.getElementById('prime_q').value = q;
    }
    var N = BigInt(p*q);
    document.getElementById('key_N_show').innerHTML = "<font color=\"green\">公開鍵 N</font> = " + N;
    document.getElementById('key_N_alice').innerHTML = N;
}

function OnButtonClickCalcD() {
    var p = parseInt(document.getElementById('prime_p').value);
    var q = parseInt(document.getElementById('prime_q').value);
    //var N = parseInt(document.getElementById('key_N_alice').innerText);
    var e = parseInt(document.getElementById('key_e').value);

    var r = (p-1)*(q-1);
    if ( gcd(r, e) > 1 ){
        var e0 = e;
        while ( gcd(r, e) > 1 ){
            e += 1;
        }
        alert("e = "+e0+"と (p-1)*(q-1) ="+r+"は互いに素にならない．e="+ e + "にしますね．");
        document.getElementById('key_e').value = e;
    } 

    key_d = modInverse(e, r);
    document.getElementById('key_d').innerHTML = "<font color=\"red\">秘密鍵 d</font> = " + key_d + "<font color=\"red\"> (秘密鍵は他の人に見せじゃダメ！)</font>";
}

function OnButtonClickSendKey() {
    var N = parseInt(document.getElementById('key_N_alice').innerText);
    var e = parseInt(document.getElementById('key_e').value);
    document.getElementById('key_N_bob').value = N;
    document.getElementById('key_e_bob').value = e;
}

function OnButtonClickEncrypt() {
    var N = parseInt(document.getElementById('key_N_bob').value);
    var e = parseInt(document.getElementById('key_e_bob').value);
    var plain_text = document.getElementById('plain_text').value;

    var unicode_str = convertToUnicodeStr(plain_text);
    document.getElementById('ciper_text_show').innerHTML = "<font color=\"blue\">暗号文</font> = " + unicode_str;
    document.getElementById('ciper_text_bob').innerHTML = unicode_str;
}

function OnButtonClickSendCipertext() {
    var cipher_text = document.getElementById('ciper_text_bob').textContent;
    document.getElementById('ciper_text_alice').value = cipher_text;
}


function OnButtonClickDecrypt() {
    var cipher_text = document.getElementById('ciper_text_alice').value;
    var decrypted_text = convertToPlainStr(cipher_text);
    document.getElementById('decrypted_text').innerHTML = "<font color=\"blue\">復号したメッセージ</font> = " + decrypted_text;
}