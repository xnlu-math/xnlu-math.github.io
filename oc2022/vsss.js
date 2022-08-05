/*
created by 盧 暁南@ 山梨大学
2021/7
*/

var MAX_W = 500;

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

        if (2*canvas.width > MAX_W){
            var MAX_H = canvas.height / canvas.width * MAX_W;
            canvas2.width = MAX_W;
            canvas2.height = MAX_H;
        }
        else{
            canvas2.width = 2*canvas.width;
            canvas2.height = 2*canvas.height;
        }

        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx2.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, canvas2.width, canvas2.height);
    };
    img.src = img_name;
    //img.crossOrigin = "Anonymous";

    var imageData=ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    var newColor = {r:0, g:0, b:0, a:0};
    for (var i = 0; i < data.length; i += 4) {
        var r = data[i], g = data[i+1], b = data[i+2];
        if(r == 255 && g == 255 && b == 255){ 
            // Change the white 
            data[i] = newColor.r;
            data[i+1] = newColor.g;
            data[i+2] = newColor.b;
            data[i+3] = newColor.a;
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.putImageData(imageData, 0, 0);​

}

function copy_resize(id_from, it_to, scale) {
    var canvas = document.getElementById(id_from);//'sample'
    var canvas2 = document.getElementById(it_to);//'sample2'
    var ctx2 = canvas2.getContext('2d');

    if (scale * canvas.width > MAX_W){
        var MAX_H = canvas.height / canvas.width * MAX_W;
        canvas2.width = MAX_W;
        canvas2.height = MAX_H;
    }
    else{
        canvas2.width = scale * canvas.width;
        canvas2.height = scale * canvas.height;
    }

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvas2.width, canvas2.height);
}

function draw(str) {
    var canvas = document.getElementById('sample');
    var ctx = canvas.getContext('2d');
    ctx.font = "48px serif";

    str_width = ctx.measureText(str).width;
    //str_height = ctx.measureText(str).height;
    canvas.width = str_width + 20;
    canvas.height = 75;

    ctx.font = "48px serif";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(str, 10, 50);
}

function generate_text() {
    var secret_str = document.getElementById('secret').value;
    draw(secret_str);
    copy_resize('sample', 'sample2', 2);
}

function generate_shares() {
    var canvas = document.getElementById('sample');
    var ctx = canvas.getContext('2d');
    var imageData=ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    //ctx.putImageData(imageData, 0, 0);

    var canvas1 = document.getElementById('share1');
    var ctx1 = canvas1.getContext('2d');

    var canvas2 = document.getElementById('share2');
    var ctx2 = canvas2.getContext('2d');

    canvas1.width = 2*canvas.width;
    canvas1.height = 2*canvas.height;
    canvas2.width = 2*canvas.width;
    canvas2.height = 2*canvas.height;

    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    var imageData1=ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    var data1 = imageData1.data;
  
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    var imageData2=ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    var data2 = imageData2.data;

    for (var y = 0; y < imageData.height; y++) {
        for (var x = 0; x < imageData.width; x++) {
            var xx = x*2; // x coor. of 1st subpixel of shares 
            var yy = y*2; // y coor. of 1st subpixel of shares 
            var index = (x + y * imageData.width) * 4;
            //var index2 = (xx + yy * imageData2.width) * 4;

            var subpixels = get_random_subpixel();
            var ave_rgb = (data[index] + data[index+1] + data[index+2])/3;
            // white pixel
            if (ave_rgb > 128 || data[index+3] < 10){
                setShare(imageData1, xx, yy, subpixels);
                setShare(imageData2, xx, yy, subpixels);
            } // black pixel
            else{
                setShare(imageData1, xx, yy, subpixels);
                setShare(imageData2, xx, yy, inv_subpixel(subpixels));
            }
        }
    }
    
    var mode_colors =[
        [ 0,     0,   0 ],
        [ 208,  17,  38 ],
        [ 0,   158, 150 ],
        [ 0,   123, 193 ],
        [ 95,   36, 128 ]
    ];
    const share_mode1 = document.getElementById('share1_mode').selectedIndex;
    if (share_mode1 > 0 ){ //red or green or blue or budou or aoi mode
        for (var i = 0; i < data1.length; i += 4) {
            if (data1[i] == 0 &&  data1[i+1] == 0 && data1[i+2] == 0) {
                data1[i] = mode_colors[share_mode1][0];
                data1[i+1] = mode_colors[share_mode1][1];
                data1[i+2] = mode_colors[share_mode1][2];
            }
        }
    } 

    const share_mode2 = document.getElementById('share2_mode').selectedIndex;
    if (share_mode2 > 0 ){ //red or green or blue or budou or aoi mode
        for (var i = 0; i < data2.length; i += 4) {
            if (data2[i] == 0 &&  data2[i+1] == 0 && data2[i+2] == 0) {
                data2[i] = mode_colors[share_mode2][0];
                data2[i+1] = mode_colors[share_mode2][1];
                data2[i+2] = mode_colors[share_mode2][2];
            }
        }
    } 

    ctx1.putImageData(imageData1, 0, 0);
    ctx2.putImageData(imageData2, 0, 0);

    copy_resize('share1', 'share1s', 1);
    copy_resize('share2', 'share2s', 1);
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
            if ( data1[index]==255 && data1[index+1]==255 && data1[index+2]==255 ){
                // data1 is white
                for (var i = 0; i < 4; i++)  datas[index+i] = data2[index+i];
            }
            else if ( data2[index]==255 && data2[index+1]==255 && data2[index+2]==255 ){
                // data2 is white
                for (var i = 0; i < 4; i++)  datas[index+i] = data1[index+i];
            }
            else {
                for (var i = 0; i < 4; i++)  datas[index+i] = (data1[index+i] + data2[index+i])/2; 
                // Math.max(data1[index+i], data2[index+i]);
                // datas[index+3] = datas[index+3]/2; // alpha decrease
            }
        }
    }
    ctxs.putImageData(imageDatas, 0, 0);

    copy_resize('superimposed', 'superimposeds', 1);
    var canvasss = document.getElementById('superimposeds');

    var pixelatedZoomCtx = document.getElementById('pixelated-zoom').getContext('2d');
    pixelatedZoomCtx.imageSmoothingEnabled = false;
    pixelatedZoomCtx.mozImageSmoothingEnabled = false;
    pixelatedZoomCtx.webkitImageSmoothingEnabled = false;
    pixelatedZoomCtx.msImageSmoothingEnabled = false;

    var zoom = function(ctxss, x, y) {
        ctxss.drawImage(canvasss,
            Math.min(Math.max(0, x - 5), canvasss.width - 15),
            Math.min(Math.max(0, y - 5), canvasss.height - 15),
            15, 15,
            0, 0,
            150, 150);
    };

    canvasss.addEventListener('mousemove', function(event) {
        x = event.offsetX;
        y = event.offsetY;
        //alert("x=", x, ", y=", y);
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
    setPixel(imageData, x, y, 255, 255, 255, 255);
    //imageData.data[index+3] = 0;
}

function setPixelToBlack(imageData, x, y) {
    var index = (x + y * imageData.width) * 4;
    setPixel(imageData, x, y, 0, 0, 0, 255);
    //imageData.data[index+3] = 255;
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


function gen_logo1() {
    load_image('./img/Y-3.jpeg');
    document.getElementById('share1_mode').selectedIndex = 4;
    document.getElementById('share2_mode').selectedIndex = 4;
}

function gen_logo2() {
    load_image('./img/B-5.jpeg');
    document.getElementById('share1_mode').selectedIndex = 3;
    document.getElementById('share2_mode').selectedIndex = 3;
}