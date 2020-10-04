//Creating Local Storage
let database = JSON.parse(localStorage.getItem("database"));

if (database == null) {
  database = [];
}
// Registering User

const registerUser = (e) => {
  //to prevent form from default submit
  e.preventDefault();
  newUser = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    userName: document.getElementById("userName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    cpassword: document.getElementById("cpassword").value,
    role: "user",
  };

  //Storing inside the array
  database.push(newUser);
  validate(newUser);
  // updating local storage
  localStorage.setItem("database", JSON.stringify(database));
};

let registerButton = document.getElementById("register");
registerButton.addEventListener("click", registerUser);



function validate(user){
  const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(user.firstName.length < 2){
    document.getElementById('error').innerHTML = 'firstName must be greater than 2 charactrs!';  
    return false;

  }else if(user.lastName.length < 2){
    document.getElementById('error').innerHTML = 'lastName must be be greater than 2 character';  
    return false;

  }else if(user.userName.length < 6){
    document.getElementById('error').innerHTML = 'Username must be greater than 6 character';  
    return false;

  }else if(!(regExEmail.test(user.email))){
    document.getElementById('error').innerHTML = 'Enter a valid email address!';  
    return false;

  }else if(user.password.length < 8){
    document.getElementById('error').innerHTML = 'Password must be greater than 8 characters!';  
    return false;
  }else if(!(/[a-z]/.test(user.password))){
    document.getElementById('error').innerHTML = 'Password must contain atleast one lower case!';  
    return false;
  }else if(!(/[A-Z]/.test(user.password))){
    document.getElementById('error').innerHTML = 'Password must contain atleast one upper case!';  
    return false;
  }else if(!(/[0-9]/.test(user.password))){
    document.getElementById('error').innerHTML = 'Password must contain a number!';  
    return false;
  }else if(!(/[ /\W|_/g]/.test(user.password))){
    document.getElementById('error').innerHTML = 'Password must contain atleast one special charater!';  
    return false;
  }else if(user.password != user.cpassword){
    document.getElementById('error').innerHTML = 'Passwords do not match!';
    return false;
  } else {
    location.assign("../dashboard.html");
  }
}



