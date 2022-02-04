var gridContainer = document.querySelector('#container')

function createGrid(size){
    for (var rows = 0; rows < size; rows++){
        for(var columns = 0; columns < size; columns++){
            var grid = document.createElement('div');
            grid.classList.add("grid");
            grid.textContent = "test"
            gridContainer.append(grid);
        }

    }

}

createGrid(16);