
var filmroll = document.getElementById('the-film-roll');
var scrolling = false;
 
function scroll(start, end){
	var current = start; 

	function move(){
		console.log(current - 15, end) 
		filmroll.style.left = current + 'px';

		if (start > end){ 
		current = Math.max(current - 15, end); 
		} else {
		current = Math.min(current + 15, end);
		}

		if (current == end){
			clearInterval(loop);
			scrolling = false;
		}
	}
	var loop = setInterval(move, 30); 
	scrolling = true;
}


// Creo funzione per far muovere la slide con freccie

function handleEvent(e) {
	if (!scrolling){
backAndForth(e.keyCode);
	}
}

var current = 0;

function backAndForth(keyCode) { 
	// Left
	if (keyCode == 37){
		scroll(current, current - 616);
		current -= 616;  //This is a shortcut for write: current = current - 616;
		//scroll(current, current + 616) == false;
		}
	// Right
	if (keyCode == 39){
		scroll(current, current + 616);
		current += 616;
		//scroll(current, current - 616) == false;
		}
}
document.addEventListener('keydown', handleEvent);



var photos = [
	"breakfast.jpeg",
	"dog.jpeg",
	"smalldog.jpeg"	
];

var htmlGallery = "";

for( var i = 0; i < photos.length; i++) {
htmlGallery += "<img src=" + photos[i] + ">"; //gli dico che ogni volta che un valore è storato in photos[i] gli verra aggiunto un attributo src 
}


filmroll.innerHTML = htmlGallery;