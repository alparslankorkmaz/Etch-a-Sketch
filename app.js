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
  const gridSize = prompt("Enter number of squares per side. (Max 100)");
});
