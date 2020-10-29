// Setting bold property

function boldd() {
  const p = document.getElementById("comment");
  if (p.style.fontWeight !== "bold") {
    p.style.fontWeight = "bold";
  } else {
    p.style.fontWeight = "normal";
  }
}

// setting ittalize
function ittalize() {
  const p = document.getElementById("comment");
  if (p.style.fontStyle !== "italic") {
    p.style.fontStyle = "italic";
  } else {
    p.style.fontStyle = "normal";
  }
}

// underline
function underline() {
  const p = document.getElementById("comment");
  if (p.style.textDecoration !== "underline") {
    p.style.textDecoration = "underline";
  } else {
    p.style.textDecoration = "none";
  }
}

//  text-align-right

function tright() {
  const p = document.getElementById("comment");
  if (p.style.textAlign !== "right") {
    p.style.textAlign = "right";
  }
}
//  text-align-left

function tleft() {
  const p = document.getElementById("comment");
  if (p.style.textAlign !== "left") {
    p.style.textAlign = "left";
  }
}
//  text-align-center

function tcenter() {
  const p = document.getElementById("comment");
  if (p.style.textAlign !== "center") {
    p.style.textAlign = "center";
  }
}
// font-size

function fontsize() {
  const p = document.getElementById("comment");
  const size = document.getElementById("fontsize").value;
  p.style.fontSize = `${size}px`;
}

// collecting suggestion content

// collecting data from local storage
let database = JSON.parse(localStorage.getItem("database"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (database == null) {
  database = [];
}

if (currentUser == null) {
  currentUser = [];
}
// accessing loged in user
let i = currentUser.length - 1;

// fetcing the name of logged in user
let namme = `${currentUser[i].firstName} ${currentUser[i].lastName}`;

// feching the message of logged in user
let message = document.getElementById("comment").value;

//  feching selected category
let category = document.getElementById("catlist").value;

//  putting all info into object
suggestions = JSON.parse(localStorage.getItem("suggestions"));
suggestionnumb = [];

function sendsuggest() {
  if (suggestions == null) {
    suggestions = [];
  }
  const message = document.getElementById("comment").value;
  const infos = 
  {
       fullname: `${namme}`,
         category: category,
         message: message,
       };
  suggestions.push(infos);
  suggestionnumb.push(infos);
  localStorage.setItem("suggestions", JSON.stringify(suggestions));
  localStorage.setItem("notificationnumba", JSON.stringify(suggestionnumb));

  swal("Reply Sent", {
    icon: "success",
  });

  document.getElementById("comment").value = "";
}
