let pixelCanvas = document.getElementById("pixelCanvas");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

// function to create rows and cells using nested loop
function makeGrid() {
    for (let i=0; i<gridHeight.value; i++){
        const row = pixelCanvas.insertRow(i);
        for (let j=0; j<gridWidth.value; j++){
            const cell = row.insertCell(j);
            cell.addEventListener("click", styleCell);
        }
    }
}

// add event listener for the submit button
sizePicker.addEventListener('submit', (e) => {
    e.preventDefault();
    clearGrid();
    makeGrid();
})

// style cell as u click
function styleCell() {
    this.setAttribute("style", `background-color: ${color.value}`);
}

// clear the cell colors
function clearGrid(){
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}

