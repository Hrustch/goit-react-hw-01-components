function getRandomRGB() {
  return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

export default getRandomRGB