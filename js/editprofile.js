// fetches most recent logged in user
i = currentUser.length - 1;
let database = JSON.parse(localStorage.getItem("database"));

document.getElementById("website").value = "";

alert (database);
editUser = currentUser[i];
document.getElementById("firstName").value = editUser.firstName;
document.getElementById("lastName").value = editUser.lastName;
document.getElementById("userName").value = editUser.userName;
document.getElementById("emailAddress").value = editUser.email;
document.getElementById("website").value = editUser.website;

var randomNumber = Math.floor(Math.random() * 9) + 1;
var randomAvatar = "avatar" + randomNumber + ".png";
var randomImageSource = "images/" + randomAvatar;
if (editUser.image == null || editUser.image == undefined) {
  document.querySelector(".profile img").setAttribute("src", randomImageSource);
} else {
  document.querySelector(".profile img").setAttribute("src", editUser.image);
}

document.getElementById("website").value = "";
function update() {
  let edited = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    userName: document.getElementById("userName").value,
    email: document.getElementById("emailAddress").value,
    website: document.getElementById("website").value,
  };
  currentUser[i] = edited;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // display();
}

//upload picture or video from device
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
  editUser.image = image.src;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
};
