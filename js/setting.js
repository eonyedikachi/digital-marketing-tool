// TAB FUNCTION
function openSetting(evt, settingName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(settingName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("Contact Information").style.display = "block";

// fetches most recent logged in user
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
i = currentUser.length - 1;
//First Name Display
var mFirstName = currentUser[i].firstName;
var uFirstName = document.querySelectorAll(".first-name");
for (let i = 0; i < uFirstName.length; i++) {
  uFirstName[i].innerHTML = mFirstName;
}

//Last Name Display
var mLastName = currentUser[i].lastName;
var uLastName = document.querySelectorAll(".last-name");
for (let i = 0; i < uLastName.length; i++) {
  uLastName[i].innerHTML = mLastName;
}

//UserName Display
var mUserName = currentUser[i].userName;
var uUserName = document.querySelectorAll(".user-name");
for (let i = 0; i < uUserName.length; i++) {
  uUserName[i].innerHTML = mUserName;
}

//Website Display
var mWebsite = currentUser[i].website;
var uWebsite = document.querySelectorAll(".website");
for (let i = 0; i < uWebsite.length; i++) {
  uWebsite[i].innerHTML = mWebsite;
}
//Email Display
var mEmail = currentUser[i].email;
var uEmail = document.querySelectorAll(".email-address");
for (let i = 0; i < uEmail.length; i++) {
  uEmail[i].innerHTML = mEmail;
}

// //Contact Name Display
// var mContactName = currentUser[i].contactName;
// if (mContactName == undefined) {
//   mContactName = "";
// }
// var uContactName = document.querySelectorAll(".contact-name");
// for (let i = 0; i < uContactName.length; i++) {
//   uContactName[i].innerHTML = mContactName;
// }
// // if (mContactName == undefined) {
// //   mContactName = "";
// // }

// //Company Name Display
// document.querySelectorAll(".company-name").value = "";
// var mCompanyName = currentUser[i].companyName;
// if (mCompanyName == undefined) {
//   mCompanyName = "";
// }
// var uCompanyName = document.querySelectorAll(".company-name");
// for (let i = 0; i < uCompanyName.length; i++) {
//   uCompanyName[i].innerHTML = mCompanyName;
// }

//Billing Contact Name Display
document.querySelectorAll(".billing-contact-name").value = "";
var mBillingContactName = currentUser[i].billingContactName;
var uBillingContactName = document.querySelectorAll(".billing-contact-name");
for (let i = 0; i < uBillingContactName.length; i++) {
  uBillingContactName[i].innerHTML = mBillingContactName;
}

//Billing Company Name Display
document.querySelectorAll(".billing-company-name").value = "";
var mBillingCompanyName = currentUser[i].billingCompanyName;
var uBillingCompanyName = document.querySelectorAll(".billing-company-name");
for (let i = 0; i < uBillingCompanyName.length; i++) {
  uBillingCompanyName[i].innerHTML = mBillingCompanyName;
}

//Billing Address Display
document.querySelectorAll(".billing-address").value = "";
var mBillingAddress = currentUser[i].billingAddress;
var uBillingAddress = document.querySelectorAll(".billing-address");
for (let i = 0; i < uBillingAddress.length; i++) {
  uBillingAddress[i].innerHTML = mBillingAddress;
}

//Billing Phone Number Display
var mBillingPhoneNumber = currentUser[i].billingPhoneNumber;
var uBillingPhoneNumber = document.querySelectorAll(".billing-phone-number");
for (let i = 0; i < uBillingPhoneNumber.length; i++) {
  uBillingPhoneNumber[i].innerHTML = mBillingPhoneNumber;
}

//Billing Email Address Display
var mBillingEmailAddress = currentUser[i].billingEmailAddress;
var uBillingEmailAddress = document.querySelectorAll(".billing-email-address");
for (let i = 0; i < uBillingEmailAddress.length; i++) {
  uBillingEmailAddress[i].innerHTML = mBillingEmailAddress;
}
