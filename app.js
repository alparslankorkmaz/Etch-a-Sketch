const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  const squares = document.createElement("div");
  squares.classList.add("square");
  container.appendChild(squares);
}
