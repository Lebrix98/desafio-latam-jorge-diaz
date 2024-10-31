const content = document.getElementById("content");
const key = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    printPink();
  } else if (event.key === "s" || event.key === "S") {
    printOrange();
  } else if (event.key === "d" || event.key === "D") {
    printCyan();
  } else if (event.key === "q" || event.key === "Q") {
    addKey("purple");
  } else if (event.key === "w" || event.key === "W") {
    addKey("gray");
  } else if (event.key === "e" || event.key === "E") {
    addKey("brown");
  } else if (event.key === "Backspace") {
    printReset();
  }
});

printPink = () => {
  key.style.backgroundColor = "pink";
};

printOrange = () => {
  key.style.backgroundColor = "orange";
};

printCyan = () => {
  key.style.backgroundColor = "cyan";
};

addKey = (color) => {
  var newBox = document.createElement("div");
  newBox.style.backgroundColor = color;
  content.appendChild(newBox);
};

printReset = () => {
  key.style.backgroundColor = "white";

  var allContent = content.querySelectorAll("div");

  if (allContent.length > 1) {
    content.removeChild(allContent[allContent.length - 1]);
  }
};
