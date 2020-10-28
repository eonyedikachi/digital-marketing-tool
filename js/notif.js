  
    let   displaynotif = JSON.parse(localStorage.getItem("notificationnumb"));
    l= displaynotif.length;
    notif= document.getElementById("notif").innerHTML=l  
//    removing notif
function remove() {
    // window.localStorage.removeItem('notificationnumb');
    //  localStorage.setItem("notificationnumb",JSON.stringify(kk));
    let empty=[];

    displaynotif.push(empty);
    localStorage.setItem("notificationnumb",displaynotif)






}
