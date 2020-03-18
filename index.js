var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
   setupModeButtons();
   setupSquares();
   reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected")
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
};

function setupSquares(){
    for(i=0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.background;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try again";
            }
    
        });
    };
};

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
        for(i=0; i < squares.length; i++) { 
            if(colors[i]){
            squares[i].style.display = "block";  
            squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        };
    h1.style.background = "darkslateblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
};

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    //loop through all squares
    for(i=0; i < squares.length; i++) {
    //change color in each square to match given one
    squares[i].style.background = color;
    };
};

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}; 

function generateRandomColors(num){
var arr = [];
for(var i = 0; i < num; i++){
arr.push(randomColor())
}
return arr;
};

function randomColor(){
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
   return "rgb(" + R + ", " + G + ", " + B + ")";
};