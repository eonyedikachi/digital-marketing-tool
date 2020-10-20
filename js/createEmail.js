// Local Storage
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// fetches most recent logged in user
i = currentUser.length - 1;

let templates = JSON.parse(
  localStorage.getItem(`${currentUser[i].userName}Templates`)
);

if (currentUser == null) {
  currentUser = [];
}

if (templates == null) {
  templates = [];
}

// if (templates.length > 1) {
//   i = templates.length - 1;
//   document.getElementById("container").innerHTML = templates[i].template;
// } else {
//   document.getElementById("container").innerHTML = templates[0].template;
// }

// Controls and Styles Tabs
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
                            <button class="button" id="alignLeftButton" onclick="alignLeft(event)">
                            <i class="fas fa-align-left" id="innerAlignLeft"></i>
                            </button>
                            <button class="button" id="alignCenterButton" onclick="alignCenter(event)">
                            <i class="fas fa-align-center" id="innerAlignCenter"></i>
                            </button>
                            <button class="button" id="alignRightButton" onclick="alignRight(event)">
                            <i class="fas fa-align-right" id="innerAlignRight"></i>
                            </button>
                            <button class="button" id="justifyButton" onclick="justify(event)">
                            <i class="fas fa-align-justify" id="innerJustify"></i>
                            </button>
                            <input type="color" name="text-element-color" id="textElementColor" onchange="changeTextElementColor()">
                            <button class="button" id="saveButton" onclick="saveText(event)">
                            <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <textarea rows="4" class="text" id='input'></textarea>
                        <p style='display:none' id='error'>Put input or delete input box</p>`;

    // Append div to drop target
    e.target.appendChild(newElement);

    // check if data dragged is image id
  } else if (data == "image") {
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
                            <button class="button" id="zoomInButton" onclick="zoomIn()">
                                <i class="fas fa-search-plus" id="inner"></i>
                            </button>
                            <button class="button" id="zoomOutButton" onclick="zoomOut()">
                                <i class="fas fa-search-minus" id="inner"></i>
                            </button>
                            <button class="button" id="uploadButton" onclick="upload(event)">
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
  // check if data dragged is imgOutput id
  else if (data.includes("imgOutput")) {
    element.parentNode.parentNode.parentNode.appendChild(
      element.parentNode.parentNode
    );
  }
  // check if data dragged is newContent text id
  else {
    element.parentNode.parentNode.appendChild(element.parentNode);
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
  let align = document.getElementById("input").style.textAlign;

  // check if input is empty
  if (input != "") {
    if (save == "inner") {
      saveId = document.getElementById(save);

      // Append content
      saveId.parentNode.parentNode.parentNode.innerHTML = `<p draggable="true" ondragstart="drag(event)" id='newContent-${i++}' class='newContent' style='font-size:${fontSize}; color:${color}; text-align:${align}' onclick='editText(event)'>${input}</p>`;
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
  width = output.style.width;

  if (save == "inner") {
    saveId = document.getElementById(save);

    // Append content
    saveId.parentNode.parentNode.parentNode.innerHTML = `<div class="image-wrapper newContent" id="newImgContent-${i}" onclick="editImage(event)">
                            <img id="imgOutput-${i++}" draggable="true" ondragstart="drag(event)" style="width:${width}" src="${
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
  align = editId.style.textAlign;
  text = editId.textContent;

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
                            <button class="button" id="alignLeftButton" onclick="alignLeft(event)">
                            <i class="fas fa-align-left" id="innerAlignLeft"></i>
                            </button>
                            <button class="button" id="alignCenterButton" onclick="alignCenter(event)">
                            <i class="fas fa-align-center" id="innerAlignCenter"></i>
                            </button>
                            <button class="button" id="alignRightButton" onclick="alignRight(event)">
                            <i class="fas fa-align-right" id="innerAlignRight"></i>
                            </button>
                            <button class="button" id="justifyButton" onclick="justify(event)">
                            <i class="fas fa-align-justify" id="innerJustify"></i>
                            </button>
                            <input type="color" name="text-element-color" id="textElementColor" onchange="changeTextElementColor()">
                            <button class="button" id="saveButton" onclick="saveText(event)">
                            <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <textarea rows="4" class="text" id='input' style='font-size:${font}; color:${color}; text-align:${align}'>${text}</textarea>
                        <p style='display:none' id='error'>Put input or delete input box</p>`;
}

// Edit image elements
function editImage(e) {
  // target selected text id
  let edit = e.target.id;

  editId = document.getElementById(edit);
  width = editId.clientWidth;

  // Append to content
  editId.parentNode.parentNode.innerHTML = `<div class="settings" id="settings">
                            <button class="button" id="closeButton" onclick="remove(event)">
                                <i class="far fa-trash-alt" id="inner"></i>
                            </button>
                            <button class="button" id="zoomInButton" onclick="zoomIn()">
                                <i class="fas fa-search-plus" id="inner"></i>
                            </button>
                            <button class="button" id="zoomOutButton" onclick="zoomOut()">
                                <i class="fas fa-search-minus" id="inner"></i>
                            </button>
                            <button class="button" id="uploadButton" onclick="upload(event)">
                                <i class="fas fa-edit" id="inner"></i>
                            </button>
                            <button class="button" id="saveButton" onclick="saveImage(event)">
                                <i class="fas fa-save" id="inner"></i>
                            </button>
                        </div>
                        <div class="image-wrapper">
                            <img id="output" draggable="true" ondragstart="drag(event)" style="width:${width}px" src="${editId.src}">
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
                            <button class="button" id="zoomInButton" onclick="zoomIn()">
                                <i class="fas fa-search-plus" id="inner"></i>
                            </button>
                            <button class="button" id="zoomOutButton" onclick="zoomOut()">
                                <i class="fas fa-search-minus" id="inner"></i>
                            </button>
                            <button class="button" id="uploadButton" onclick="upload(event)">
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
  // Upload image
  var reader = new FileReader();
  reader.onload = function () {
    var image = document.getElementById("output");
    image.src = reader.result;
  };
  reader.readAsDataURL(e.target.files[0]);

  let upload = document.getElementById("upload");
  let settings = document.getElementById("settings");
  upload.remove();
  settings.style.display = "flex";
};

