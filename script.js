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

const handleMouseMove = (event) => {
  const left = event.clientX;
  const top = event.clientY;

  context.drawImage(paintbrush, left, top);
}

const handleClick = () => {

 if(paintbrush === greenCircle) {
    paintbrush = blackCircle;
} else if (paintbrush === blackCircle) {
    paintbrush = pinkCircle;
} else if (paintbrush === pinkCircle) {
    paintbrush = greenCircle;
}

}


canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);
