let url =
  "https://api.unsplash.com/photos/?client_id=XBo1SciQ24P5W9MOoxWo6SxR8NovBaLHl5jAKsCJZPA";
let arr = [];
let data = fetch(url)
  .then((res) => res.json())
  .then((data) => data.map((x) => arr.push(x.urls.regular)));

const addPicture = () => {
  document.getElementById("photos").innerHTML = arr
    .map(
      (x, i) => `
    <img src="${x}" id='${i}' draggable="true" ondragstart="drag(event)" style="height: 90px; width: 90px; margin:5px" alt="Responsive image">`
    )
    .join("");
};

document.getElementById("photos-button").addEventListener("click", addPicture);

function droppable(e) {
  e.preventDefault();
}

function drag(e) {
  let elementId = e.target.id;
  // alert(elementId);
  let elementName = e.target.name;
  e.dataTransfer.setData("id", elementId);
  e.dataTransfer.setData("name", elementName);
}

function drop(e) {
  e.preventDefault();

  // get element to be dragged by ID
  let elementId = e.dataTransfer.getData("id");
  // alert(elementId);
  let element = document.getElementById(elementId);

  //creating copy of the element
  let newImage = document.createElement("img");
  newImage.src = element.src;
  newImage.style.width = "100px";
  newImage.style.height = "100px";
  newImage.id = element.id + "a";
  newImage.setAttribute("ondragstart", "drag(event)");

  //Appending the image to the container holder
  let container = document.getElementById("container");
  container.appendChild(newImage);
}

function discard(e) {
  e.preventDefault();

  let data = e.dataTransfer.getData("id");

  // get element to be dragged by ID
  let element = document.getElementById(data);

  element.remove();
}

//upload picture or video from device
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
