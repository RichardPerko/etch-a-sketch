const container = document.querySelector('#container')

function createGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (i = 0; i < (rows* cols); i++){
        let pixel = document.createElement("div");

        container.appendChild(pixel).className = "grid-item";
    };
};
createGrid(2,2);