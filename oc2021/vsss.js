/*
created by 盧 暁南@ 山梨大学
2021/7
*/

function _log(string){
    document.getElementById("log").innerHTML += string; 
}

function load_image(img_name){
    var canvas = document.getElementById('sample');
    var ctx = canvas.getContext("2d");

    var canvas2 = document.getElementById('sample2');
    var ctx2 = canvas2.getContext('2d');

    img = new Image()
    img.onload = function () {
        //draw background image
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);    

        canvas2.width = 2*img.naturalWidth;
        canvas2.height = 2*img.naturalHeight;
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx2.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, canvas2.width, canvas2.height);
    };
    img.src = img_name;
    //img.crossOrigin = "Anonymous";
}

function copy_resize() {
    var canvas = document.getElementById('sample');
    var canvas2 = document.getElementById('sample2');
    var ctx2 = canvas2.getContext('2d');

    canvas2.width = 2*canvas.width;
    canvas2.height = 2*canvas.height;

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvas2.width, canvas2.height);
}

function draw(str) {
    var canvas = document.getElementById('sample');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "48px serif";
    ctx.fillText(str, 10, 50);
}

function generate_text() {
    var secret_str = document.getElementById('secret').value;
    draw(secret_str);
    copy_resize();
}

function generate_shares() {
    var canvas = document.getElementById('sample');
    var ctx = canvas.getContext('2d');
    var imageData=ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    //for (var i = 0; i < data.length; i += 4) {
        //data[i]     = 255 - data[i];     // red
        //data[i + 1] = 255 - data[i + 1]; // green
        //data[i + 2] = 255 - data[i + 2]; // blue
        //data[i + 3] = 255 - data[i + 3]; // alpha
    //}
    

    //ctx.putImageData(imageData, 0, 0);

    var canvas1 = document.getElementById('share1');
    var ctx1 = canvas1.getContext('2d');

    canvas1.width = 2*canvas.width;
    canvas1.height = 2*canvas.height;


    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    var imageData1=ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    var data1 = imageData1.data;

    const share_mode1 = document.getElementById('share1_mode').selectedIndex;
    if (share_mode1 > 0){ //red or green or blue mode
        for (var i = 0; i < data1.length; i += 4) {
            data1[i+share_mode1-1] = 255 - data1[i+share_mode1-1];  
            //data1[i]     = 255 - data1[i];     // red
            //data1[i + 1] = 255 - data1[i + 1]; // green
            //data1[i + 2] = 255 - data1[i + 2]; // blue
            //data1[i + 3] = 255 - data1[i + 3]; // alpha
        }
    }
    

    var canvas2 = document.getElementById('share2');
    var ctx2 = canvas2.getContext('2d');

    canvas2.width = 2*canvas.width;
    canvas2.height = 2*canvas.height;

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    var imageData2=ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    var data2 = imageData2.data;

    const share_mode2 = document.getElementById('share2_mode').selectedIndex;
    if (share_mode2 > 0){ //red or green or blue mode
        for (var i = 0; i < data2.length; i += 4) {
            data2[i+share_mode2-1] = 255 - data2[i+share_mode2-1];  
            //data2[i]     = 255 - data2[i];     // red
            //data2[i + 1] = 255 - data2[i + 1]; // green
            //data2[i + 2] = 255 - data2[i + 2]; // blue
            //data2[i + 3] = 255 - data2[i + 3]; // alpha
        }
    }

    for (var y = 0; y < imageData.height; y++) {
        for (var x = 0; x < imageData.width; x++) {
            var xx = x*2; // x coor. of 1st subpixel of shares 
            var yy = y*2; // y coor. of 1st subpixel of shares 
            var index = (x + y * imageData.width) * 4;
            //var index2 = (xx + yy * imageData2.width) * 4;

            var subpixels = get_random_subpixel();
            var ave_rgb = data[index+3]; //(data[index] + data[index+1] + data[index+2])/3;
            // white pixel
            if (ave_rgb < 128){
                setShare(imageData1, xx, yy, subpixels);
                setShare(imageData2, xx, yy, subpixels);
            } // black pixel
            else{
                setShare(imageData1, xx, yy, subpixels);
                setShare(imageData2, xx, yy, inv_subpixel(subpixels));
            }
        }
    }
    ctx1.putImageData(imageData1, 0, 0);
    ctx2.putImageData(imageData2, 0, 0);
}


