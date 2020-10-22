// fetches most recent logged in user
i = currentUser.length - 1;
// let database = JSON.parse(localStorage.getItem("database"));
editUser = currentUser[i];
document.getElementById("contactName").value = editUser.contactName;
document.getElementById("companyName").value = editUser.companyName;
document.getElementById("billingAddress").value = editUser.billingAddress;
document.getElementById("billingPhoneNumber").value = editUser.billingPhoneNumber;
document.getElementById("billingEmailAddress").value = editUser.billingEmailAddress;



if (editUser.contactName == undefined) {
  document.getElementById("contactName").value = "";
}
if (editUser.companyName == undefined) {
  document.getElementById("companyName").value = "";
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
    contactName: document.getElementById("contactName").value,
    companyName: document.getElementById("companyName").value,
    billingAddress: document.getElementById("billingAddress").value,
    billingPhoneNumber: document.getElementById("billingPhoneNumber").value,
    billingEmailAddress: document.getElementById("billingEmailAddress").value,
   };
  currentUser[i] = edited;
  localStorage.setItem("database", JSON.stringify(currentUser));
  localStorage.setItem( "currentUser", JSON.stringify(currentUser));
  // display();

alert(JSON.stringify(edited))
}

