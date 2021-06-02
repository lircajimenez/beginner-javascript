// select elements on page: canvas, shake button
const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeBtn = document.querySelector(".shake");
const MOVE_AMOUNT = 10;

// setup canvas for drawing
// const width = canvas.width;
// const height = canvas.height;
// deconstructing from same properties on canvas
const { width, height } = canvas;
// console.log(width, height);

// create random starting point on canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// ctx.beginPath(); // start the drawing
// ctx.moveTo(x, y);
// ctx.lineTo(x, y);
// ctx.stroke();

// write draw function
const draw = ({ key }) => {
  hue += 5;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  //start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  //moving x and y depending on what the user did
  //x -= MOVE_AMOUNT; // x = x - 10
  //y -= MOVE_AMOUNT;

  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
};

// write handler for the keys
const handleKey = (e) => {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
};

// clear-shake function
const clearCanvas = () => {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    function() {
      console.log("remove the shake");
      canvas.classList.remove("shake");
    },
    { once: true }
  );
};

// listen for arrow keys
window.addEventListener("keydown", handleKey);
shakeBtn.addEventListener("click", clearCanvas);
