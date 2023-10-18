//let img;
let video;
let detector;
let detections = [];


function preload() {
  //img = loadImage('Dog_Breeds.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotDetections(error, results) { if (error) {
  console.error(error);
}
  console.log(results);
  for(let i = 0; i < results.length; i++) {
    let object = results[i];
    if(object.label == 'person'){
        stroke(0,255,0);   
    }else{
        stroke(0,0,255);
    }
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(25);
    text(object.label, object.x + 15, object.y+30);
  }
  
  detections = results;
  detector.detect(video, gotDetections);
                                    
}


 function setup() {
   createCanvas(640, 480);
   video = createCapture(VIDEO);
   video.size(640,480);
   video.hide();
   detector.detect(video, gotDetections);
 }



function draw() {
  image(video, 0, 0);
}
