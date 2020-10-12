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

// Show page styles
document.getElementById("page").addEventListener("click", () => {
  document.getElementById("pageStyle").classList.toggle("show");
});

// Show text styles
document.getElementById("styleText").addEventListener("click", () => {
  document.getElementById("textStyle").classList.toggle("show");
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
                            <button class="button" id="closeButton" onclick="remove(event)">
                                <i class="far fa-trash-alt" id="inner"></i>
                            </button>
                            <button class="upload-button" id="uploadButton" onclick="upload(event)">
                                <i class="fas fa-edit" id="inner"></i>
                            </button>
                            <button class="button" id="saveButton" onclick="saveImage(event)">
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

  // get values in input box
  let input = document.getElementById("input").value;
  let fontSize = document.getElementById("fontSize").value;
  let color = document.getElementById("input").style.color;

  // check if input is empty
  if (input != "") {
    if (save == "inner") {
      saveId = document.getElementById(save);

      // Append content
      saveId.parentNode.parentNode.parentNode.innerHTML = `<p id='newContent-${i++}' class='newContent' style='font-size:${fontSize}; color:${color}' onclick='editText(event)'>${input}</p>`;
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

// Edit image elements
function editImage(e) {
  // target selected text id
  let edit = e.target.id;

  editId = document.getElementById(edit);

  // Append to content
  editId.parentNode.parentNode.innerHTML = `<div class="settings" id="settings">
                            <button class="button" id="closeButton" onclick="remove(event)">
                                <i class="far fa-trash-alt" id="inner"></i>
                            </button>
                            <button class="upload-button" id="uploadButton" onclick="upload(event)">
                                <i class="fas fa-edit" id="inner"></i>
                            </button>
                            <button class="button" id="saveButton" onclick="saveImage(event)">
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
                            <button class="button" id="closeButton" onclick="remove(event)">
                                <i class="far fa-trash-alt" id="inner"></i>
                            </button>
                            <button class="upload-button" id="uploadButton" onclick="upload(event)">
                                <i class="fas fa-edit" id="inner"></i>
                            </button>
                            <button class="button" id="saveButton" onclick="saveImage(event)">
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
  settings.style.display = "flex";
};

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
