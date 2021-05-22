function dragstart(event) {
  event.dataTransfer.setData("Text",event.target.id)
}
function dragging(event) {
  document.getElementById("objecttext").innerHTML="element sedang di drag"
}
function allowdrop(event) {
  event.preventDefault();
}
function drop(event) {
  event.preventDefault; //belum tau nih fungsinya apa disini
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("objecttext").innerHTML = "Element sudah di drop"
}
