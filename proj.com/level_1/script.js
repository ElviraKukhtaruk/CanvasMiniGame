//import {object} from '/objects.js';

var canvas = document.getElementById("c1");     
var ctx = canvas.getContext("2d");
let score = 0;    
let box = 32;
let rocket = document.getElementById("rocket");
let timer = 0;
let mon = 0;
let isPaused = true;
let levels = 0;

canvas.width = window.innerWidth-10;
canvas.height = 2000;

const block2 = new Image();
block2.src = "./img/level1/ma6.png";

const block1 = new Image();
block1.src = "./img/level1/m2.png";

const coin = new Image();
coin.src = "./img/coin.png";

var obj = object.getObject();

object._setObjectConstructor(ctx, 0, 10, 290, 0);
object._setObjectConstructor(ctx, 10, 20, 690, 290);
object._setObjectConstructor(ctx, 20, 30, 900, 690);
object._setObjectConstructor(ctx, 30, 40, 900, 0);

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



let snakeX = 800;
let snakeY = 1700;

 var goIt = () => {
 	if(dir == "left"){
 		snakeX -= box;
 	}

 	if(dir == "right"){
 		snakeX += box;
 	}
 }



 var drawGame = () => {

 	$(".play").click(function(){
 		$(".game").css("display", "block");
 		$(".gameMenu").css("display", "none");
 		isPaused = true;

 	});

 	if(isPaused){
 		ctx.clearRect(0,0, canvas.width, canvas.height);
 		ctx.beginPath();
 		timer++;

 		for(let i=0; i < 10; i++){
 			ctx.beginPath();
 			ctx.drawImage(block1, obj[i].x, obj[i].y+=5);

 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[i].x == snakeX+32 && obj[i].y == dia || obj[i].x == snakeX+64 && obj[i].y == dia|| obj[i].x == snakeX && obj[i].y == dia){

 					obj[i] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (290 - 0) + 0))
 					};
 					score += 1; 
 				}
 			}

 			$(".again").click(function(){
 				obj[i] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (250 - 0) + 0))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");
 			});

 			if(obj[i].y > 1950){
 				obj[i] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (290 - 0) + 0))
 				};
 			}

 		}

 		for(let j=10; j < 20; j++){
 			ctx.beginPath();

 			ctx.drawImage(block1, obj[j].x, obj[j].y+=5);

 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[j].x == snakeX+32 && obj[j].y == dia||obj[j].x == snakeX+64 && obj[j].y == dia|| obj[j].x == snakeX && obj[j].y == dia){

 					obj[j] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (690 - 290) + 290))
 					};
 					score += 1;
 				}
 			}


 			$(".again").click(function(){
 				obj[j] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (690 - 290) + 290))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");
 			});

 			if(obj[j].y > 1950){
 				obj[j] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (690 - 290) + 290))
 				};
 			}

 		}

 		for(let a=20; a < 30; a++){
 			ctx.beginPath();
 			if(timer > 5000){
 				ctx.drawImage(block2, obj[a].x, obj[a].y+=5);
 			}
 			else{  
 				ctx.drawImage(block1, obj[a].x, obj[a].y+=5);
 			}

 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[a].x == snakeX+32 && obj[a].y == dia || obj[a].x == snakeX+64 && obj[a].y == dia || obj[a].x == snakeX && obj[a].y == dia){
 					obj[a] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (900 - 690) + 690))
 					};
 					score += 1;


 				}
 			}

 			$(".again").click(function(){
 				obj[a] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (900 - 690) + 690))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");

 			});

 			if(obj[a].y > 1950){
 				obj[a] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (900 - 690) + 690))
 				};
 			}

 		}

 		for(let b=30; b < 40; b++){
 			ctx.beginPath();

 			ctx.drawImage(coin, obj[b].x, obj[b].y+=5);


 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[b].x == snakeX+32 && obj[b].y == dia || obj[b].x == snakeX+64 && obj[b].y == dia|| obj[b].x == snakeX && obj[b].y == dia){

 					obj[b] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (800 - 0) + 0))
 					};
 					mon += 1;

 				}
 			}

 			$(".again").click(function(){
 				obj[b] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (250 - 0) + 0))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");
 				$(".a1").css("display", "block");
 				$(".a2").css("display", "block");
 				$(".a3").css("display", "block");
 				$(".sss").css("display", "none");
 				mon = 0;
 				score = 0;
 				timer = 0;

 			});

 			if(obj[b].y > 1950){
 				obj[b] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (250 - 0) + 0))
 				};
 			}

 		}



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
 		}

 		$(".exit").click(function(){
 			location.href = "../index.html";
 		});


 		$(".pause").click(function(){
 			if(isPaused == true){
 				isPaused = false;
 				let men = $(".menu").css("display");
 				$(".textMenu").text("Pause");
 				if(men !== "block"){
 					$(".menu").css("display", "block");
 					$(".exit").text("Exit");
 					$(".exitPause").css("display", "inline-block");
 					$(".exitPause").click(function(){
 						$(".menu").css("display", "none");
 						isPaused = true;
 					});
 				}
 			}

 		});

 		if(timer < 1000){
 			$(".ss").css("background-image", "url(./img/level1/day1.png)");
 			block1.src = "./img/level1/m2.png";
 		}
 		if(timer > 1000){
 			$(".ss").css("background-image", "url(./img/level1/day2.png)");
 			block1.src = "./img/level1/m1.png";
 		}
 		if(timer > 2000){
 			$(".ss").css("background-image", "url(./img/level1/day3.png)");
 			block1.src = "./img/level1/m3.png";
 		}

 		if(timer > 3000){
 			$(".ss").css("background-image", "url(./img/level1/day4.png)");
 			block1.src = "./img/level1/m4.png";
 		}

 		if(timer > 4000){
 			$(".ss").css("background-image", "url(./img/level1/day5.png)");
 			block1.src = "./img/level1/m5.png";
 		}

 		if(timer > 5000){
 			$(".ss").css("background-image", "url(./img/level1/day6.png)");
 			block1.src = "./img/level1/mb6.png";
 			block2.src = "./img/level1/ma6.png";
 		}

 		if(timer > 6000){
 			$(".ss").css("background-image", "url(./img/level1/day7.png)");
 			block1.src = "./img/level1/ma7.png";
 			block2.src = "./img/level1/mb7.png"; 
 		}

 		if(timer > 7000){
 			block1.src = "./img/level1/da.png";
 			block2.src = "./img/level1/da2.png";
 		}

 		if(timer > 8000){
 			block1.src = "./img/level1/u1.png";
 			block2.src = "./img/level1/u2.png";
 		}

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
 			if(localStorage.getItem("Level") == null){
 			  localStorage.setItem("Level", "1");
 		    }
 			mon = 0;

 		}
 		ctx.drawImage(rocket, snakeX, snakeY, 110, 130);
 	}
 }

 let game = setInterval(drawGame, 20);
 let goGame = setInterval(goIt, 90);














