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
//FirstName Display
var mFirstName = currentUser[i].firstName;
var uFirstName = document.querySelectorAll(".first-name");
for (let i = 0; i < uFirstName.length; i++) {
  uFirstName[i].innerHTML = mFirstName;
}

//LastName Display
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

//Email Display
var mEmail = currentUser[i].email;
var uEmail = document.querySelectorAll(".email-address");
for (let i = 0; i < uEmail.length; i++) {
  uEmail[i].innerHTML = mEmail;
}
