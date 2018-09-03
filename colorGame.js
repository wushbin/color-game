function gameplayScene(document) {
	console.log(document)
	this.numberOfSquares = 6;

	this.colors = [];
	this.pickedColor;

	this.squares = document.querySelectorAll(".square");
	console.log(this.squares);
	this.colorDis = document.getElementById("colorDis");
	console.log(this.colorDis);
	this.messageDis = document.querySelector("#message");
	console.log(this.messageDis);
	console.log(this.messageDis);
	this.h1 = document.querySelector("h1");
	this.easyBtn = document.querySelector("#easyBtn");
	this.hardBtn = document.querySelector("#hardBtn");
	this.modeBtn = document.querySelectorAll(".mode");
	this.resetButton = document.querySelector("#reset");
	
	this.resetButton.addEventListener("click", function(){
		this.reset();
	} );

	//this.colorDis.textContent = this.pickedColor;

	// init();
	this.init = function () {
		this.setupModeButtons();
		this.setupSquares();
		this.reset();
	}

	this.setupModeButtons = function(){
		for (var i = 0; i < modeBtn.length; i++) {
			this.modeBtn[i].addEventListener("click", function(){
				this.modeBtn[0].classList.remove("selected");
				this.modeBtn[1].classList.remove("selected");
				this.classList.add("selected");
				if (this.textContent === "Easy"){
					this.numberOfSquares = 3;
				} else {
					this.numberOfSquares = 6;
				}
				this.reset();
				this.h1.style.backgroundColor = "steelblue";
			});
		}
	}
	this.setupSquares = function() {
		for (var i = 0; i < this.squares.length; i++) {
			this.squares[i].style.backgroundColor = this.colors[i];
			this.squares[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;
				if (clickedColor === this.pickedColor){
					this.messageDis.textContent = "Correct";
					this.changeColor(this.pickedColor);
					this.h1.style.backgroundColor = this.pickedColor;
					this.resetButton.textContent = "Paly Again";
				} else {
					this.style.backgroundColor = "#232323";
					this.messageDis.textContent = "Try again";
				}
			});
		}
	}

	this.reset = function(){
		this.messageDis.textContent = "";
		this.textContent = "new colors"
		this.colors = this.generateRandomColors(this.numberOfSquares);
		this.pickedColor = this.pickColor();
		this.colorDis.textContent = this.pickedColor;
		for (var i = 0; i < this.squares.length; i++) {
			if (this.colors[i]) {
				this.squares[i].style.backgroundColor = this.colors[i];
				this.squares[i].style.display = "block";
			} else {
				this.squares[i].style.display = "none";
			}
		}
		this.h1.style.backgroundColor = "steelblue";		

	}

	this.changeColor = function(color) {
		for (var i = 0; i < this.squares.length; i++) {
			this.squares[i].style.backgroundColor = color;
		}
	}

	this.pickColor = function() {
		var random = Math.floor(Math.random() * this.colors.length);
		return colors[random];
	}

	this.generateRandomColors = function(num) {
		var arr = [];
		for (var i = 0; i < num; i++) {
			arr.push(this.randomColor());
		}
		return arr;
	}
	this.randomColor = function() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}
