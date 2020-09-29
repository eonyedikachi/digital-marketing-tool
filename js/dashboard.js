let database = JSON.parse(localStorage.getItem("database"));

if (database == null) {
  database = [];
}

let randomNum = Math.floor(Math.random() * database.length);

document.getElementById(
  "usersname111"
).innerText = `${database[randomNum].firstName} ${database[randomNum].lastName}`;
