var randomNumber = Math.floor(Math.random() * 9) + 1;
var randomAvatar = "avatar" + randomNumber + ".png";
var randomImageSource = "images/" + randomAvatar;
document.querySelector(".profile img").setAttribute("src", randomImageSource);

editUser = currentUser[i];
document.getElementById("firstName").value = editUser.firstName;
document.getElementById("lastName").value = editUser.lastName;
document.getElementById("userName").value = editUser.userName;
document.getElementById("emailAddress").value = editUser.email;
document.getElementById("website").value = editUser.website;

// fetches most recent logged in user
i = currentUser.length - 1;

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
