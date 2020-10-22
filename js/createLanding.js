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
  newAudio.controls = true;
  newAudio.innerText = `<source src="${newAudio.src}" type="audio/mpeg">`;
  newAudio.style.width = "300px";
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
    <button class="button" id="closeButton" onclick="remove(event)">
        <i class="far fa-trash-alt" id="inner"></i>
    </button>
    <button class="button" id="boldButton" onclick="boldText(event)">
    <i class="fas fa-bold" id="innerBold"></i>
    </button>
    <button class="button" id="italicButton" onclick="italicText(event)">
    <i class="fas fa-italic" id="innerItalic"></i>
    </button>
    <button class="button" id="underlineButton" onclick="underlineText(event)">
    <i class="fas fa-underline" id="innerUnderline"></i>
    </button>
    <select name="font-size" id="fontSize">
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="22px">22px</option>
        <option value="24px">24px</option>
        <option value="26px">26px</option>
        <option value="28px">28px</option>
        <option value="30px">30px</option>
        <option value="32px">32px</option>
        <option value="34px">34px</option>
        <option value="36px">36px</option>
        <option value="38px">38px</option>
        <option value="40px">40px</option>
    </select>
    <input type="color" name="text-element-color" id="textElementColor" onchange="changeTextElementColor()">
    <button class="button" id="saveButton" onclick="saveText(event)">
    <i class="fas fa-save" id="inner"></i>
    </button>
