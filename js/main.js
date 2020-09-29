// Hamburger Menu
const hamburger = document.querySelector(".hamburger-box");
const nav = document.querySelector(".nav-list");
let menuOpen = false;
hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.classList.add("open");
    nav.classList.add("show");
    menuOpen = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("show");
    menuOpen = false;
  }
});

// Settings Tab
function openSetting(evt, settingName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(settingName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Toggle Password
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

//Creating Local Storage
let database = JSON.parse(localStorage.getItem("database"));

if (database == null) {
  database = [];
}
// console.log(database);
//Registering User

const registerUser = () => {
  newUser = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  //Storing inside the array
  database.push(newUser);

  //Routing to dashboard
  location.assign("../dashboard.html");

  //updating local storage
  localStorage.setItem("database", JSON.stringify(database));
};

let registerButton = document.getElementById("register");
registerButton.addEventListener("click", registerUser);

console.log(database);
