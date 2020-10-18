
function toggleClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
      elem.className = elem.className.replace(className,'');
    }
    else{
      elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }
  
    return elem;
  }
  
  function toggleDisplay(elem){
    const curDisplayStyle = elem.style.display;			
  
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
      elem.style.display = 'block';
    }
    else{
      elem.style.display = 'none';
    }
  
  }


  function toggleMenuDisplay(e){
    const dropdownn = e.currentTarget.parentNode;
    const menu = dropdownn.querySelector('.menu');
    const icon = dropdownn.querySelector('.fa-angle-right');
    
  
    toggleClass(menu,'hide');
    toggleClass(icon,'rotate-90');
  }
  
  function handleOptionSelected(e){
    toggleClass(e.target.parentNode, 'hide');			
  
    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdownn .title');
    const icon = document.querySelector('.dropdownn .title .fa');
  
  
    titleElem.textContent = newValue;
    titleElem.appendChild(icon);
  
    //trigger custom event
    document.querySelector('.dropdownn .title').dispatchEvent(new Event('change'));
      //setTimeout is used so transition is properly shown
    setTimeout(() => toggleClass(icon,'rotate-90',0));
  }
  
  function handleTitleChange(e){
    const result = document.getElementById('result');
  
    result.innerHTML = 'The result is: ' + e.target.textContent;
  }
  
  //get elements
  const dropdownTitle = document.querySelector('.dropdownn .title');
  const dropdownOptions = document.querySelectorAll('.dropdownn .option');
  
  //bind listeners to these elements
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
  
  dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
  
  document.querySelector('.dropdownn .title').addEventListener('change',handleTitleChange);



  // Open ADDNEWSUBSIBBER
function AddSubscriber(){
  var bottomContainer = document.getElementById('bottom-container');
  bottomContainer.classList.add("hidden");
  document.querySelector('#addASubscriber').style.display = "block"; 
  document.querySelector('#importContact').style.display = "none"; 
  document.querySelector('#manageContact').style.display = "none"; 
  
}

// OPEN ImportContact
function importContact(){
  var bottomContainer = document.getElementById('bottom-container');
  bottomContainer.classList.add("hidden");
  document.querySelector('#importContact').style.display = "block";
  document.querySelector('#manageContact').style.display = "none";
  document.querySelector('#addASubscriber').style.display = "none";
}

// OPEN MANAGECONTACT
function manageContact(){
  var bottomContainer = document.getElementById('bottom-container');
  bottomContainer.classList.add("hidden");
  document.querySelector('#manageContact').style.display = "block";
  document.querySelector('#importContact').style.display = "none";
  document.querySelector('#addASubscriber').style.display = "nonr";
}



// SUBMIT A SUBSCRIBER
//Creating Local Storage
let subscibers = JSON.parse(localStorage.getItem("subscibers"));

if (subscibers == null) {
  subscibers = [];
}

const subscribeUser = (e) => {
  //to prevent form from default submit
  e.preventDefault();
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
};

let subscribeButton = document.getElementById("subscribe");
subscribeButton.addEventListener("click", subscribeUser);


function validate(user) {
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (!regExEmail.test(user.email)) {
  document.getElementById("error").innerHTML = "Enter a valid email address!";
  return false;

} else if(user.firstName.length < 2) {
    document.getElementById("error").innerHTML =
      "first Name must be greater than 2 characters!";
    return false;
  } else if (user.lastName.length < 2) {
    document.getElementById("error").innerHTML =
      "lastName must be be greater than 2 character";
    return false;
} else {
    checkDuplicateUser(user.email);
  }
}

// Function to check username and email already taken!
function checkDuplicateUser(email) {
  let isEmail = subscibers.find((element) => element.email == email);

 
  } if (isEmail) {
    document.getElementById("error").innerHTML = "Email has been taken!";
  } else {
    subscibers.push(newSubscibers);

    // updating local storage
    localStorage.setItem("subscibers", JSON.stringify(subscibers))
    // redirect user to dashboard
    location.assign("../aud-page.html");
  }


