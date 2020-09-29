//Creating Local Storage
let database = JSON.parse(localStorage.getItem("database"));

if (database == null) {
  database = [];
}
// console.log(database);
//Registering User

const registerUser = (e) => {
  e.preventDefault();
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
  newUser.firstName != "" &&
  newUser.lastName != "" &&
  newUser.username != "" &&
  newUser.email != "" &&
  newUser.password != ""
    ? location.assign("../dashboard.html")
    : alert("Fill in all inputs");

  //updating local storage
  localStorage.setItem("database", JSON.stringify(database));
};

let registerButton = document.getElementById("register");
registerButton.addEventListener("click", registerUser);
