	var bg = document.getElementById("particles-js");
	var key;

	document.addEventListener('keydown', function(){
		// alert("Vous avez Clicker");

		bg.style.backgroundColor = getRandomColor();
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


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      
      
    if (!audio) return;
      
    key.classList.add('playing');
      
    audio.currentTime = 0;
    audio.play();
  }
    
 function removeTransition(e) {

    e.target.classList.remove('playing');
     
  }
    
    
  const keys = Array.from(document.querySelectorAll('.key'));
    
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


	// bg.style.backgroundColor = "black";
 
	window.addEventListener('keydown', playSound);