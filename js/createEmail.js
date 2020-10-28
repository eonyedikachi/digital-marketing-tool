// Local Storage
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// fetches most recent logged in user
i = currentUser.length - 1;

let templates = JSON.parse(
  localStorage.getItem(`${currentUser[i].userName}Templates`)
);

if (currentUser == null) {
  currentUser = [];
}

if (templates == null) {
  templates = [];
}

unlayer.init({
  id: "editor",
  displayMode: "email",
  // projectId: 6973,
  // templateId: "19064",
});

var design = templates[templates.length - 1];
console.log(design);
unlayer.loadDesign(design);

document.getElementById("save").addEventListener("click", () => {
  unlayer.saveDesign(function (design) {
    templates.push(design);

    localStorage.setItem(
      `${currentUser[i].userName}Templates`,
      JSON.stringify(templates)
    );

    alert("document saved");
  });
});
