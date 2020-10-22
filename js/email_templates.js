let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// fetches most recent logged in user
recent = currentUser.length - 1;

let templates = JSON.parse(
  localStorage.getItem(`${currentUser[recent].userName}Templates`)
);

let originalTemplates = JSON.parse(
  localStorage.getItem(`${currentUser[recent].userName}Templates`)
);

if (currentUser == null) {
  currentUser = [];
}

if (templates == null) {
  templates = [];
}

// Display templates
display();

// Display templates
function display() {
  let list = document.getElementById("templateList");

  cont = "";

  for (i = 0; i < templates.length; i++) {
    cont += `<div class="temp">
                        <div class="description">
                            <div class="image">
                                <img src="../images/email_template.png"
                                    alt="">
                            </div>
                            <div class="info">
                                <button id="templateName" class="template-name" onclick="editEmail()">${templates[i].name}</button>
                                <p><span>Last edited</span> on ${templates[i].date}</p>
                                <p>${templates[i].user}</p>
                            </div>
                        </div>
                        <div class="edit">
                            <button id="editBtn" onclick="editEmail()">Edit</button>
                            <button onclick="deleteTemp(${i})">Delete</button>
                        </div>
                </div>`;
    list.innerHTML = cont;
  }
}

// Delete Template
function deleteTemp(id) {
  originalIndex = originalTemplates.findIndex(
    (element) => element.name == templates[id].name
  );

  swal({
    title: `Are you sure you want to delete ${templates[id].name}?`,
    text: "Once deleted, you will not be able to recover this template!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      originalTemplates.splice(originalIndex, 1);

      templates = originalTemplates;
      localStorage.setItem(
        `${currentUser[recent].userName}Templates`,
        JSON.stringify(originalTemplates)
      );

      display();

      swal("Your template has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Delete cancelled", "", "error");
    }
  });
}

// Search Templates
function search() {
  // Search box
  param = document.getElementById("search").value.toLowerCase();
  // Filter
  templates = templates.filter((element) =>
    element.name.toLowerCase().includes(param)
  );

  if (
    templates == null ||
    templates == undefined ||
    templates.length == 0 ||
    document.getElementById("search").value == ""
  ) {
    swal("No Result!", "No Record Found!", "error");

    // Get from local storage
    templates = JSON.parse(
      localStorage.getItem(`${currentUser[recent].userName}Templates`)
    );

    originalTemplates = JSON.parse(
      localStorage.getItem(`${currentUser[recent].userName}Templates`)
    );
  } else {
    document.getElementById("cancelBtn").style.display = "unset";

    display();
  }
}

function cancel() {
  // Get from local storage
  templates = JSON.parse(
    localStorage.getItem(`${currentUser[recent].userName}Templates`)
  );

  originalTemplates = JSON.parse(
    localStorage.getItem(`${currentUser[recent].userName}Templates`)
  );

  // Display Content in HTML
  display();

  // hide cancel button
  document.getElementById("cancelBtn").style.display = "none";

  // Empty search box
  document.getElementById("search").value = "";
}

// Edit Email Template
function editEmail() {
  location.assign("../createEmail.html");
}
