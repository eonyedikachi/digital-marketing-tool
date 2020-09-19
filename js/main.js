// Hamburger Menu
const hamburger = document.querySelector(".hamburger-box");
const nav = document.querySelector(".nav-list");
let menuOpen = false;
hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    hamburger.classList.add("open");
    nav.classList.add("show");
    menuOpen = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("show");
    menuOpen = false;
  }
});

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