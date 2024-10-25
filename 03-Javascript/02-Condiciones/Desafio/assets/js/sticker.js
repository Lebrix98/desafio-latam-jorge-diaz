
function calcTotal() {
  var val1 = Number(document.querySelector("#num1").value);
  var val2 = Number(document.querySelector("#num2").value);
  var val3 = Number(document.querySelector("#num3").value);
  var par = document.querySelector("#textTotal");

  var result = val1 + val2 + val3;

  result <= 10
    ? (par.innerHTML = `Llevas ${result} stickers`)
    : (par.innerHTML = `Llevas demasiados stickers`);
}
