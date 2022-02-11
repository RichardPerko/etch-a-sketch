//all basic DOM transversals/listeners 
const container = document.querySelector('#container');

const size = document.querySelector('#sizeBtn');
size.onclick = () => resizeGrid();

const reset = document.querySelector('#resetBtn');
reset.onclick = () => resetGrid();

const rgb = document.querySelector('#rgbBtn');
rgb.onclick = () => colorChanger('rgb');

const eraser = document.querySelector('#eraser');
eraser.onclick = () => colorChanger('eraser')

const blackBtn = document.querySelector('#blackBtn');
blackBtn.onclick = () => colorChanger('black');

const slider = document.querySelector('.slider');

const buttons = document.getElementsByTagName("button");
for (const button of buttons){
    button.addEventListener("click", createRipple);
}
//slider function that creates grid
slider.oninput = function(){
    resetGrid();
    createGrid(this.value, this.value);
}
//default values that create the grid and set default color to black
resetGrid();
let rows = 16;
let cols = 16
createGrid(rows, cols); 
let color = 'black';

//creates grid of divs based on what the resizeGrid function returns
//or the default grid size
function createGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows * cols); i++){
        let boxes = document.createElement("div");
        container.appendChild(boxes).className = "grid-item";
    };
    colorSelector();
};

//color picker applies the color to be set for the background
function colorPicker(){
    switch (color){
        case "rgb":
            //thank you to Tmcerlean for the random color line
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case 'eraser':
            this.style.backgroundColor = 'white';
            break;
        case 'black':
            this.style.backgroundColor = 'black';
        default:
            this.style.backgroundColor = color;
            break;
    }
}

//switch statement that is called when buttons are clicked 
function colorChanger(input){
    switch(input){
        case 'black':
            color = 'black'
            break;
        case 'eraser':
            color = 'eraser'
            break;
        case 'rgb':
            color = 'rgb'
            break;


    }
}

//function to determine the background color of the divs when hovered
function colorSelector(){
    const pixels = document.querySelectorAll('.grid-item');
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colorPicker))
}

//when called will prompt the user for rows and columns to resize grid
function resizeGrid(){
    let size = prompt("Enter size (Grid will be size * size)");
    if (size > 100){
        size = 100;
    }
    if (size > 0){
        let rows = size;
        let cols = size;
        resetGrid();
        createGrid(rows, cols)
    }

}

//when called will reset all divs to background color of white
function resetGrid(){
    let allDivs = document.querySelectorAll(".grid-item").forEach(cell =>{
        cell.style.backgroundColor = "White";  
    })
}
// create ripple function thanks to css-tricks
function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }