
function playAudio(){
    localStorage.setItem("play", true);
    document.querySelector("audio").play();
    document.getElementById('autoplay-container').style.display = "none";
}
function stopAudio(){
    document.getElementById('autoplay-container').style.display = "none";
    localStorage.setItem("play", false);
}
setTimeout(() => {
    if(localStorage.getItem("play") == true){
        playAudio()
    }else{
        console.log("usuario rejeitou")
    }
  }, "10000");
