  
    displaynotif = JSON.parse(localStorage.getItem("notificationnumb"));
    l= displaynotif.length;
    notif= document.getElementById("notif").innerHTML=l  
//    removing notif
function remove() {
    kk=window.localStorage.removeItem('notificationnumb');
     localStorage.setItem("notificationnumb",JSON.stringify(kk));

}
alert(notif)