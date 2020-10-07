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

// Email Template
function droppable(e) {
  e.preventDefault();
}
function drag(e) {
  // get all element id dynamically
  let elementId = e.target.id;
  let elementName = e.target.name;

  // set data for ID
  e.dataTransfer.setData("id", elementId);

  // set data for name
  e.dataTransfer.setData("name", elementName);
}

function drop(e) {
  e.preventDefault();

  // get data
  let data = e.dataTransfer.getData("id");

  // get element to be dragged by ID
  let element = document.getElementById(data);

  // create copy of images
  let newElement = document.createElement("div");
  newElement.setAttribute("class", "content");

  newElement.innerHTML = `<div class="close">
                            <button class="close-button" id="closeButton">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <input type="text" class="text">`;

  console.log(newElement);

  // Create paragraph with name
  newName = document.createElement("p");
  newName.innerHTML = name;

  e.target.appendChild(newElement);
}

let closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
  closeButton.parentNode.parentNode.remove();
});
