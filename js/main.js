/*
	the main code of the game, primarily drawing to the canvas
*/

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

let l, r; // abbreviations for left and right

// every frame, runs 60 fps, for technical stuff
function tick() {
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;

	if (l) player.x -= 0.005;
	if (r) player.x += 0.005;
}

setInterval(tick, 100/6);

const player = {
	x: 0.5,
}

// every frame, for rendering stuff
function init() {
	ctx.clearRect(0, 0, xtopixel(1), ytopixel(1));

	// background
	ctx.fillStyle = '#5050A0';
	ctx.fillRect(0, 0, xtopixel(1), ytopixel(1));

	const man = new Image();
	man.src = 'media/images/man.png';

	// edit this parts when editing y spawn point                  ---
	ctx.drawImage(man, xtopixel(player.x - (0.075 / 2)), (ytopixel(0.68) - xtopixel(0.075 / 2)), xtopixel(0.075), xtopixel(0.075));

	requestAnimationFrame(init);
}

function keyDownHandler(event) {
	if(event.keyCode == 39) {
		r = true;
	}
	else if(event.keyCode == 37) {
		l = true;
	}
}

function keyUpHandler(event) {
	if (event.keyCode == 39) {
		r = false;
	}
	else if (event.keyCode == 37) {
		l = false;
	}
}
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);