//your JS code here. If required.
const sounds={
	'applausehttps':'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
	'boo':'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
	'gasp':'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
	'tada': 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
	'victory':'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
	'wrong': 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
};

let currentAudio;
function PlayingAudio(sound) {
	if(currentAudio){
		stopSound();
	}
	currentAudio=new Audio(`sounds/${sounds[sound]}`);
	currentAudio.play();
}

function stopSound() {
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
		currentAudio=null;
	}
}