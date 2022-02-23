noseX = 0;
noseY = 0;

function preload(){
whiskers = loadImage("https://i.postimg.cc/bwSRj7hm/whiskers-without-bg.png");
}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , getPoses);

}

function modelLoaded(){
    console.log("Model is intialized");
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("nose x = "+noseX);
        console.log("nose x = "+noseX);
        
    }
}

function draw(){
image(video,0,0,300,300);
image(whiskers , noseX-50 , noseY-70 , 100 , 130);
}


function take_snapshot(){
    save("myFilterImage.png");
}