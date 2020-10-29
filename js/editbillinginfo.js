// fetches most recent logged in user
i = currentUser.length - 1;
// let database = JSON.parse(localStorage.getItem("database"));
editUser = currentUser[i];
document.getElementById("billingContactName").value = editUser.billingContactName;
document.getElementById("billingCompanyName").value = editUser.billingCompanyName;
document.getElementById("billingAddress").value = editUser.billingAddress;
document.getElementById("billingPhoneNumber").value =
  editUser.billingPhoneNumber;
document.getElementById("billingEmailAddress").value =
  editUser.billingEmailAddress;

if (editUser.contactName == undefined) {
  document.getElementById("billingContactName").value = "";
}
if (editUser.companyName == undefined) {
  document.getElementById("billingCompanyName").value = "";
}
if (editUser.billingAddress == undefined) {
  document.getElementById("billingAddress").value = "";
}
if (editUser.billingPhoneNumber == undefined) {
  document.getElementById("billingPhoneNumber").value = "";
}
if (editUser.billingEmailAddress == undefined) {
  document.getElementById("billingEmailAddress").value = "";
}

function update() {
  let edited = {
    billingContactName: document.getElementById("billingContactName").value,
    billingCompanyName: document.getElementById("billingCompanyName").value,
    billingAddress: document.getElementById("billingAddress").value,
    billingPhoneNumber: document.getElementById("billingPhoneNumber").value,
    billingEmailAddress: document.getElementById("billingEmailAddress").value,
    firstName: editUser.firstName,
    lastName: editUser.lastName,
    userName: editUser.userName,
    email: editUser.emailAddress,
    password: editUser.password,
    role: editUser.role,
    pics: editUser.pics,
    website: editUser.website,
  };
  currentUser[i] = edited;
  localStorage.setItem("database", JSON.stringify(currentUser));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // display();

  alert(JSON.stringify(edited));
}
