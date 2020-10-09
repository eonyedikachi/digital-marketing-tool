let controls = document.getElementById("controls");
let styles = document.getElementById("styles");
let controlMain = document.getElementById("controlMain");
let stylesMain = document.getElementById("stylesMain");

// Button to show controls
controls.addEventListener("click", () => {
  controls.classList.add("active");
  styles.classList.remove("active");
  controlMain.classList.remove("hide");
  stylesMain.classList.remove("show");
});

// Button to show styles
styles.addEventListener("click", () => {
  controls.classList.remove("active");
  styles.classList.add("active");
  stylesMain.classList.add("show");
  controlMain.classList.add("hide");
});

// Used to change id of each element
var i = 1;

// Email Template area droppable
function droppable(e) {
  e.preventDefault();
}

// text ondragstart
function drag(e) {
  // get all element id dynamically
  let elementId = e.target.id;

  // set data for ID
  e.dataTransfer.setData("id", elementId);
}
// Drop Area
function drop(e) {
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
  } else {
    // set class in div
    newElement.setAttribute("class", "img-content");

    // append into created div
    newElement.innerHTML = `<div id="upload">
                            <button class="btn btn-primary">
                                <p><label for="file" style="cursor: pointer;">Upload image or video</label></p>
                            </button>
                            <p><input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)"
                                    style="display: none;"></p>
                        </div>
                        <div class="settings" id="settings" style="display: none;">
                            <button class="close-button" id="closeButton" onclick="remove(event)">
                                <i class="fas fa-times" id="inner"></i>
                            </button>
                            <button class="upload-button" id="uploadButton" onclick="upload(event)">
                                <i class="fas fa-edit" id="inner"></i>
                            </button>
                            <button class="save-button" id="saveButton" onclick="saveImage(event)">
                                <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <div class="image-wrapper">
                            <img id="output" draggable="true" ondragstart="drag(event)" />
                        </div>`;

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

// Save image elements
function saveImage(e) {
  // target save button id
  let save = e.target.id;

  output = document.getElementById("output");

  if (save == "inner") {
    saveId = document.getElementById(save);

    // Append content
    saveId.parentNode.parentNode.parentNode.innerHTML = `<div class="image-wrapper newContent" id="newImgContent-${i}" onclick="editImage(event)">
                            <img id="imgOutput-${i++}" draggable="true" ondragstart="drag(event)" src="${
      output.src
    }"/>
                            </div>`;
  }
}

// Edit text elements
function editText(e) {
  // target selected text id
  let edit = e.target.id;
  editId = document.getElementById(edit);

  // Append to content
  editId.parentNode.innerHTML = `<div class="settings">
                            <button class="close-button" id="closeButton" onclick="remove(event)">
                                <i class="fas fa-times" id="inner"></i>
                            </button>
                            <button class="save-button" id="saveButton" onclick="saveText(event)">
                            <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <input type="text" class="text" id='input' value='${editId.textContent}'>
                        <p style='display:none' id='error'>Put input or delete input box</p>`;
}

// Edit image elements
function editImage(e) {
  // target selected text id
  let edit = e.target.id;

  editId = document.getElementById(edit);

  // Append to content
  editId.parentNode.parentNode.innerHTML = `<div class="settings" id="settings" style="display: block;">
                            <button class="close-button" id="closeButton" onclick="remove(event)">
                                <i class="fas fa-times" id="inner"></i>
                            </button>
                            <button class="upload-button" id="uploadButton" onclick="upload(event)">
                                <i class="fas fa-edit" id="inner"></i>
                            </button>
                            <button class="save-button" id="saveButton" onclick="saveImage(event)">
                                <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <div class="image-wrapper">
                            <img id="output" draggable="true" ondragstart="drag(event)" src="${editId.src}">
                        </div>`;
}

// Upload different image
function upload(e) {
  // target selected text id
  let upload = e.target.id;

  if (upload == `inner`) {
    uploadId = document.getElementById(upload);

    // Append content
    uploadId.parentNode.parentNode.parentNode.innerHTML = `<div id="upload">
                            <button class="btn btn-primary">
                                <p><label for="file" style="cursor: pointer;">Upload image or video</label></p>
                            </button>
                            <p><input type="file" accept="image/*" name="image" id="file" onchange="loadFile(event)"
                                    style="display: none;"></p>
                        </div>
                        <div class="settings" id="settings" style="display: none;">
                            <button class="close-button" id="closeButton" onclick="remove(event)">
                                <i class="fas fa-times" id="inner"></i>
                            </button>
                            <button class="upload-button" id="uploadButton" onclick="upload(event)">
                                <i class="fas fa-edit" id="inner"></i>
                            </button>
                            <button class="save-button" id="saveButton" onclick="saveImage(event)">
                                <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <div class="image-wrapper">
                            <img id="output" draggable="true" ondragstart="drag(event)" />
                        </div>`;
  }
}

//upload picture or video from device
let loadFile = function (e) {
  let upload = document.getElementById("upload");
  let settings = document.getElementById("settings");
  let image = document.getElementById("output");
  image.src = URL.createObjectURL(e.target.files[0]);
  upload.remove();
  settings.style.display = "block";
};
