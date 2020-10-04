// Get from local storage
users = JSON.parse(localStorage.getItem("database"));

originalUsers = JSON.parse(localStorage.getItem("database"));

// Creates new storage if none exists
if (users == null) {
  users = [];
}

// Click event to add more users
document.querySelector(".addBtn").addEventListener("click", () => {
  // Radio buttons
  let userRole = "";
  if (document.getElementById("user-radio").checked) {
    userRole = "user";
  } else if (document.getElementById("admin-radio").checked) {
    userRole = "admin";
  } else {
    alert("Please select a user role");
  }

  // New user object
  newObj = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    userName: document.getElementById("username").value,
    password: document.getElementById("password").value,
    role: userRole,
    pics: document.getElementById("pics").value.split("\\")[2],
  };

  // Check if all inputs are filled
  if (
    newObj.firstName != "" &&
    newObj.lastName != "" &&
    newObj.email != "" &&
    newObj.userName != "" &&
    newObj.password != "" &&
    newObj.role != "" &&
    newObj.pics != null
  ) {
    // Store user object in array
    users.push(newObj);

    // Empty text boxes
    empty();

    // Adds new user to local storage
    localStorage.setItem("database", JSON.stringify(users));

    alert("User added successfully");
    location.reload();
  } else {
    alert("Fill in all input fields");
  }

  display();
});

// Display Content in HTML
function display() {
  cont = "";

  for (i = 0; i < users.length; i++) {
    cont += `
            <div class="profile"> 
            <div class="item">               
            <img src= "${users[i].pics}" style= "max-height: 100px"><br>
            </div>
            <div class="item">
            <strong>First Name</strong> : ${users[i].firstName}<br>
            </div>
            <div class="item">
            <strong>Last Name</strong> : ${users[i].lastName}<br>
            </div>
            <div class="item">
            <strong>Email</strong> : ${users[i].email}<br>
            </div>
            <div class="item">
            <strong>Username</strong> : ${users[i].userName}<br>
            </div>
            <div class="item">
            <strong>Password</strong> : ${users[i].password}<br>
            </div>
            <div class="item">
            <strong>Role</strong> : ${users[i].role}<br>
            </div>
            <div class="item">
            <button class = "delBtn" onclick="del(${i})">Delete</button>
            <button class = "editBtn" onclick="edit(${i})">Edit</button>
            </div>
         </div>`;
  }
  document.getElementById("main").innerHTML = cont;
}

display();

// Function to Delete
function del(id) {
  originalIndex = originalUsers.findIndex(
    (element) => element.userName == users[id].userName
  );

  con = confirm(`Are you sure you want to delete ${users[id].userName}?`);
  if (con == true) {
    originalUsers.splice(originalIndex, 1);

    users = originalUsers;
    localStorage.setItem("database", JSON.stringify(originalUsers));
    display();

    empty();
  }
}

// Function to Edit
function edit(id) {
  editUser = users[id];
  originalIndex = originalUsers.findIndex(
    (x) => x.userName == editUser.userName
  );
  document.getElementById("firstName").value = editUser.firstName;
  document.getElementById("lastName").value = editUser.lastName;
  document.getElementById("email").value = editUser.email;
  document.getElementById("username").value = editUser.userName;
  document.getElementById("password").value = editUser.password;
  document.getElementById("pics").value.split("\\")[2] = editUser.pics;
  document.getElementById("index").value = originalIndex;
}

// Function to Update
function update() {
  let userRole = "";
  if (document.getElementById("user-radio").checked) {
    userRole = "user";
  } else if (document.getElementById("admin-radio").checked) {
    userRole = "admin";
  } else {
    alert("Please select a user role");
  }

  i = document.getElementById("index").value;

  let updatedRecord = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    userName: document.getElementById("username").value,
    password: document.getElementById("password").value,
    role: userRole,
    pics: document.getElementById("pics").value.split("\\")[2],
  };

  if (
    updatedRecord.firstName != "" &&
    updatedRecord.lastName != "" &&
    updatedRecord.email != "" &&
    updatedRecord.userName != "" &&
    updatedRecord.password != "" &&
    updatedRecord.role != "" &&
    updatedRecord.pics != null
  ) {
    originalUsers[i] = updatedRecord;
    users = originalUsers;
    alert("User updated successfully");
    localStorage.setItem("database", JSON.stringify(originalUsers));
    display();

    // Empty text box
    empty();
  } else {
    alert("Fill in all input fields");
  }
}

// Search
function search() {
  // Search box
  param = document.getElementById("search").value.toLowerCase();

  // Filter
  users = users.filter((element) =>
    element.userName.toLowerCase().includes(param)
  );

  if (users == null || users == undefined || users.length == 0) {
    alert("No record found for " + param);
  } else {
    display();
  }

  users.length == 1
    ? (document.getElementById("searchResult").innerHTML =
        users.length + " record found")
    : (document.getElementById("searchResult").innerHTML =
        users.length + " records found");

  // display cancel button
  document.querySelector(".cancel").style.display = "block";
}

// Cancel Search
function cancelSearch() {
  // Get from local storage
  users = JSON.parse(localStorage.getItem("database"));
  originalUsers = JSON.parse(localStorage.getItem("database"));

  // Display Content in HTML
  display();

  // hide cancel button
  document.querySelector(".cancel").style.display = "none";

  // Empty search box
  document.getElementById("search").value = "";
  document.getElementById("searchResult").innerHTML = "";
}

// Empty text boxes
function empty() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("pics").value.split("\\")[2] = "";
}