function superimpose_shares() {
    var canvas1 = document.getElementById('share1');
    var ctx1 = canvas1.getContext('2d');
    var imageData1=ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    var data1 = imageData1.data;

    var canvas2 = document.getElementById('share2');
    var ctx2 = canvas2.getContext('2d');
    var imageData2=ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    var data2 = imageData2.data;

    var canvass = document.getElementById('superimposed');
    var ctxs = canvass.getContext('2d');

    canvass.width = canvas1.width;
    canvass.height = canvas1.height;

    ctxs.clearRect(0, 0, canvass.width, canvass.height);
    var imageDatas=ctxs.getImageData(0, 0, canvass.width, canvass.height);
    var datas = imageDatas.data;

    for (var y = 0; y < imageDatas.height; y++) {
        for (var x = 0; x < imageDatas.width; x++) {
            var index = (x + y * imageDatas.width) * 4;
            for (var i = 0; i < 4; i++) 
                datas[index+i] = Math.max(data1[index+i], data2[index+i]);
        }
    }
    ctxs.putImageData(imageDatas, 0, 0);

    var pixelatedZoomCtx = document.getElementById('pixelated-zoom').getContext('2d');
    pixelatedZoomCtx.imageSmoothingEnabled = false;
    pixelatedZoomCtx.mozImageSmoothingEnabled = false;
    pixelatedZoomCtx.webkitImageSmoothingEnabled = false;
    pixelatedZoomCtx.msImageSmoothingEnabled = false;

    var zoom = function(ctxx, x, y) {
        ctxx.drawImage(canvass,
            Math.min(Math.max(0, x - 5), canvass.width - 15),
            Math.min(Math.max(0, y - 5), canvass.height - 15),
            15, 15,
            0, 0,
            150, 150);
    };

    canvass.addEventListener('mousemove', function(event) {
        const x = event.layerX;
        const y = event.layerY;
        zoom(pixelatedZoomCtx, x, y);
    });

}

function setPixel(imageData, x, y, r, g, b, a) {
    var index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

function setPixelToWhite(imageData, x, y) {
    var index = (x + y * imageData.width) * 4;
    //setPixel(imageData, x, y, 255, 255, 255, 0);
    imageData.data[index+3] = 0;
}

function setPixelToBlack(imageData, x, y) {
    var index = (x + y * imageData.width) * 4;
    //setPixel(imageData, x, y, 0, 0, 0, 255);
    imageData.data[index+3] = 255;
}

function setPixelToBlackOrWhite(imageData, x, y, blackOrWhite) {
    if (blackOrWhite === 0) 
        setPixelToWhite(imageData, x, y);
    else 
        setPixelToBlack(imageData, x, y);
}

function setShare(imageData, xx, yy, subpixel) {
    setPixelToBlackOrWhite(imageData, xx, yy, subpixel[0]);
    setPixelToBlackOrWhite(imageData, xx, yy+1, subpixel[1]);
    setPixelToBlackOrWhite(imageData, xx+1, yy, subpixel[2]);
    setPixelToBlackOrWhite(imageData, xx+1, yy+1, subpixel[3]);
}


function get_random_subpixel(){
    var s1 = Math.floor(Math.random() * 4);
    var s2 = Math.floor(Math.random() * 4);
    while (s1===s2){
        s2 = Math.floor(Math.random() * 4);
    }
    var array = [0, 0, 0, 0];
    array[s1] = 1;
    array[s2] = 1;
    return array;
}

function inv_subpixel(subpixels){
    var array = subpixels;
    for (var i = 0; i < array.length; i++) {
        array[i] = 1-array[i];
    } 
    return array;
}
