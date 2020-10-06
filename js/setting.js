// TAB
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

// fetches most recent logged in user
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

//Contact Name Display
var mContactName = currentUser[i].contactName;
var uContactName = document.querySelectorAll(".contact-name");
for (let i = 0; i < uContactName.length; i++) {
  uContactName[i].innerHTML = mContactName;
}

//Company Name Display
var mCompanyName = currentUser[i].companyName;
var uCompanyName = document.querySelectorAll(".company-name");
for (let i = 0; i < uCompanyName.length; i++) {
  uCompanyName[i].innerHTML = mCompanyName;
}

//Billing Address Display
var BillingAddress = currentUser[i].billingAddress;
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
