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
    if(results.length > 0){
        console.log(results);
    }
}