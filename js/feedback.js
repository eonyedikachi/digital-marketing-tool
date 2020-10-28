// retriving suggestion from local storage
feedback = JSON.parse(localStorage.getItem("suggestions"));

// dclearing Function to display suggestions
function displaysuggest() {
  suggest = "";
  for (i = 0; i < feedback.length; i++) {
    suggest += ` <div id=suggest>
        <strong>Customer Name</strong>:   ${feedback[i].fullname}<br>
        <strong>Category</strong>:${feedback[i].category}  <br>
        <strong>Message</strong>:${feedback[i].message} <br>
        <div id="responds">
                    <button onclick="replysuggest()" class="reply"> Reply</button>
                    <button onclick="deletesuggest(${i})">Delete</button>
                </div> 
    </div>`;
  }
  document.getElementById("allsuggestion").innerHTML = suggest;
}
displaysuggest();
// delete function
function deletesuggest(id) {
  swal({
    title: `Are you sure you want to delete ${feedback[id].fullname}'s Suggestion`,
    text: "Once deleted, you will not be able to recover this user!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      feedback.splice(id, 1);
      displaysuggest();

      localStorage.setItem("suggestions", JSON.stringify(feedback));

      swal("Suggestion deleted", {
        icon: "success",
      });
    }
  });
}
// function to reply text
function replysuggest() {
  location.href = "./Replyuser.html";
}
