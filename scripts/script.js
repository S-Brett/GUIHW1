
window.onload = function() {
	main();
}

let MESSAGES = [];

document.addEventListener('keydown', key_down);
document.addEventListener('keyup', key_up);

function key_down(key){
	console.log(key.key);
	console.log(key);
	let input = key.key.toLowerCase();

	if(!MESSAGES.includes(key.key)) MESSAGES.push(key.key);
}

function key_up(key){
	console.log(key.key);
	let input = key.key.toLowerCase();

	MESSAGES.pop(key.key);
}

function main(){
	


	function draw(_context, _drawable){
		_context.fillstyle = _drawable.color;
		_context.fillRect(_drawable.x, _drawable.y, _drawable.width, _drawable.height)
	}

	function check_collision(_obj1, _obj2){

	}

	const FRAMES_PER_SECOND = 30;
	const FRAME_MIN_TIME = (1000/60) * (60 / FRAMES_PER_SECOND) - (1000/60) * 0.5;
	var lastFrameTime = 0;

	let canvas = document.getElementById("game");
	let ctx = canvas.getContext("2d");
	let deltaT = 0;
	let C_WIDTH = canvas.width;
	let C_HEIGHT = canvas.height;

	console.log("Canvas initialized with \n\tHeight: " + C_HEIGHT + " | Width: " + C_WIDTH);

	let player = {x: 0, y:0, dx: 0, dy: 0, width:20, height:20, color:"green", speed:15};
	player.x = C_WIDTH/2;
	player.y = C_HEIGHT/2;

	let drawables = [];
	drawables.push(player);

	function update(time){

		// --- logic section --- //
	    deltaT = 0.01 * (time-lastFrameTime);
	    lastFrameTime = time;
	
	    // console.log(MESSAGES);

	    for(var i=0; i<MESSAGES.length; i++){
			switch(MESSAGES[i]){
				case 'w': player.dy = -1; break;
				case 'a': player.dx = -1; break;
				case 's': player.dy = 1; break;
				case 'd': player.dx = 1; break;

				default: break;
			}
	    }

	    player.x = player.x + player.speed*player.dx*deltaT;
	    player.y = player.y + player.speed*player.dy*deltaT;
	    player.dy = 0;
	    player.dx = 0;

		// --- draw section --- //
		ctx.clearRect(0,0,C_WIDTH, C_HEIGHT);
		drawables.forEach(element => draw(ctx, element));

	    requestAnimationFrame(update);
	}

	requestAnimationFrame(update);


	
}

