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

// setting Reply to local Storage
replies = JSON.parse(localStorage.getItem("replies"));
numb = [];

function sendreply() {
  if (replies == null) {
    replies = [];
  }
  const message = document.getElementById("comment").value;
  const info = {
    message: message,
  };
  replies.push(info);
  numb.push(info);
  localStorage.setItem("replies", JSON.stringify(replies));
  localStorage.setItem("notificationnumb", JSON.stringify(numb));

  swal("Reply Sent", {
    icon: "success",
  });

  document.getElementById("comment").value = "";
}