</div>
<input type="text" class="text" id='input'>
<p style='display:none' id='error'>Put input or delete input box</p>`;
    container.appendChild(newElement);
  }

  if (elementTagName == "IMG") {
    container.appendChild(newImage);

    // var width = window.innerWidth;
    // var height = window.innerHeight;

    // function update(activeAnchor) {
    //   var group = activeAnchor.getParent();

    //   var topLeft = group.get(".topLeft")[0];
    //   var topRight = group.get(".topRight")[0];
    //   var bottomRight = group.get(".bottomRight")[0];
    //   var bottomLeft = group.get(".bottomLeft")[0];
    //   var image = group.get("Image")[0];

    //   var anchorX = activeAnchor.getX();
    //   var anchorY = activeAnchor.getY();

    //   // update anchor positions
    //   switch (activeAnchor.getName()) {
    //     case "topLeft":
    //       topRight.y(anchorY);
    //       bottomLeft.x(anchorX);
    //       break;
    //     case "topRight":
    //       topLeft.y(anchorY);
    //       bottomRight.x(anchorX);
    //       break;
    //     case "bottomRight":
    //       bottomLeft.y(anchorY);
    //       topRight.x(anchorX);
    //       break;
    //     case "bottomLeft":
    //       bottomRight.y(anchorY);
    //       topLeft.x(anchorX);
    //       break;
    //   }

    //   image.position(topLeft.position());

    //   var width = topRight.getX() - topLeft.getX();
    //   var height = bottomLeft.getY() - topLeft.getY();
    //   if (width && height) {
    //     image.width(width);
    //     image.height(height);
    //   }
    // }
    // function addAnchor(group, x, y, name) {
    //   var stage = group.getStage();
    //   var layer = group.getLayer();

    //   var anchor = new Konva.Circle({
    //     x: x,
    //     y: y,
    //     stroke: "#666",
    //     fill: "#ddd",
    //     strokeWidth: 2,
    //     radius: 8,
    //     name: name,
    //     draggable: true,
    //     dragOnTop: false,
    //   });

    //   anchor.on("dragmove", function () {
    //     update(this);
    //     layer.draw();
    //   });
    //   anchor.on("mousedown touchstart", function () {
    //     group.draggable(false);
    //     this.moveToTop();
    //   });
    //   anchor.on("dragend", function () {
    //     group.draggable(true);
    //     layer.draw();
    //   });
    //   // add hover styling
    //   anchor.on("mouseover", function () {
    //     var layer = this.getLayer();
    //     document.body.style.cursor = "pointer";
    //     this.strokeWidth(4);
    //     layer.draw();
    //   });
    //   anchor.on("mouseout", function () {
    //     var layer = this.getLayer();
    //     document.body.style.cursor = "default";
    //     this.strokeWidth(2);
    //     layer.draw();
    //   });

    //   group.add(anchor);
    // }

    // var stage = new Konva.Stage({
    //   container: "container",
    //   width: width,
    //   height: height,
    // });

    // var layer = new Konva.Layer();
    // stage.add(layer);

    // //Image
    // var darthVaderImg = new Konva.Image({
    //   width: 200,
    //   height: 137,
    // });

    // var darthVaderGroup = new Konva.Group({
    //   x: 180,
    //   y: 50,
    //   draggable: true,
    // });
    // layer.add(darthVaderGroup);
    // darthVaderGroup.add(darthVaderImg);
    // addAnchor(darthVaderGroup, 0, 0, "topLeft");
    // addAnchor(darthVaderGroup, 200, 0, "topRight");
    // addAnchor(darthVaderGroup, 200, 138, "bottomRight");
    // addAnchor(darthVaderGroup, 0, 138, "bottomLeft");

    // var imageObj1 = new Image();
    // imageObj1.onload = function () {
    //   console.log("im here");
    //   darthVaderImg.image(imageObj1);
    //   layer.draw();
    // };
    // imageObj1.src = `${newImage.src}`;
  }
  if (elementTagName == "VIDEO") {
    container.appendChild(newVideo);
  }
  if (elementTagName == "AUDIO") {
    container.appendChild(newAudio);
    // alert(elementTagName);
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

function changeContainerColor() {
  let colorSelected = document.getElementById("change-color").value;
  document.getElementById("container").style.backgroundColor = colorSelected;
}

// Edit text elements
function editText(e) {
  // target selected text id
  let edit = e.target.id;
  editId = document.getElementById(edit);
  color = editId.style.color;
  font = editId.style.fontSize;

  // Append to content
  editId.parentNode.innerHTML = `<div class="settings">
                            <button class="button" id="closeButton" onclick="remove(event)">
                                <i class="far fa-trash-alt" id="inner"></i>
                            </button>
                            <button class="button" id="boldButton" onclick="boldText(event)">
                            <i class="fas fa-bold" id="innerBold"></i>
                            </button>
                            <button class="button" id="italicButton" onclick="italicText(event)">
                            <i class="fas fa-italic" id="innerItalic"></i>
                            </button>
                            <button class="button" id="underlineButton" onclick="underlineText(event)">
                            <i class="fas fa-underline" id="innerUnderline"></i>
                            </button>
                            <select name="font-size" id="fontSize">
                                <option value="${font}" hidden disabled selected>${font}</option>
                                <option value="16px">16px</option>
                                <option value="18px">18px</option>
                                <option value="20px">20px</option>
                                <option value="22px">22px</option>
                                <option value="24px">24px</option>
                                <option value="26px">26px</option>
                                <option value="28px">28px</option>
                                <option value="30px">30px</option>
                                <option value="32px">32px</option>
                                <option value="34px">34px</option>
                                <option value="36px">36px</option>
                                <option value="38px">38px</option>
                                <option value="40px">40px</option>
                            </select>
                            <input type="color" name="text-element-color" id="textElementColor" onchange="changeTextElementColor()">
                            <button class="button" id="saveButton" onclick="saveText(event)">
                            <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <input type="text" class="text" id='input' style='font-size:${font}; color:${color}' value='${editId.textContent}'>
                        <p style='display:none' id='error'>Put input or delete input box</p>`;
}

// Change page color
function changePageColor() {
  pageColor = document.getElementById("pageColor").value;
  templateArea = document.getElementById("container");
  templateArea.style.backgroundColor = pageColor;
}

function changeTextColor() {
  textColor = document.getElementById("textColor").value;
  templateArea = document.getElementById("container");
  templateArea.style.color = textColor;
}

function changeTextElementColor() {
  textColor = document.getElementById("textElementColor").value;
  input = document.getElementById("input");
  input.style.color = textColor;
}

// Bold text
function boldText(e) {
  input = document.getElementById("input");
  // target bold button id
  let bold = e.target.id;
  if (bold == `innerBold`) {
    let boldId = document.getElementById(bold);

    if (boldId.parentNode.parentNode.parentNode.style.fontWeight == "bold") {
      input.style.fontWeight = "normal";
      boldId.parentNode.parentNode.parentNode.style.fontWeight = "normal";
      boldId.style.border = "unset";
    } else {
      input.style.fontWeight = "bold";
      boldId.parentNode.parentNode.parentNode.style.fontWeight = "bold";
      boldId.style.border = "1px solid black";
    }
  }
}

// Save text elements
function saveText(e) {
  // target save button id
  let save = e.target.id;

  // get values in input box
  let input = document.getElementById("input").value;
  let fontSize = document.getElementById("fontSize").value;
  let color = document.getElementById("input").style.color;

  // check if input is empty
  if (input != "") {
    if (save == "inner") {
      saveId = document.getElementById(save);

      // Append content
      alert(saveId);
      saveId.parentNode.innerHTML = `<p draggable="true" ondragstart="drag(event)" id='newContent-${i++}' class='newContent' style='font-size:${fontSize}; color:${color}' onclick='editText(event)'>${input}</p>`;
    }
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").style.color = "red";
  }
}

// italic text
function italicText(e) {
  input = document.getElementById("input");
  // target italic button id
  let italic = e.target.id;
  if (italic == `innerItalic`) {
    italicId = document.getElementById(italic);

    if (italicId.parentNode.parentNode.parentNode.style.fontStyle == "italic") {
      input.style.fontStyle = "normal";
      italicId.parentNode.parentNode.parentNode.style.fontStyle = "normal";
      italicId.style.border = "unset";
    } else {
      input.style.fontStyle = "italic";
      italicId.parentNode.parentNode.parentNode.style.fontStyle = "italic";
      italicId.style.border = "1px solid black";
    }
  }
}

// underline text
function underlineText(e) {
  input = document.getElementById("input");
  // target underline button id
  let underline = e.target.id;
  if (underline == `innerUnderline`) {
    underlineId = document.getElementById(underline);

    if (
      underlineId.parentNode.parentNode.parentNode.style.textDecoration ==
      "underline"
    ) {
      input.style.textDecoration = "none";
      underlineId.parentNode.parentNode.parentNode.style.textDecoration =
        "none";
      underlineId.style.border = "unset";
    } else {
      input.style.textDecoration = "underline";
      underlineId.parentNode.parentNode.parentNode.style.textDecoration =
        "underline";
      underlineId.style.border = "1px solid black";
    }
  }
}

document.getElementById("getDetails").addEventListener("click", getDetails);

function getDetails() {
  container = document.getElementById("container");
  containerChildren = container.childNodes;
  // containerChildren.map((x) => console.log(x));
  console.log(containerChildren);
  // alert(container);
}
