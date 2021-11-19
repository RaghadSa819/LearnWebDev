var colors = [];
var pickedColor ;
var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#Reset");
//var easyBtn = document.querySelector("#Ebtn");
//var hardBtn = document.querySelector("#Hbtn");
var modeButtons = document.querySelectorAll(".mode");

init();



function init(){


	setUpModeButtons();
	setUpSquares();
	reset();

}






function setUpModeButtons(){

	for(var i = 0 ; i<modeButtons.length ; i++){
	modeButtons[i].addEventListener("click" , function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
	
		//turnary operator (same as if-else statement) conditional statement
		 this.textContent == "Easy" ? numOfSquares = 3 : numOfSquares = 6 ;

		 reset();



	});
}
}






function setUpSquares(){

	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}








function reset(){


	//generate all new colors
	colors = generateRandomColors(numOfSquares);

	//pick a new color
	pickedColor = pickColor();

	//change the color display to match the picked color

	colorDisplay.textContent = pickedColor;
	resetButton.textContent ="New Colors";
	messageDisplay.textContent = "";


for(var i = 0; i < squares.length; i++){
	if(colors[i]){
		squares[i].style.display = "block";
	squares[i].style.background = colors[i];
}else{
	squares[i].style.display = "none";
}
}
h1.style.background = "steelBlue";

}


//I GOT RID OF THESE BC NOW WE HAVE THE ABOVE reset() FUNCTION THAT
// DOES EVERYTHING DOWN HERE ..

// easyBtn.addEventListener("click" , function(){

// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfSquares = 3 ;

// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0 ; i<squares.length ; i++){
// 		if (colors[i] ){
// 			squares[i].style.background = colors[i];
// 		}else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });



// hardBtn.addEventListener("click" , function(){

// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6;
// 		colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0 ; i<squares.length ; i++){
		
// 			squares[i].style.background = colors[i];
		
// 			squares[i].style.display = "block";
		
// 	}
// });




resetButton.addEventListener("click" , function(){

	//generate all new colors
	colors = generateRandomColors(numOfSquares);

	//pick a new color
	pickedColor = pickColor();

	//change the color display to match the picked color

	colorDisplay.textContent = pickedColor;
	resetButton.textContent ="New Colors";
	messageDisplay.textContent = "";


for(var i = 0; i < squares.length; i++){

	squares[i].style.background = colors[i];

}
h1.style.background = "steelBlue";

});

colorDisplay.textContent = pickedColor;








function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}







function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}






function generateRandomColors(num){

	//make an array

	var arr = [];

	//repeat num times

	for(var i = 0 ; i <num ; i++){

	//get random color and push into the array
	arr.push(RandomColor());


	}

	//return that array
	return arr;


}





function RandomColor(){
	//pick a "red" from 0 to 255

	var r = Math.floor(Math.random()*256);

	//pick a "green" from 0 to 255

	var g = Math.floor(Math.random()*256);

	//pick a "blue" from 0 to 255

	var b = Math.floor(Math.random()*256);

	//return the string of the random color we generated using the random numbers Yaaay!

	return "rgb(" + r + ", " + g + ", "+ b+ ")"  ;





}
