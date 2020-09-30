let database = JSON.parse(localStorage.getItem("database"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (database == null) {
  database = [];
}

if (currentUser == null) {
  currentUser = [];
}
//Logging User
const logInUser = (e) => {
  e.preventDefault();
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  // Finds username and password in database
  let user = database.find(
    (element) => element.username == username && element.password == password
  );

  // Adds current user login to storage
  currentUser.push(user);
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  // User validation
  user
    ? window.location.assign("../dashboard.html")
    : alert("Username or Password not correct");
};

//Targeting the login  button
document.getElementById("login-button").addEventListener("click", logInUser);
