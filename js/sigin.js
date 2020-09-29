let database = JSON.parse(localStorage.getItem("database"));

if (database == null) {
  database = [];
}
//Logging User
const logInUser = (e) => {
  e.preventDefault();
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-password").value;

  database.find(
    (element) => element.username == username && element.password == password
  )
    ? window.location.assign("../dashboard.html")
    : alert("Username or Password not correct");
};

//Targeting the login  button
document.getElementById("login-button").addEventListener("click", logInUser);
