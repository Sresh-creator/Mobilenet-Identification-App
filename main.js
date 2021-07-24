Webcam.set({
    width:300,
    height:300,
    image_format : 'png',
    png_quality:90,

    constraints: {
        facingMode: "environment"
    }
});

Webcam.attach('#camera');

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}
function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
console.error(error);
     } else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
    }
}
classifier = ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');
}
