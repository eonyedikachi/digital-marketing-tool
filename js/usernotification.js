feedback = JSON.parse(localStorage.getItem("replies"))


// dclearing Function to display suggestions
function displayreply(){
    reply="";
    for(i=0; i<feedback.length; i++){
        reply+=`        <div id="middle">
        <strong>From</strong>:  Admin <br>
        <Strong>Message</Strong>: ${feedback[i].message} <br>
        <button id="button" onclick="deletereply(${i})">Delete</button>
        </div>`
     }
    document.getElementById("kkk").innerHTML = reply
}
displayreply()
    // delete function
function deletereply(id)
{
    if(confirm(`Are you sure you want to delete this`)){
  feedback.splice(id,1)
  displayreply()
}
}
