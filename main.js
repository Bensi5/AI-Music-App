song1="";
song2="";
leftWristX=0;
leftWristX=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound("Pretty girl.mp3");
    song2=loadSound("Beliver.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=poseNet(video,modelloaded);
    poseNet.on("pose",getposes);
}
function draw(){
    image(video,0,0,600,500);
}

function modelloaded(){
    console.log("Model is loaded");
}
function getposes(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        console.log("left wrist x ="+leftWristX+"   left wrist y="+leftWristY);
        console.log("right wrist x="+rightWristX+"   right wrist y = "+rightWristY);
    }
}