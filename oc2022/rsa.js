/*
created by 盧 暁南@ 山梨大学
2021/7
*/

function gcd(a,b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
        var temp = a; a = b; b = temp;
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
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
 
// calculate base^(2^bin_exp) % mod
function expMod2( base, bin_exp, mod ){
    if (bin_exp == 0) return base % mod;
    var res = base;
    for (var i = 0; i < bin_exp; i++) {
        res = res*res % mod;
    }
    return res;
}


function expMod( base, exp, mod ){
    if (exp == 0) return 1;
    if (exp == 1) return base % mod;
    var bin_exp = exp.toString(2);
    var res = 1;
    for (var i = bin_exp.length-1; i >= 0; i--) {
        if (bin_exp.charAt(i)=="1"){
            res = res * expMod2( base, bin_exp.length-i-1, mod ) % mod;
        }
    }
    return res;
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

// convert text to array of encrypted unicode 
// b = a^e mod N
function convertToUnicodeEncryptStr(str, e, N) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var a = parseInt(str.charCodeAt(i).toString(10));
        var b = expMod(a, e, N);
        arr.push(b.toString(10));
    }// since max 0xffff = 65535 (5 digits)
    return arr;
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

// convert unicode array to text
// a = b^d mod N
function convertToPlainDecryptStr(code, d, N) {
    var arr = code.split(',');
    var result = "";
    for (const char_code of arr) {
        var b = parseInt(char_code);
        var a = expMod(b, d, N);
        if (a < 65536){
            result += String.fromCodePoint(a);
        }
        else{
            //result += String(a) + "(文字に変換できなかった)";
            result += String.fromCodePoint(a % 65536);
        }

        
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
    if (p<255){
        p2 = 257;//nextPrime(256);
        alert("p="+p+"は小さすぎる．p="+ p2 + "にしますね．");
        p = p2;
        document.getElementById('prime_p').value = p;
    }
    else if (!isPrime(p)) {
        p2 = nextPrime(p);
        alert("p="+p+"は素数じゃない．p="+ p2 + "にしますね．");
        p = p2;
        document.getElementById('prime_p').value = p;
    }

    if (q<255){
        q2 = 263;//nextPrime(262);
        alert("q="+q+"は小さすぎる．q="+ q2 + "にしますね．");
        q = q2;
        document.getElementById('prime_q').value = q;
    }
    else if (!isPrime(q)) {
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
    var N = (p*q); // N should be larger than 65535
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
        alert("e = "+e0+"と (p-1)*(q-1)="+r+"は互いに素にならない．e="+ e + "にしますね．");
        document.getElementById('key_e').value = e;
    } 

    key_d = modInverse(e, r);
    //document.getElementById('key_d').innerHTML = "<font color=\"red\">秘密鍵 d</font> = " + key_d + "<font color=\"red\"> (秘密鍵は他の人に見せじゃダメ！)</font>";
    document.getElementById('key_d').innerHTML = "<font color=\"red\"> (秘密鍵は他の人に見せじゃダメ！)</font>";
    document.getElementById('key_d_alice').value = key_d;
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

    //var unicode_str = convertToUnicodeStr(plain_text);
    var unicode_str = convertToUnicodeEncryptStr(plain_text, e, N);
    document.getElementById('ciper_text_show').innerHTML = "<font color=\"blue\">暗号文</font> = " + unicode_str;
    document.getElementById('ciper_text_bob').innerHTML = unicode_str;
}

function OnButtonClickSendCipertext() {
    var cipher_text = document.getElementById('ciper_text_bob').textContent;
    document.getElementById('ciper_text_alice').value = cipher_text;
}


function OnButtonClickDecrypt() {
    var cipher_text = document.getElementById('ciper_text_alice').value;
    var N = parseInt(document.getElementById('key_N_alice').innerText);
    var d = parseInt(document.getElementById('key_d_alice').value);
    var decrypted_text = convertToPlainDecryptStr(cipher_text, d, N);
    document.getElementById('decrypted_text').innerHTML = "<font color=\"blue\">復号したメッセージ</font> = " + decrypted_text;
}