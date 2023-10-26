song1 = ""
song2 = ""
leftwristscore=""
rightwristscore=""
function preload() {
    song1 = loadSound("One.mp3")
    song2 = loadSound("harry.mp3")
}



function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotposes)
}


function draw() {
    image(video, 0, 0, 600, 500)
    if (leftwristscore>rightwristscore) {
        song1.play()
        song2.stop()
    }else{
        song2.play()
        song1.stop()
    }
}

function gotposes(result){
if (result.length>0) {
    console.log(result);
    leftwristscore=result[0].pose.keypoints[9].score
    rightwristscore=result[0].pose.keypoints[10].score
}
}

function modelloaded(){
    console.log("posenet is inisilized");
}