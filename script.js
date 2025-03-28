//your JS code here. If required.
 const sound=[
	 "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
	 "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
 ];
let currentAudio;
function PlayingAudio(sound) {
	if(currentAudio){
		stopSound();
	}
	currentAudio=new Audio(`sound/${"sound"}.mp3`);
	currentAudio.play();
}

function stopSound() {
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
		currentAudio=null;
	}
	
}