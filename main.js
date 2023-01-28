noseX = 0;
noseY = 0;
difference = 0;
giname = "";
function getName(){
    giname = document.getElementById("giname").value;
    console.log("name given = "+giname);
}
function setup(){
    canvas = createCanvas(550,500);
    canvas.position(800,150);

    video = createCapture(VIDEO);
    video.size(550,500)

    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotPoses);
}
function modelloaded(){
    console.log("Posenet ACTIVATED");
}
function gotPoses(results){
if(results.length > 0 && giname != ""){
    console.log(results);
    noseX = Math.floor(results[0].pose.nose.x);
    noseY = Math.floor(results[0].pose.nose.y);
    console.log("NoseX = "+noseX+" NoseY = "+noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor((leftWristX - rightWristX)/4);
    console.log("left Wrist X = "+leftWristX+" Right wrist X = "+rightWristX+" Difference = "+difference);
}
}
function draw(){
    background(56, 56, 56);
    if(giname != ""){
        document.getElementById("font-size").innerHTML = "Font-size : " + difference+"px"; 
        textSize(difference)
        text(giname,noseX,noseY)
    }
}