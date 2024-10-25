function borderImg() {
  var bor = document.querySelector("#img");

  bor.style.border == ""
    ? (bor.style.border = "2px solid red")
    : (bor.style.border = "");
}
