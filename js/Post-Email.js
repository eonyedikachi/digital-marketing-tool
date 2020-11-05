function display(){
if (document.getElementById("all").checked) {
    document.getElementById("segmenttext").style.display = "none";
    document.getElementById("alltext").style.display = "block";
    document.getElementById("parent").style.display = "block";
  } else if (document.getElementById("segment").checked) {
    document.getElementById("alltext").style.display = "none";
    document.getElementById("segmenttext").style.display = "block";
    document.getElementById("parent").style.display = "block";
  }
}

document. getElementById("one"). onclick = function () {
    location. href = "./chooserecipient.html";}
document. getElementById("two"). onclick = function () {
    location. href = "./chooserecipient.html";}
document. getElementById("three"). onclick = function () {
    location. href = "./chooserecipient.html";}