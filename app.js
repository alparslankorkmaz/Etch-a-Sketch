const container = document.querySelector(".container");
const button = document.querySelector(".button");

for (i = 0; i < 256; i++) {
  const squares = document.createElement("div");
  squares.classList.add("square");
  container.appendChild(squares);
  squares.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "orange";
  });
}

button.addEventListener("click", () => {
  let gridSize = prompt("Enter number of squares per side. (Max 100)");
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.remove();
  });
  function createSquares() {
    for (i = 0; i < gridSize * gridSize; i++) {
      let squares = document.createElement("div");

      let a = gridSize;
      const containerSize = 300 / a;
      squares.classList.add("square");
      squares.style.width = containerSize + "px";
      squares.style.height = containerSize + "px";
      container.appendChild(squares);

      squares.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "orange";
      });
    }
  }
  createSquares();
});
