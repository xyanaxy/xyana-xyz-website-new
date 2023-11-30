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

const context = canvas.getContext('2d');

const handleDraw = (event) => {
  event.preventDefault(); // Prevent default behavior to avoid scrolling or zooming

  const drawEvent = event.type.startsWith('touch') ? event.touches[0] : event;
  const left = drawEvent.clientX;
  const top = drawEvent.clientY;

  context.drawImage(paintbrush, left, top);
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

canvas.addEventListener('click', handleClick);

// Add both mouse and touch event listeners
canvas.addEventListener('mousemove', handleDraw);
canvas.addEventListener('mousedown', handleClick); // You may adjust this based on your specific requirements

canvas.addEventListener('touchmove', handleDraw);
canvas.addEventListener('touchstart', handleClick); // You may adjust this based on your specific requirements
