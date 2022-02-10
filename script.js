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
blackBtn.onclick = () => colorChanger('black')

//default values that 
createGrid(16, 16); 
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
    let rows = prompt("Enter rows");
    let cols = prompt("Enter columns");
    if (rows > 100){
        rows = 100;
    } if (cols > 100){
        cols = 100;
    } if (rows && cols > 0){
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
