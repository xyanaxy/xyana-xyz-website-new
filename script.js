const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const blueCircle = document.createElement('img');
const yellowCircle = document.createElement('img');
const blackCircle = document.createElement('img');

blueCircle.src = 'images/bluecircle.png';
yellowCircle.src = 'images/greencircle.png';
blackCircle.src = 'images/blackcircle.png';

let paintbrush = blueCircle;

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
  const left = event.clientX;
  const top = event.clientY;

  context.drawImage(paintbrush, left, top);
}

const handleClick = () => {

 if(paintbrush === blueCircle) {
    paintbrush = yellowCircle;
} else if (paintbrush === yellowCircle) {
    paintbrush = blackCircle;
} else if (paintbrush === blackCircle) {
    paintbrush = blueCircle;
}

}


canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);
