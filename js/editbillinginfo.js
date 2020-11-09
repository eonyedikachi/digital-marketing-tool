// fetches most recent logged in user
i = currentUser.length - 1;
// let database = JSON.parse(localStorage.getItem("database"));

// Get from local storage
users = JSON.parse(localStorage.getItem("database"));
userID = JSON.parse(localStorage.getItem("currentUserID"));

editUser = currentUser[i];
document.getElementById("billingContactName").value =
  editUser.billingContactName;
document.getElementById("billingCompanyName").value =
  editUser.billingCompanyName;
document.getElementById("billingAddress").value = editUser.billingAddress;
document.getElementById("billingPhoneNumber").value =
  editUser.billingPhoneNumber;
document.getElementById("billingEmailAddress").value =
  editUser.billingEmailAddress;

function bUpdate() {
  let edited = {
    billingContactName: document.getElementById("billingContactName").value,
    billingCompanyName: document.getElementById("billingCompanyName").value,
    billingAddress: document.getElementById("billingAddress").value,
    billingPhoneNumber: document.getElementById("billingPhoneNumber").value,
    billingEmailAddress: document.getElementById("billingEmailAddress").value,
    firstName: editUser.firstName,
    lastName: editUser.lastName,
    userName: editUser.userName,
    email: editUser.email,
    password: editUser.password,
    role: editUser.role,
    pics: editUser.pics,
    website: editUser.website,
  };
  users[userID] = edited;
  currentUser[i] = edited;

  localStorage.setItem("database", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  window.location.assign("../setting.html");
}
