//Selecting Squares
var squares = document.querySelectorAll(".square");
//Selecting the top most div with the heading text
var head = document.getElementById("heading");
//Selecting Play Again/New Colors Button
var resetGame=document.getElementById("resetGame");
//Selecting Span where TryAgain/Correct message will be displayed
var messageDisplay=document.querySelector("#message");
//Selecting Level Buttons: Easy and Hard
var levelEasy=document.getElementById("easy");
var levelHard=document.getElementById("hard");
var levelBtn=document.querySelectorAll(".level")
//Answer Display
var colorDisplay=document.getElementById("colorDisplay");
//Blank Array colors:
var colors=[];
//Number of Squares based on level
var noOfSquares=6;
var pickedColor;

init();
function init(){
	setUpLevel();
	for(var i=0;i<levelBtn.length;i++)
{
	levelBtn[i].addEventListener("click",function(){
		levelBtn[0].classList.remove("selected");
		levelBtn[1].classList.remove("selected");
		this.classList.add("selected");
		
		if(this.textContent==="EASY"){
			noOfSquares=3;
		}
		else if(this.textContent==="HARD"){
			noOfSquares=6;
		}
		reset();

	});
}
}

function setUpLevel(){
	colors=generateRandomColors(noOfSquares)
	fillColor();
	pickedColor=pickColor();
	var colorDisplay=document.getElementById("colorDisplay");
	colorDisplay.textContent=pickedColor;
}
//Event on clicking PlayAgain/NewColors Button
resetGame.addEventListener("click",function(){
	reset();
});

//Setting the randomly chosen colors in squares
function fillColor(){
	for(var i = 0; i<colors.length; i++){
		squares[i].style.background = colors[i];
	}
}

//To define the Answer to the Game
// colors=generateRandomColors(noOfSquares)
// fillColor();
// var pickedColor=pickColor();
// var colorDisplay=document.getElementById("colorDisplay");
// colorDisplay.textContent=pickedColor;

for(var i=0;i<colors.length;i++){
	squares[i].addEventListener("click", function(){
		//Grab Color of picked squares
		clickedColor=this.style.background;
		//Compare pickedColor
		if (clickedColor===pickedColor)
		{	for(var j=0;j<squares.length;j++)
			{
				squares[j].style.background=pickedColor;
			}
			head.style.background=pickedColor;
			messageDisplay.textContent="CORRECT !"
			resetGame.textContent="PLAY AGAIN ?"
		}
		else
		{
			this.style.background="#232323";
			messageDisplay.textContent="TRY AGAIN !"
		}

	});
}

function pickColor()
{
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[]
	for(var i=0;i<num;i++)
	{
		arr[i]=chooseRandomColor()
	}
	return arr;
}

function chooseRandomColor()
{
	var red=Math.floor(Math.random() * 256);
	var blue=Math.floor(Math.random() * 256);
	var green=Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue+")";
}

function reset()
{
	colors=generateRandomColors(noOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	resetGame.textContent="NEW COLORS !";
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
	head.style.background="#4f8ef2";
}

//Event on clicking level Easy Button
// levelEasy.addEventListener("click",function(){
// 	levelEasy.classList.add("selected")
// 	levelHard.classList.remove("selected")
// 	messageDisplay.textContent="";
// 	resetGame.textContent="NEW COLORS!"
// 	head.style.background="#4f8ef2"
// 	noOfSquares=3
// 	colors = generateRandomColors(noOfSquares);
// 	pickedColor=pickColor();
// 	for(var i=0;i<squares.length;i++)
// 	{
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];
// 		}
// 		else{
// 			squares[i].style.display="none"
// 		}
// 	}
// 	colorDisplay.textContent=pickedColor;
// });

//Event on clicking level Odd Button
// levelHard.addEventListener("click",function(){
// 	levelHard.classList.add("selected")
// 	levelEasy.classList.remove("selected")
// 	messageDisplay.textContent="";
// 	resetGame.textContent="NEW COLORS!"
// 	head.style.background="#4f8ef2"
// 	noOfSquares=6
// 	colors = generateRandomColors(noOfSquares);
// 	pickedColor=pickColor();
// 	for(var i=0;i<squares.length;i++)
// 	{	
// 		squares[i].style.display="block";
// 	}
// 	fillColor();
// 	colorDisplay.textContent=pickedColor;
// });

//Event on clicking PlayAgain/NewColors Button
// resetGame.addEventListener("click",function(){
// 	//Change text content of Button to New Colors
// 	resetGame.textContent="NEW COLORS!";
// 	//Bring back the original heading background color, if changed
// 	head.style.background="#4f8ef2";
// 	//Clear the TryAgain/Correct message
// 	messageDisplay.textContent="";
// 	//Generate an array of 6 random colors
// 	colors=generateRandomColors(noOfSquares)
// 	//pick a new random color from array as answer
// 	pickedColor=pickColor();
// 	//change color display to the answer color code
// 	colorDisplay.textContent=pickedColor;
// 	//change colors of square accoording to randomly picked colors in colors[] array
// 	// for(var i=0;i<squares.length;i++)
// 	// {
// 	// 	squares[i].style.background=colors[i];
// 	// }
// 	fillColor();
// });