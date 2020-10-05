


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

//FirstName Display
var mFirstName = database[i].firstName;
var uFirstName = document.querySelectorAll(".first-name");
for (var i = 0; i < uFirstName.length; i++) {
  uFirstName[i].innerHTML = mFirstName;
}

//LastName Display
var mLastName = database[i].lastName;
var uLastName = document.querySelectorAll("p.last-name");
for (var i = 0; i < uLastName.length; i++) {
  uLastName[i].innerHTML = mLastName;
}

//UserName Display
var mUserName = database[i].userName;
var uUserName = document.querySelectorAll("p.user-name");
for (var i = 0; i < uUserName.length; i++) {
  uUserName[i].innerHTML = mUserName;
}

//Email Display
var mEmail = database[i].email;
var uEmail = document.querySelectorAll("p.email-address");
for (var i = 0; i < uEmail.length; i++) {
  uEmail[i].innerHTML = mEmail;
}