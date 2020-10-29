// fetches most recent logged in user
i = currentUser.length - 1;
// let database = JSON.parse(localStorage.getItem("database"));

var source;



editUser = currentUser[i];
document.getElementById("firstName").value = editUser.firstName;
document.getElementById("lastName").value = editUser.lastName;
document.getElementById("userName").value = editUser.userName;
document.getElementById("emailAddress").value = editUser.email;
document.getElementById("website").value = editUser.website;

if (
  document.getElementById("website").value == "" ||
  document.getElementById("website").value == null ||
  document.getElementById("website").value == undefined
) {
  document.getElementById("website").value = "";
}
var randomNumber = Math.floor(Math.random() * 9) + 1;
var randomAvatar = "avatar" + randomNumber + ".png";
var randomImageSource = "images/" + randomAvatar;
if (editUser.pics == null || editUser.pics == undefined) {
  document.querySelector(".profile img").setAttribute("src", randomImageSource);
} else {
  document.querySelector(".profile img").setAttribute("src", editUser.pics);
}

function update() {
  let edited = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    userName: document.getElementById("userName").value,
    email: document.getElementById("emailAddress").value,
    password: editUser.password,
    role: editUser.role,
    pics: editUser.pics,
    website: document.getElementById("website").value,
  };
  currentUser[i] = edited;
  localStorage.setItem("database", JSON.stringify(currentUser));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // display();
  
  window.location.assign("../setting.html")
}

//upload picture or video from device
var loadFile = function (e) {
  // Upload image
  var image = document.getElementById("output");

  var reader = new FileReader();
  reader.onload = function () {
    editUser.pics = reader.result;
    image.src = editUser.pics;
  };
  reader.readAsDataURL(e.target.files[0]);

  localStorage.setItem("currentUser", JSON.stringify(currentUser));
};
