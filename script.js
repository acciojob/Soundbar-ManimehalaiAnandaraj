//your JS code here. If required.
 const sounds={
	'applause':'baralho-101467.mp3',
	 'boo':'aduio-1-20577.mp3',
		'gasp':'baralho-101467.mp3',
	'tada': 'aduio-1-20577.mp3',
	'victory':'baralho-101467.mp3',
	 'wrong': 'baralho-101467.mp3',
	 

 };
	 
let currentAudio;
function PlayingAudio(sound) {
	if(currentAudio){
		stopSound();
	}
	currentAudio=new Audio(`sound/${sounds[sound]});
	currentAudio.play();
}

function stopSound() {
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
		currentAudio=null;
	}
	
}