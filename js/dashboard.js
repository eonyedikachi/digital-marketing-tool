let database = JSON.parse(localStorage.getItem("database"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (database == null) {
  database = [];
}

if (currentUser == null) {
  currentUser = [];
}

// fetches most recent logged in user
i = currentUser.length - 1;

// Displays Users Name
document.getElementById(
  "usersname111"
).innerHTML = `${currentUser[i].firstName} ${currentUser[i].lastName}`;

// clear the temporary local storage
let signOut = () => {
  localStorage.removeItem("currentUser");
};