// Zoom image in
function zoomIn() {
  let img = document.getElementById("output");
  let currentWidth = img.clientWidth;
  img.style.width = currentWidth + 50 + "px";
}

// Zoom image out
function zoomOut() {
  let img = document.getElementById("output");
  let currentWidth = img.clientWidth;
  img.style.width = currentWidth - 50 + "px";
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

// align left text
function alignLeft(e) {
  input = document.getElementById("input");
  // target alignLeft button id
  let alignLeft = e.target.id;
  if (alignLeft == `innerAlignLeft`) {
    alignLeftId = document.getElementById(alignLeft);

    input.style.textAlign = "left";
    alignLeftId.parentNode.parentNode.parentNode.style.textAlign = "left";
  }
}

// align right text
function alignRight(e) {
  input = document.getElementById("input");
  // target alignRight button id
  let alignRight = e.target.id;
  if (alignRight == `innerAlignRight`) {
    alignRightId = document.getElementById(alignRight);

    input.style.textAlign = "right";
    alignRightId.parentNode.parentNode.parentNode.style.textAlign = "right";
  }
}

// align center text
function alignCenter(e) {
  input = document.getElementById("input");
  // target alignCenter button id
  let alignCenter = e.target.id;
  if (alignCenter == `innerAlignCenter`) {
    alignCenterId = document.getElementById(alignCenter);

    input.style.textAlign = "center";
    alignCenterId.parentNode.parentNode.parentNode.style.textAlign = "center";
  }
}

// justify text
function justify(e) {
  input = document.getElementById("input");
  // target justify button id
  let justify = e.target.id;
  if (justify == `innerJustify`) {
    justifyId = document.getElementById(justify);

    input.style.textAlign = "justify";
    justifyId.parentNode.parentNode.parentNode.style.textAlign = "justify";
  }
}

// Display Save
function displaySave() {
  let box = document.getElementById("confirmSave");
  box.style.display = "flex";
}

// Cancel Save
function cancelSave() {
  let box = document.getElementById("confirmSave");
  box.style.display = "none";
  let error = document.getElementById("error");
  error.innerHTML = "";
}

// Save Email Template
function saveTemplate() {
  // Get date
  var d = new Date();

  let month = d.getMonth();
  d.setMonth(month);
  let date = d.getDate();
  d.setDate(date);
  let year = d.getFullYear();
  d.setFullYear(year);
  let hours = d.getHours();
  d.setHours(hours);
  let minutes = d.getMinutes();
  d.setMinutes(minutes);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let newTemplate = document.getElementById("emailContent").innerHTML;
  let name = document.getElementById("saveInput").value;
  if (name == "" || name == null || name == undefined) {
    let error = document.getElementById("error");
    error.innerHTML = "Please enter name for template";
    error.style.color = "red";
  } else {
    // fetches most current user
    i = currentUser.length - 1;

    // New email template object
    let emailTemplate = {
      name: name,
      template: newTemplate,
      user: currentUser[i].userName,
      date: `${
        months[d.getMonth()]
      } ${d.getDate()}, ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
    };

    // Checks if name exists already
    let isName = templates.find(
      (element) => element.name == emailTemplate.name
    );

    if (isName) {
      con = confirm("Name already exists, do you want to overwrite it?");
      if (con) {
        alert("overwritten");

        // templates[0] = emailTemplate;

        // localStorage.setItem(
        //   `${currentUser[i].userName}Templates`,
        //   JSON.stringify(templates)
        // );

        location.assign("./email_templates.html");
      }
    } else {
      templates.push(emailTemplate);

      localStorage.setItem(
        `${currentUser[i].userName}Templates`,
        JSON.stringify(templates)
      );
      location.assign("./email_templates.html");
    }
  }
}

document.getElementById("emailContent").innerHTML = templates[1].template;
