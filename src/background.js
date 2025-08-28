const btn = document.getElementById("colorBtn");
const resetBtn = document.getElementById("resetBtn");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function getRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(90deg, ${color1}, ${color2})`;
}




btn.addEventListener("click", function () {
  document.body.style.background = getRandomGradient();
});


let bgInterval = setInterval(() => {
  document.body.style.background = getRandomGradient();
}, 5000);


function reset() {
  document.body.style.background = "#FFFFFF";
   clearInterval(bgInterval);
   bgInterval = null;
}

resetBtn.addEventListener("click", reset);
