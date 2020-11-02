let database = JSON.parse(localStorage.getItem("database"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// fetches most recent logged in user
i = currentUser.length - 1;

let stickyNote = localStorage.getItem(`${currentUser[i].userName}stickyNote`);

if (database == null) {
  database = [];
}

if (currentUser == null) {
  currentUser = [];
}

if (stickyNote == null) {
  stickyNote = [];
}

// Displays Users Name
document.getElementById(
  "usersname111"
).innerHTML = `${currentUser[i].firstName} ${currentUser[i].lastName}`;

// clear the temporary local storage
let signOut = () => {
  localStorage.removeItem("currentUser");
};

// Profile Pic
image = document.getElementById("profilePic");
if (currentUser[i].pics == undefined) {
  image.src = "images/caricature1.svg";
} else {
  image.src = currentUser[i].pics;
}

// Open Sticky Note
var note = document.getElementById("stickyNote");

function openNote() {
  if (note.style.display != "none") {
    note.style.display = "none";
  } else {
    note.style.display = "block";
  }
}

// Save Sticky Note
function saveNote() {
  stickyNote = note.innerHTML;
  localStorage.setItem(`${currentUser[i].userName}stickyNote`, stickyNote);
}

// Get note
note.innerHTML = stickyNote;