/*import {object} from './objects.js';

var canvas = document.getElementById("c1");     
var ctx = canvas.getContext("2d");
let score = 0;    
let box = 32;
let rocket = document.getElementById("rocket");
let timer = 0;
let mon = 0;
let isPaused = false;
let levels = 0;

canvas.width = window.innerWidth-10;
canvas.height = 2000;

const block2 = new Image();
block2.src = "img/ma6.png";

const block1 = new Image();
block1.src = "img/m2.png";

const coin = new Image();
coin.src = "img/coin.png";

var obj = object.getObject();

object._setObjectConstructor(ctx, 0, 10, 290, 0);
object._setObjectConstructor(ctx, 10, 20, 690, 290);
object._setObjectConstructor(ctx, 20, 30, 900, 690);
object._setObjectConstructor(ctx, 30, 40, 900, 0);

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



let snakeX = 800;
let snakeY = 1700;

 var goIt = () => {
 	if(dir == "left"){
 		snakeX -= box;
 	}

 	if(dir == "right"){
 		snakeX += box;
 	}
 }



 var drawGame = () => {

 	$(".play").click(function(){
 		$(".game").css("display", "block");
 		$(".gameMenu").css("display", "none");
 		isPaused = true;

 	});

 	if(isPaused){
 		ctx.clearRect(0,0, canvas.width, canvas.height);
 		ctx.beginPath();
 		timer++;

 		for(let i=0; i < 10; i++){
 			ctx.beginPath();
 			ctx.drawImage(block1, obj[i].x, obj[i].y+=5);

 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[i].x == snakeX+32 && obj[i].y == dia || obj[i].x == snakeX+64 && obj[i].y == dia|| obj[i].x == snakeX && obj[i].y == dia){

 					obj[i] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (290 - 0) + 0))
 					};
 					score += 1; 
 				}
 			}

 			$(".again").click(function(){
 				obj[i] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (250 - 0) + 0))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");
 			});

 			if(obj[i].y > 1950){
 				obj[i] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (290 - 0) + 0))
 				};
 			}

 		}

 		for(let j=10; j < 20; j++){
 			ctx.beginPath();

 			ctx.drawImage(block1, obj[j].x, obj[j].y+=5);

 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[j].x == snakeX+32 && obj[j].y == dia||obj[j].x == snakeX+64 && obj[j].y == dia|| obj[j].x == snakeX && obj[j].y == dia){

 					obj[j] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (690 - 290) + 290))
 					};
 					score += 1;
 				}
 			}


 			$(".again").click(function(){
 				obj[j] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (690 - 290) + 290))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");
 			});

 			if(obj[j].y > 1950){
 				obj[j] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (690 - 290) + 290))
 				};
 			}

 		}

 		for(let a=20; a < 30; a++){
 			ctx.beginPath();
 			if(timer > 5000){
 				ctx.drawImage(block2, obj[a].x, obj[a].y+=5);
 			}
 			else{  
 				ctx.drawImage(block1, obj[a].x, obj[a].y+=5);
 			}

 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[a].x == snakeX+32 && obj[a].y == dia || obj[a].x == snakeX+64 && obj[a].y == dia || obj[a].x == snakeX && obj[a].y == dia){
 					obj[a] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (900 - 690) + 690))
 					};
 					score += 1;


 				}
 			}

 			$(".again").click(function(){
 				obj[a] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (900 - 690) + 690))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");

 			});

 			if(obj[a].y > 1950){
 				obj[a] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (900 - 690) + 690))
 				};
 			}

 		}

 		for(let b=30; b < 40; b++){
 			ctx.beginPath();

 			ctx.drawImage(coin, obj[b].x, obj[b].y+=5);


 			for(let dia=1668; dia < 1830; dia++){
 				if(obj[b].x == snakeX+32 && obj[b].y == dia || obj[b].x == snakeX+64 && obj[b].y == dia|| obj[b].x == snakeX && obj[b].y == dia){

 					obj[b] = {
 						x: Math.floor((Math.random() * 59 + 1)) * box, 
 						y: Math.floor((Math.random() * (800 - 0) + 0))
 					};
 					mon += 1;

 				}
 			}

 			$(".again").click(function(){
 				obj[b] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (250 - 0) + 0))
 				};
 				isPaused = true;
 				$(".menu").css("display", "none");
 				$(".a1").css("display", "block");
 				$(".a2").css("display", "block");
 				$(".a3").css("display", "block");
 				$(".sss").css("display", "none");
 				mon = 0;
 				score = 0;
 				timer = 0;

 			});

 			if(obj[b].y > 1950){
 				obj[b] = {
 					x: Math.floor((Math.random() * 59 + 1)) * box, 
 					y: Math.floor((Math.random() * (250 - 0) + 0))
 				};
 			}

 		}



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
 		}

 		$(".exit").click(function(){
 			location.href = "index.php";
 		});


 		$(".pause").click(function(){
 			if(isPaused == true){
 				isPaused = false;
 				let men = $(".menu").css("display");
 				if(men !== "block"){
 					$(".menu").css("display", "block");
 					$(".exit").text("Exit");
 					$(".textMenu").text("Pause");
 					$(".exitPause").css("display", "inline-block");
 					$(".exitPause").click(function(){
 						$(".menu").css("display", "none");
 						isPaused = true;
 					});
 				}
 			}

 		});

 		if(timer < 100){
 			$(".ss").css("background-image", "url(img/day1.png)");
 			block1.src = "img/m2.png";
 		}
 		if(timer > 100){
 			$(".ss").css("background-image", "url(img/day2.png)");
 			block1.src = "img/m1.png";
 		}
 		if(timer > 200){
 			$(".ss").css("background-image", "url(img/day3.png)");
 			block1.src = "img/m3.png";
 		}

 		if(timer > 300){
 			$(".ss").css("background-image", "url(img/day4.png)");
 			block1.src = "img/m4.png";
 		}

 		if(timer > 400){
 			$(".ss").css("background-image", "url(img/day5.png)");
 			block1.src = "img/m5.png";
 		}

 		if(timer > 500){
 			$(".ss").css("background-image", "url(img/day6.png)");
 			block1.src = "img/mb6.png";
 			block2.src = "img/ma6.png";
 		}

 		if(timer > 600){
 			$(".ss").css("background-image", "url(img/day7.png)");
 			block1.src = "img/ma7.png";
 			block2.src = "img/mb7.png";
 		}

 		if(timer > 700){
 			block1.src = "img/da.png";
 			block2.src = "img/da2.png";
 		}

 		if(timer > 800){
 			block1.src = "img/u1.png";
 			block2.src = "img/u2.png";
 		}

 		if(timer > 900){
 			$(".ss").css("background-image", "url(img/day8.png)");
 			$(".sss").css("display", "block");
 			$(".menu").css("display", "block");
 			$(".textMenu").text("You Are Winner");
 			$(".exit").text("Next");
 			$(".exitPause").css("display", "none");
 			isPaused = false;
 			mon = 0;
 			localStorage.setItem("Level", "1");
 			location.href = "index2.php";

 		}
 		ctx.drawImage(rocket, snakeX, snakeY, 110, 130);
 	}
 }

 let game = setInterval(drawGame, 20);
 let goGame = setInterval(goIt, 90);



*/