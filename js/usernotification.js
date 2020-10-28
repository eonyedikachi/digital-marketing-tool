feedback = JSON.parse(localStorage.getItem("replies"));

// dclearing Function to display suggestions
function displayreply() {
  reply = "";
  for (i = 0; i < feedback.length; i++) {
    reply += `        <div id="middle">
        <strong>From</strong>:  Admin <br>
        <Strong>Message</Strong>: ${feedback[i].message} <br>
        <button id="button" onclick="deletereply(${i})">Delete</button>
        </div>`;
  }
  document.getElementById("kkk").innerHTML = reply;
}
displayreply();

// delete function
function deletereply(id) {
  swal({
    title: `Are you sure you want to delete this`,
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      feedback.splice(id, 1);
      localStorage.setItem("replies", JSON.stringify(feedback));
      displayreply();
      swal("Reply Deleted", {
        icon: "success",
      });
    }
  });
}
