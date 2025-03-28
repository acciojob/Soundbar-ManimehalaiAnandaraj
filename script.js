//your JS code here. If required.
 const sound=[
	'baralho-101467.mp3',
	 'aduio-1-20577.mp3',
		'baralho-101467.mp3',
	 'aduio-1-20577.mp3',
	'baralho-101467.mp3',
	 'baralho-101467.mp3',
	 

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