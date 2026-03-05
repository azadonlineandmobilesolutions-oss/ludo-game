const board = document.getElementById("board");

for(let i=0;i<225;i++){

let cell = document.createElement("div");
cell.classList.add("cell");

board.appendChild(cell);

}
