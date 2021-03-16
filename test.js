var bg = document.getElementById("particles-js");

	document.addEventListener('keydown', function(){
		// alert("Vous avez Clicker");

		domColor();
	});

	function getRandomColor(){
		var letters ="0123456789ABCDEF";
		var colors = "#";
		for(var i = 0; i < 6; i++){
			colors = colors + letters[Math.floor(Math.random() * letters.length)];
		}
		console.log(colors);
		return colors;   
	}


function playMusic(key)
{
	
switch (key){
	case "a":
		var audio = new Audio("sounds/clap.wav");
		audio.play();
		break;

	case "s";
		var audio = new Audio("sounds/hihat.wav");
		audio.play();
		break;

	case "d";
		var audio = new Audio("sounds/kick.wav");
		audio.play();
		break;
		
	case "f";
		var audio = new Audio("sounds/openhat.wav");
		audio.play();
		break;

	case "g";
		var audio = new Audio("sounds/boom.wav");
		audio.play();
		break;
		
	case "h";
		var audio = new Audio("sounds/ride.wav");
		audio.play();
		break;			

	case "j";
		var audio = new Audio("sounds/snare.wav");
		audio.play();
		break;
		
	case "k";
		var audio = new Audio("Sounds/tom.wav");
		audio.play();
		break;
		
	case "l";
		var audio = new Audio("Sounds/tink.wav");
		audio.play();
		break;
		
	default :
			var audio = new Audio("Sounds/lose.mp3");
			audio.play();
			break;

}


}






/*function playSound(e) {

		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		
		audio.currentTime = 0;

		audio.play();


	}




window.addEventListener('keydown', playSound);
	// bg.style.backgroundColor = "black";