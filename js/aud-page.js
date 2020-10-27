







function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, "");
  } else {
    elem.className = elem.className.replace(/\s+/g, " ") + " " + className;
  }

  return elem;
}

function toggleDisplay(elem) {
  const curDisplayStyle = elem.style.display;

  if (curDisplayStyle === "none" || curDisplayStyle === "") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleMenuDisplay(e) {
  const dropdownn = e.currentTarget.parentNode;
  const menu = dropdownn.querySelector(".menu");
  const icon = dropdownn.querySelector(".fa-angle-right");

  toggleClass(menu, "hide");
  toggleClass(icon, "rotate-90");
}

function handleOptionSelected(e) {
  toggleClass(e.target.parentNode, "hide");

  const id = e.target.id;
  const newValue = e.target.textContent + " ";
  const titleElem = document.querySelector(".dropdownn .title");
  const icon = document.querySelector(".dropdownn .title .fa");

  titleElem.textContent = newValue;
  titleElem.appendChild(icon);

  //trigger custom event
  document
    .querySelector(".dropdownn .title")
    .dispatchEvent(new Event("change"));
  //setTimeout is used so transition is properly shown
  setTimeout(() => toggleClass(icon, "rotate-90", 0));
}

function handleTitleChange(e) {
  // const result = document.getElementById('result');
  // result.innerHTML = 'The result is: ' + e.target.textContent;
}

//get elements
const dropdownTitle = document.querySelector(".dropdownn .title");
const dropdownOptions = document.querySelectorAll(".dropdownn .option");

//bind listeners to these elements
dropdownTitle.addEventListener("click", toggleMenuDisplay);

dropdownOptions.forEach((option) =>
  option.addEventListener("click", handleOptionSelected)
);

document
  .querySelector(".dropdownn .title")
  .addEventListener("change", handleTitleChange);

// Open ADDNEWSUBSIBBER
function AddSubscriber() {
  var bottomContainer = document.getElementById("bottom-container");
  bottomContainer.classList.add("hidden");
  document.querySelector("#addASubscriber").style.display = "block";
  document.querySelector("#importContact").style.display = "none";
  document.querySelector("#manageContact").style.display = "none";
  document.querySelector("#organizeContact").style.display = "none";
  document.querySelector(".contactSection").style.display = "none";
}

// OPEN ImportContact
function importContact() {
  var bottomContainer = document.getElementById("bottom-container");
  bottomContainer.classList.add("hidden");
  document.querySelector("#importContact").style.display = "block";
  document.querySelector("#manageContact").style.display = "none";
  document.querySelector("#addASubscriber").style.display = "none";
  document.querySelector("#organizeContact").style.display = "none";
  document.querySelector(".contactSection").style.display = "none";
}

// OPEN MANAGECONTACT
function manageContact() {
  var bottomContainer = document.getElementById("bottom-container");
  bottomContainer.classList.add("hidden");
  document.querySelector("#manageContact").style.display = "block";
  document.querySelector("#importContact").style.display = "none";
  document.querySelector("#addASubscriber").style.display = "none";
  document.querySelector("#organizeContact").style.display = "none";
  document.querySelector(".contactSection").style.display = "none";
}
// OPEN ORGANIZECONTACT
function organizeContact() {
  var bottomContainer = document.getElementById("bottom-container");
  bottomContainer.classList.add("hidden");
  document.querySelector("#organizeContact").style.display = "block";
  document.querySelector("#manageContact").style.display = "none";
  document.querySelector("#importContact").style.display = "none";
  document.querySelector("#addASubscriber").style.display = "none";
  document.querySelector(".contactSection").style.display = "none";
}

// OPEN VIEWCONTACT
function viewContact(){
  var bottomContainer = document.getElementById("bottom-container");
  bottomContainer.classList.add("hidden");
  document.querySelector(".contactSection").style.display = "block";
  document.querySelector("#organizeContact").style.display = "none";
  document.querySelector("#manageContact").style.display = "none";
  document.querySelector("#importContact").style.display = "none";
  document.querySelector("#addASubscriber").style.display = "none";
}





// SUBMIT A SUBSCRIBER
//Creating Local Storage
let subscibers = JSON.parse(localStorage.getItem("subscibers"));

if (subscibers == null) {
  subscibers = [];
}

// update contacts and subscribers count
document.getElementById("contacts").innerHTML = subscibers.length;
document.getElementById("subscribers").innerHTML = subscibers.length;


function subscribeUser() {
  newSubscibers = {
    email: document.getElementById("email").value,
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address1: document.getElementById("address1").value,
    address2: document.getElementById("address2").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    postal: document.getElementById("postal").value,
    country: document.getElementById("country").value,
    phone: document.getElementById("phone").value,
    month: document.getElementById("month").value,
    day: document.getElementById("day").value,
    newuserr: document.getElementById("newuserr").value,
    updateuserr: document.getElementById("updateuserr").value,
    role: "user",
  };

  //Storing inside the array
  validate(newSubscibers);

  subscibers.push(newSubscibers);

  // updating local storage
  localStorage.setItem("subscibers", JSON.stringify(subscibers));
  // redirect user to dashboard
  location.assign(".audience-btn");
}

function validate(user) {
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regExEmail.test(user.email)) {
    document.getElementById("error").innerHTML = "Enter a valid email address!";
    return false;
  } else if (user.firstName.length < 2) {
    document.getElementById("error").innerHTML =
      "first Name must be greater than 2 characters!";
    return false;
  } else if (user.lastName.length < 2) {
    document.getElementById("error").innerHTML =
      "lastName must be be greater than 2 character";
    return false;
  } else {
    return checkDuplicateUser(user.email);
  }
}

