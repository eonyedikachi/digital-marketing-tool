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
  // alert(elementId);
  let elementId = e.target.id;
  let elementName = e.target.name;
  let elementTagName = e.target.tagName;
  e.dataTransfer.setData("id", elementId);
  e.dataTransfer.setData("name", elementName);
  e.dataTransfer.setData("tagName", elementTagName);
}

function drop(e) {
  e.preventDefault();

  // get element to be dragged by ID
  let elementId = e.dataTransfer.getData("id");
  let elementTagName = e.dataTransfer.getData("tagName");
  // alert(elementId);
  let element = document.getElementById(elementId);

  //creating copy of the element
  //copying image element
  let newImage = document.createElement("img");
  newImage.src = element.src;
  newImage.style.width = "100px";
  newImage.style.height = "100px";
  newImage.id = element.id + "a";
  newImage.setAttribute("ondragstart", "drag(event)");

  //copying video element
  let newVideo = document.createElement("video");
  newVideo.src = element.src;
  newVideo.style.width = "100px";
  newVideo.style.height = "100px";
  newVideo.id = element.id + "a";
  newVideo.setAttribute("ondragstart", "drag(event)");

  //copying music
  let newAudio = document.createElement("audio");
  newAudio.src = element.src;
  newAudio.innerText = `<source src="${newAudio.src}" type="audio/mpeg">`;
  newAudio.style.width = "100px";
  newAudio.style.height = "100px";
  newAudio.id = element.id + "a";
  newAudio.setAttribute("ondragstart", "drag(event)");
  // Creating new element
  let newElement = document.createElement("div");

  //Appending the image to the container holder
  let container = document.getElementById("container");

  // chech if element dragged is text
  if (elementId == "text") {
    newElement.setAttribute("class", "text-content");

    newElement.innerHTML = `<div class="settings">
    <button class="close-button" id="closeButton" onclick="remove(event)">
        <i class="fas fa-times" id="inner"></i>
    </button>
    <button class="save-button" id="saveButton" onclick="saveText(event)">
    <i class="fas fa-save" id="inner"></i>
    </button>
</div>
<input type="text" class="text" id='input'>
<p style='display:none' id='error'>Put input or delete input box</p>`;
    container.appendChild(newElement);
  }

  if (elementTagName == "IMG") {
    container.appendChild(newImage);
  }
  if (elementTagName == "VIDEO") {
    container.appendChild(newVideo);
  }
  if (elementTagName == "AUDIO") {
    container.appendChild(newAudio);
    alert(elementTagName);
  }
}
// outputa output2a

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
  var video = document.getElementById("output2");
  var audio = document.getElementById("output3");
  image.src = URL.createObjectURL(event.target.files[0]);
  video.src = URL.createObjectURL(event.target.files[0]);
  audio.src = URL.createObjectURL(event.target.files[0]);
};

function dropText(e) {
  e.preventDefault();

  // get data
  let data = e.dataTransfer.getData("id");

  // get element to be dragged by ID
  let element = document.getElementById(data);

  // create copy of element
  let newElement = document.createElement("div");

  // check if data dragged is text id
  if (data == "text") {
    // set class in div
    newElement.setAttribute("class", "text-content");

    // append into created div
    newElement.innerHTML = `<div class="settings">
                            <button class="close-button" id="closeButton" onclick="remove(event)">
                                <i class="fas fa-times" id="inner"></i>
                            </button>
                            <button class="save-button" id="saveButton" onclick="saveText(event)">
                            <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <input type="text" class="text" id='input'>
                        <p style='display:none' id='error'>Put input or delete input box</p>`;

    // Append div to drop target
    e.target.appendChild(newElement);
  }
}

// delete new elements
function remove(e) {
  // target close button id
  let close = e.target.id;
  if (close == `inner`) {
    closeId = document.getElementById(close);

    // Delete content
    closeId.parentNode.parentNode.parentNode.remove();
  }
}

// Save text elements
function saveText(e) {
  // target save button id
  let save = e.target.id;

  // get value in input box
  let input = document.getElementById("input").value;

  // check if input is empty
  if (input != "") {
    if (save == "inner") {
      saveId = document.getElementById(save);

      // Append content
      saveId.parentNode.parentNode.parentNode.innerHTML = `<p id='newContent-${i++}' class='newContent' onclick='editText(event)'>${input}</p>`;
    }
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").style.color = "red";
  }
}
