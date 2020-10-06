editUser = currentUser[i];

document.getElementById("contactName").value = editUser.contactName;
document.getElementById("companyName").value = editUser.companyName;
document.getElementById("billingAddress").value = editUser.billingAddress;
document.getElementById("billingPhoneNumber").value = editUser.billingPhoneNumber;
document.getElementById("billingEmailAddress").value = editUser.billingEmailAddress;


// fetches most recent logged in user
i = currentUser.length - 1;

function update() {
  let edited = {
    firstName: document.getElementById("contactName").value,
    lastName: document.getElementById("companyName").value,
    userName: document.getElementById("billingAddress").value,
    email: document.getElementById("billingPhoneNumber").value,
    website: document.getElementById("billingEmailAddress").value,
   };
  currentUser[i] = edited;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // display();
}
