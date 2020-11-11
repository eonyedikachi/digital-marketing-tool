// Local Storage
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// fetches most recent logged in user
i = currentUser.length - 1;

let templates = JSON.parse(
  localStorage.getItem(`${currentUser[i].userName}Templates`)
);

let tempID = localStorage.getItem("tempID");

if (currentUser == null) {
  currentUser = [];
}

if (templates == null || templates == undefined || templates.length == 0) {
  templates = [];

  // Initialize unplayer
  unlayer.init({
    id: "editor",
    displayMode: "email",
    projectId: 6973,
    templateId: "19064",
  });
} else {
  unlayer.init({
    id: "editor",
    displayMode: "email",
  });

  // Load saved template
  var design = templates[tempID].json;
  console.log(design);
  unlayer.loadDesign(design);
}

// Save Template
document.getElementById("save").addEventListener("click", () => {
  unlayer.exportHtml(function (data) {
    var json = data.design; // design json
    var html = data.html; // final html

    let name = document.getElementById("templateName").value; //Template name
    if (name == "" || name == null || name == undefined) {
      let error = document.getElementById("error");
      error.innerHTML = "Please enter name for template";
      error.style.color = "red";
    } else {
      // Get date
      var d = new Date();

      let month = d.getMonth();
      d.setMonth(month);
      let date = d.getDate();
      d.setDate(date);
      let year = d.getFullYear();
      d.setFullYear(year);
      let hours = d.getHours();
      d.setHours(hours);
      let minutes = d.getMinutes();
      d.setMinutes(minutes);

      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      months[month];

      templates.push({
        name: name,
        user: currentUser[i].userName,
        json: json,
        html: html,
        date: `${
          months[d.getMonth()]
        } ${d.getDate()}, ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
      });

      localStorage.setItem(
        `${currentUser[i].userName}Templates`,
        JSON.stringify(templates)
      );

      swal("Template saved", {
        icon: "success",
      });

      setTimeout(() => {
        location.assign("../email_templates.html");
      }, 2000);
    }
  });
});

// EmailJS init
(function () {
  emailjs.init("user_9mn3lUdujQ27p4aPrr188");
})();

// Send test email
document.getElementById("send").addEventListener("click", () => {
  unlayer.exportHtml(function (data) {
    var html = data.html; // final html

    var params = {
      sender_name: document.getElementById("senderName").value,
      to_email: document.getElementById("toEmail").value,
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
});
