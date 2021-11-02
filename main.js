mouthX = 0;
mouthY = 0;



function preload(){
    creeper_aw_man = loadImage("https://i.postimg.cc/MK9kYqwb/b88b76d642035e6.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet=ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}
function modalLoaded(){
    console.log("PoseNet Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);

        mouthX = results[0].pose.nose.x-15;
        mouthY = results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(creeper_aw_man, mouthX, mouthY, 50, 50);
}

function take_snapshot(){
    save("mumbo_jumbo.png");
}