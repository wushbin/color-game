var numberOfSquares = 6;

var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDis = document.getElementById("colorDis");
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeBtn = document.querySelectorAll(".mode");

colorDis.textContent = pickedColor;

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset()
}

function setupModeButtons(){
	for (var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent === "Easy"){
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}
			reset();
			h1.style.backgroundColor = "steelblue";
		});
	}
}
 function setupSquares() {
 	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor){
				messageDis.textContent = "Correct";
				changeColor(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Paly Again";
			} else {
				this.style.backgroundColor = "#232323";
				messageDis.textContent = "Try again";
			}
		});
	}
 }



function reset(){
	messageDis.textContent = "";
	this.textContent = "new colors"
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDis.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";		

}

var resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
	reset();
} );



function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}