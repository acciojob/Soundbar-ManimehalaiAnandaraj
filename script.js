//your JS code here. If required.
let currentAudio;
function playSound(sound) {
	if(currentAudio){
		stopSound();
	}
	currentAudio=new Audio(`sound/${sound}.mp3`);
	currentAudio.play();
}

function stopSound() {
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
		currentAudio=null;
	}
	
}