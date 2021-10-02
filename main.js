var x,
  y,
  xDivider,
  yDivider,
  xShade,
  yShade,
  height,
  width,
  scaleX,
  scaleY,
  shadowBreadth,
  shadow;

var maxShadowReach = "50px";
scaleX = 80;
scaleY = 50;
shadowBreadth = "3px";
var numLayers = 1;
var opacity = 0.8;

const handleMouseMove = (event) => {
  x = event.x - xDivider;
  y = event.y - yDivider;
  setShaders(shadow);
  console.log(x + " & " + y);
  console.log(
    "shaderX: " +
      Math.round(x / scaleX) +
      "& shaderY: " +
      Math.round(y / scaleY)
  );
};

const setShaders = (elArr) => {
  Array.from(elArr).forEach((e) => {
    e.style.filter = buildLayerString(numLayers);
  });
};

const buildLayerString = (numLayers) => {
  let string = "";
  for (let i = 0; i < numLayers; i++) {
    string =
      string +
      `drop-shadow(${Math.round(-x / scaleX)}px ${Math.round(
        -y / scaleY
      )}px ${shadowBreadth} rgba(0,0,0,${opacity})) `;
  }
  console.log(string);
  return string;
};

document.addEventListener("DOMContentLoaded", () => {
  shadow = document.querySelectorAll(".shadow");
  height = window.innerHeight;
  width = window.innerWidth;
  xDivider = width / 2;
  yDivider = height / 2;
  console.log(xDivider + "&" + yDivider);
});

document.addEventListener("mousemove", handleMouseMove);