// Function to check username and email already taken!
function checkDuplicateUser(email) {
  const isEmail = subscibers.find((element) => element.email == email);

  if (isEmail) {
    document.getElementById("error").innerHTML = "Email has been taken!";
  } else {
    return null;
  }

  // Upload javascript
  function continueUpload() {
    var x = document.querySelector(".uploadimg");
    var txt = "";
    if (files in x) {
      if (x.files.length == 0) {
        txt = "Select one or more files.";
      } else {
        for (var i = 0; i < x.files.length; i++) {
          txt += "<br><strong>" + (i + 1) + ". file</strong><br>";
          var file = x.files[i];
          if ("name" in file) {
            txt += "name: " + file.name + "<br>";
          }
          if ("size" in file) {
            txt += "size: " + file.size + " bytes <br>";
          }
        }
      }
    } else {
      if (x.value == "") {
        txt += "Select one or more files.";
      } else {
        txt += "The files property is not supported by your browser!";
        txt += "<br>The path of the selected file: " + x.value; // If the browser does not support the files property, it will return the path of the selected file instead.
      }
    }
    document.getElementById("demo").innerHTML = txt;
  }
}




// POPULATING THE VIEWCONTACT PAGE

function displayContacts(){
  let subscibers = JSON.parse(localStorage.getItem("subscibers"));
  contactCount = '';
  for(i = 0; i <subscibers.length; i++){
    var xTable=document.getElementById('contactTable');
  
    var tr=document.createElement('tr');
    tr.innerHTML =`
    <td>
    <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck3">
    <label class="custom-control-label" for="customCheck3">${i+1}</label>
    </div>
    </td>
    <td>${subscibers[i].email}</td>
    <td>${subscibers[i].firstName}</td>
    <td>${subscibers[i].lastName}</td>

    <td>${subscibers[i].address1} <br>: ${subscibers[i].address2}</td>
    <td>${subscibers[i].phone}</td>
    <td>${subscibers[i].month} / ${subscibers[i].day}</td> 
    <td>subscribed</td>
    <td>${subscibers[i].country}</td>
    <td></td>
   
 
    <td> </td>`
    
    xTable.appendChild(tr);
    
    }

 document.getElementById("subscibers").innerHTML = contactCount
 
}
displayContacts()