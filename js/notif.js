
displaynotif = JSON.parse(localStorage.getItem("notificationnumb"));
if (displaynotif == null) {
  displaynotif = [];
}
l = displaynotif.length;
notif = document.getElementById("notif").innerHTML = l;

if (l == 0) {
  document.getElementById("notif").style.display = "none";
}
//    removing notif
function remove() {
  window.localStorage.removeItem("notificationnumb");
  //  localStorage.setItem("notificationnumb",JSON.stringify(kk));
}
