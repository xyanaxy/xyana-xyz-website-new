const canvas = document.querySelector('#drawingCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pinkCircle = document.createElement('img');
const greenCircle = document.createElement('img');
const blackCircle = document.createElement('img');

pinkCircle.src = 'images/pink.png';
greenCircle.src = 'images/green.png';
blackCircle.src = 'images/black.png';

let paintbrush = greenCircle;
let drawingData = []; // Array to store drawing data

// Load drawing data from local storage on page load
window.onload = () => {
  const savedDrawingData = localStorage.getItem('drawingData');
  if (savedDrawingData) {
    drawingData = JSON.parse(savedDrawingData);
    replayDrawings();
  }
};

const context = canvas.getContext('2d');

const handleDraw = (event) => {
  const drawEvent = event.type.startsWith('touch') ? event.touches[0] : event;
  const left = drawEvent.clientX;
  const top = drawEvent.clientY;

  context.drawImage(paintbrush, left, top);

  drawingData.push({ left, top, paintbrush: paintbrush.src });

  // Save drawing data to local storage
  localStorage.setItem('drawingData', JSON.stringify(drawingData));
}

const handleClick = () => {
  if (paintbrush === greenCircle) {
    paintbrush = blackCircle;
  } else if (paintbrush === blackCircle) {
    paintbrush = pinkCircle;
  } else if (paintbrush === pinkCircle) {
    paintbrush = greenCircle;
  }
}

const replayDrawings = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawingData.forEach((data) => {
    const { left, top, paintbrush: paintbrushSrc } = data;
    const img = new Image();
    img.src = paintbrushSrc;
    context.drawImage(img, left, top);
  });
}

// Event listeners
canvas.addEventListener('click', handleClick);

canvas.addEventListener('mousemove', handleDraw);
canvas.addEventListener('mousedown', handleClick);

canvas.addEventListener('touchmove', handleDraw);
canvas.addEventListener('touchstart', handleClick);
