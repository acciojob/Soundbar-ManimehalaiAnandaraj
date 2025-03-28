//your JS code here. If required.
let Audio {
	
}
let currentAudio;
function PlayingAudio(sound) {
	if(currentAudio){
		stopSound();
	}
	currentAudio=new Audio(`sound/${"C:\Users\AnandMehalai\Downloads\Theatre Applause - QuickSounds.com.mp3"}.mp3`);
	currentAudio.play();
}

function stopSound() {
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
		currentAudio=null;
	}
	
}