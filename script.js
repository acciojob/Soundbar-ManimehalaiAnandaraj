//your JS code here. If required.
let Audio {
	
}
let currentAudio;
function PlayingAudio(sound) {
	if(currentAudio){
		stopSound();
	}
	currentAudio=new Audio(`sound/${horse}.mp3`);
	currentAudio.play();
}

function stopSound() {
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
		currentAudio=null;
	}
	
}