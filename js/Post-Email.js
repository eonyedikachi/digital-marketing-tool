// Local Storage
currentUser = JSON.parse(localStorage.getItem("currentUser"));

// fetches most recent logged in user
i = currentUser.length - 1;

// Get saved templates
let templates = JSON.parse(
  localStorage.getItem(`${currentUser[i].userName}Templates`)
);

// Get subscribers
let subscibers = JSON.parse(localStorage.getItem("subscibers"));

function display() {
  if (document.getElementById("all").checked) {
    document.getElementById("segmenttext").style.display = "none";
    document.getElementById("alltext").style.display = "block";
    document.getElementById("parent").style.display = "block";
  } else if (document.getElementById("segment").checked) {
    document.getElementById("alltext").style.display = "none";
    document.getElementById("segmenttext").style.display = "block";
    document.getElementById("parent").style.display = "block";
  }
}

// EmailJS init
(function () {
  emailjs.init("user_9mn3lUdujQ27p4aPrr188");
})();

// Send email to all contacts
document.getElementById("send").addEventListener("click", () => {
  // store emails of all subscribers
  var emails = "";
  for (x = 0; x < subscibers.length; x++) {
    emails += subscibers[x].email + ",";
  }

  // Email template html
  var html = templates[i].html; // final html

  var params = {
    sender_name: `${currentUser[i].firstName} ${currentUser[i].lastName}`,
    to_email: emails,
    my_html: html,
  };

  document.getElementById(
    "send"
  ).innerHTML = `<img src="./images/ajax-loader.gif" alt="loader">`;

  emailjs.send("martreach", "martreach", params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      swal("Email Sent Successfully", {
        icon: "success",
      });
      document.getElementById("send").innerHTML = "Send";
    },
    function (error) {
      console.log("FAILED...", error);
      swal(error.text, {
        icon: "error",
      });
      document.getElementById("send").innerHTML = "Send";
    }
  );
});

// document.getElementById("one").onclick = function () {
//   location.href = "./chooserecipient.html";
// };
// document.getElementById("two").onclick = function () {
//   location.href = "./chooserecipient.html";
// };
// document.getElementById("three").onclick = function () {
//   location.href = "./chooserecipient.html";
// };
