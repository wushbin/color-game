function gameplayScene() {
	console.log(document)
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
	var resetButton = document.querySelector("#reset");
	resetButton.addEventListener("click", function(){
		reset();
	} );

	colorDis.textContent = pickedColor;
	
	// init();
	this.init = function () {
		setupModeButtons();
		setupSquares();
		reset();
	}

	setupModeButtons = function(){
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
	setupSquares = function() {
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
					console.log(messageDis)
					messageDis.textContent = "Try again";
				}
			});
		}
	}

	reset = function(){
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

	changeColor = function(color) {
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
	}

	pickColor = function() {
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}
	generateRandomColors = function(num) {
		var arr = [];
		for (var i = 0; i < num; i++) {
			arr.push(randomColor());
		}
		return arr;
	}
	randomColor = function() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}
