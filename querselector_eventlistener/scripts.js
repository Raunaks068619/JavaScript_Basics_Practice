const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red));

// eventListner for div class colors
const getBgColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger = () => {
  const colors = [red, cyan, violet, orange, pink];
  colors.forEach((selected) => {
    console.log(selected);
    selected.addEventListener("mouseenter", () => {
      return (center.style.backgroundColor = getBgColor(selected));
    });
  });
};

magicColorChanger();

// var orangeElementColor = getBgColor(orange);
// var pinkElementColor = getBgColor(pink);

// pink.addEventListener("mouseenter", () => {
//   center.style.background = pinkElementColor;
// });
