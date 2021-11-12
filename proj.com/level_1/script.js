//import {object} from '/objects.js';

var canvas = document.getElementById("c1");
var ctx = canvas.getContext("2d");
let score = 0;
let mon = 0;
let box = 32;
let rocket = document.getElementById("rocket");
let timer = 0;
let isPaused = true;
let initialspeed = 5.0;
let speed = initialspeed;
let speedup = 0.001;

canvas.width = window.innerWidth;
canvas.height = 2000;

const block2 = new Image();
block2.src = "./img/level1/ma6.png";

const block1 = new Image();
block1.src = "./img/level1/m2.png";

const coin = new Image();
coin.src = "./img/coin.png";

var obj = object.getObject();

for(let i = 0; i < Math.round(canvas.width/200); i++) object._setObjectConstructor(ctx, 1, 0, 0, 290, block1, canvas.width, box);
for(let i = 0; i < Math.round(canvas.width/200); i++) object._setObjectConstructor(ctx, 1, 0, 290, 690, block1, canvas.width, box);
for(let i = 0; i < Math.round(canvas.width/200); i++) object._setObjectConstructor(ctx, 1, 0, 690, 900, block2, canvas.width, box);
for(let i = 0; i < Math.round(canvas.width/200); i++) object._setObjectConstructor(ctx, 0, 1, 0, 900, coin, canvas.width, box);

document.addEventListener("keydown", direction);
document.addEventListener("keyup", directionUp);

let dir;

function direction(event){

	if(event.keyCode == 37){
		dir = "left";
	}

	else if(event.keyCode == 39){
		dir = "right";
	}
}

function directionUp(event){
	if(event.keyCode == 37 || event.keyCode == 39){
		dir = null;
	}
}

let snakeX = (canvas.width-2*box)/2;
let snakeY = 1700;

var goIt = () => {
	if(dir == "left" && !(snakeX < 0)){
		snakeX -= box;
	}

	if(dir == "right" && !(snakeX + box > canvas.width - 2*box)){
		snakeX += box;
	}
}


var drawGame = () => {

	$(".play").click(function() {
		$(".game").css("display", "block");
		$(".gameMenu").css("display", "none");
		isPaused = true;
	});

	if(isPaused) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		timer++;
		speed += speedup;

		obj.forEach((e) => {
			ctx.beginPath();
			if(e.image == block2 && !(timer > 5000)) {
				ctx.drawImage(block1, e.x, e.y+=speed);
			}
			else {
				ctx.drawImage(e.image, e.x, e.y+=speed);
			}

			for(let dia=1668; dia < 1830; dia++) {
				if(e.x == snakeX+32 && Math.round(e.y) == dia || e.x == snakeX+64 && Math.round(e.y) == dia || e.x == snakeX && Math.round(e.y) == dia){
					e.x = calculateX(canvas.width, box);
					e.y = calculateY(e.placeMin, e.placeMax);
					score += e.damage;
					mon += e.money;
				}
			}

			$(".again").click(function() {
				e.x = calculateX(canvas.width, box);
				e.y = calculateY(e.placeMin, e.placeMax);
				isPaused = true;
				$(".menu").css("display", "none");
				$(".a1").css("display", "block");
				$(".a2").css("display", "block");
				$(".a3").css("display", "block");
				$(".sss").css("display", "none");
				mon = 0;
				score = 0;
				timer = 0;
				speed = initialspeed;
			});

			if(e.y > 1950) {
				e.x = calculateX(canvas.width, box);
				e.y = calculateY(e.placeMin, e.placeMax);
			}
		});

		$(".coinLen").text(mon);

		if(score == 1){
			$(".a1").css("display", "none");
		}

		if(score == 2){
			$(".a2").css("display", "none");
		}

		if(score == 3){
			$(".a3").css("display", "none");
			$(".exit").text("Exit");
			$(".textMenu").text("Game Over");
			$(".menu").css("display", "block");
			$(".exitPause").css("display", "none");
			isPaused = false;
			score = 0;
			timer = 0;
			speed = initialspeed;
		}

		$(".exit").click(function(){
			location.href = "../index.html";
		});


		$(".pause").click(function(){
			if(isPaused == true) {
				isPaused = false;
				let men = $(".menu").css("display");
				$(".textMenu").text("Pause");
				if(men !== "block") {
					$(".menu").css("display", "block");
					$(".exit").text("Exit");
					$(".exitPause").css("display", "inline-block");
					$(".exitPause").click(function() {
						$(".menu").css("display", "none");
						isPaused = true;
					});
				}
			}

		});

		if(timer > 9000){
			$(".ss").css("background-image", "url(./level_1/img/level1/day8.png)");
			$(".sss").css("display", "block");
			$(".menu").css("display", "block");
			$(".textMenu").text("You Are Winner");
			//$(".exit").text("Next");
			//$(".exitPause").css("display", "none");
			isPaused = false;
			let newMon = Number(localStorage.getItem("Money"));
			localStorage.setItem("Money", Number(mon) + newMon);
			if(localStorage.getItem("Level") == null) {
				localStorage.setItem("Level", "1");
			}
			mon = 0;
		}
		else if(timer > 8000) {
			block1.src = "./img/level1/u1.png";
			block2.src = "./img/level1/u2.png";
		}
		else if(timer > 7000) {
			block1.src = "./img/level1/da.png";
			block2.src = "./img/level1/da2.png";
		}
		else if(timer > 6000) {
			$(".ss").css("background-image", "url(./img/level1/day7.png)");
			block1.src = "./img/level1/ma7.png";
			block2.src = "./img/level1/mb7.png";
		}
		else if(timer > 5000) {
			$(".ss").css("background-image", "url(./img/level1/day6.png)");
			block1.src = "./img/level1/mb6.png";
			block2.src = "./img/level1/ma6.png";
		}
		else if(timer > 4000) {
			$(".ss").css("background-image", "url(./img/level1/day5.png)");
			block1.src = "./img/level1/m5.png";
		}
		else if(timer > 3000) {
			$(".ss").css("background-image", "url(./img/level1/day4.png)");
			block1.src = "./img/level1/m4.png";
		}
		else if(timer > 2000) {
			$(".ss").css("background-image", "url(./img/level1/day3.png)");
			block1.src = "./img/level1/m3.png";
		}
		else if(timer > 1000) {
			$(".ss").css("background-image", "url(./img/level1/day2.png)");
			block1.src = "./img/level1/m1.png";
		}
		else {
			$(".ss").css("background-image", "url(./img/level1/day1.png)");
			block1.src = "./img/level1/m2.png";
		}

		ctx.drawImage(rocket, snakeX, snakeY, 110, 130);
	}
}

let game = setInterval(drawGame, 20);
let goGame = setInterval(goIt, 90);
