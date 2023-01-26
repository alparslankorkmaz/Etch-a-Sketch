const container = document.querySelector(".container");
const gridSizeBtn = document.querySelector(".gridSizeBtn");

gridSizeBtn.addEventListener("click", () => {
  let gridSize = prompt("Enter number of squares per side. (Max 100)");

  while (gridSize > 100) {
    gridSize = prompt("Enter number of squares per side. (Max 100)");
  }
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.remove();
  });

  function createSquares() {
    for (i = 0; i < gridSize * gridSize; i++) {
      let squares = document.createElement("div");

      let a = gridSize;
      const containerSize = 250 / a;
      squares.classList.add("square");
      squares.style.width = containerSize + "px";
      squares.style.height = containerSize + "px";
      container.appendChild(squares);

      squares.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
      });
    }
  }

  createSquares();
});
