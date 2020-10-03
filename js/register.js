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
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    role: "user",
  };

  //Storing inside the array
  database.push(newUser);
  validate(newUser);
  //Routing to dashboard
  // newUser.firstName != "" &&
  // newUser.lastName != "" &&
  // newUser.username != "" &&
  // newUser.email != "" &&
  // newUser.password != ""
  //   ? location.assign("../dashboard.html")
  //   : alert("Fill in all inputs");

  // updating local storage
  localStorage.setItem("database", JSON.stringify(database));
};

let registerButton = document.getElementById("register");
registerButton.addEventListener("click", registerUser);



function validate(user){
  if(user.firstName.length < 2){
    document.getElementById('error').innerHTML = 'firstName must be greater than 2 charactrs!';  
    return false;

  }else if(user.lastName.length < 2){
    document.getElementById('error').innerHTML = 'lastName must be be greater than 2 character';  
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
  }else{ 
    alert('Successfully logged in');
  }
}



