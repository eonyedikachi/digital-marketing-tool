
var randomNumber = Math.floor(Math.random() * 9) + 1;
var randomAvatar = "avatar" + randomNumber + ".png";
var randomImageSource = "images/" + randomAvatar;
document.querySelector(".profile img").setAttribute("src", randomImageSource);

function edit(id) {
    editUser = currentUser[i];
    document.getElementById("firstName").value = database[i].firstName;
    document.getElementById("lastName").value = database[i].lastName;
    document.getElementById("userName").value = database[i].userName;
    document.getElementById("emailAddress").value = database[i].email;
    document.getElementById("website").value = database[i].website;
  }
  function update() {
    i = document.getElementById("index").value;

    let edited = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      pics: document.getElementById("pics").value.split("\\")[2],
    };
    users[i] = edited;
    localStorage.setItem("users", JSON.stringify(users));
    // display();
  }