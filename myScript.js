	var bg = document.getElementById("particles-js");
	var key;

	document.addEventListener('keydown', function(){
		// alert("Vous avez Clicker");

		bg.style.backgroundColor = getRandomColor();
		key = playMusic();
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


	// bg.style.backgroundColor = "black";
 
	window.addEventListener('keydown', playMusic);