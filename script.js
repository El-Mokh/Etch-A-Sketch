const container = document.querySelector(".container");
const input = document.querySelector("#input");
const clear = document.querySelector("#clear");
let size = 16;

function generateGrid(size) {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.style.width = `${(511 - (size - 1)) / size}px`;
    newBox.style.height = `${(511 - size + 1) / size}px`;
    container.appendChild(newBox);
  }
}

generateGrid(size);

input.addEventListener("input", () => {
  const newSize = parseInt(input.value, 10);
  if (newSize === 1||newSize === 2||newSize === 4||newSize === 8||newSize === 16||newSize === 32||newSize === 64){
    size = newSize;
  }
  if (!isNaN(size) && size > 0) {
    generateGrid(size);
  }
});

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    e.target.style.backgroundColor = `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)}
    )`;
  }
});

clear.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
});
