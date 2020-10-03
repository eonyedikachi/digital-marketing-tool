let database = JSON.parse(localStorage.getItem("database"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (database == null) {
  database = [];
}

if (currentUser == null) {
  currentUser = [];
}


// const logInUser = (e) => {
//   //to prevent default submit
//   e.preventDefault();
//   let username = document.getElementById("use").value;
//   let password = document.getElementById("Login").value;

//   // Finds username and password in database
//   let user = database.find(
//     (element) => element.username == username && element.password == password
//   );

// //   // Adds current user login to storage
//   currentUser.push(user);

//   localStorage.setItem("currentUser", JSON.stringify(currentUser));

// //   // User validation
// //   user
// //     ? window.location.assign("../dashboard.html")
// //     : alert("Username or Password not correct");
// // };
// // cdfb00bc551dcd54efb908eb012dd1d3ce182301
 
// // Targeting the login  button
// document.getElementById("Login").addEventListener("click", logInUser);

// Validate users and password

function validate(){
  if(use.value == 0 || use.value.length < 2){
    document.getElementById('error').innerHTML = 'Username field cannot be empty!';  
    return false;

  }else if(pass.value == 0){
    document.getElementById('error').innerHTML = 'Password field cannot be empty!';  
    return false;


  }else{
    alert('Successfully logged in');
  }
}



// form validation
var use = document.querySelector('#use');
use.addEventListener('keyup', function(){
  var u_times = document.querySelector('.u_times');
  var u_check = document.querySelector('.u_check');
  if(use.value.length == 0 || use .value.length < 2){
    use.style.border = '1px solid red';
    u_times.style.display = 'block';
    u_check.style.display = 'none';
} else{
  use.style.border = '1px solid green';
  u_times.style.display = 'none';
  u_check.style.display = 'block';
}
})



var pass = document.querySelector('#pass');
pass.addEventListener('keyup', function(){
  var p_times = document.querySelector('.p_times');
  var p_check = document.querySelector('.p_check');
  if(pass.value.length == 0 || pass .value.length < 8){
    pass.style.border = '1px solid red';
    p_times.style.display = 'block';
    p_check.style.display = 'none';
} else{
  pass.style.border = '1px solid green';
  p_times.style.display = 'none';
  p_check.style.display = 'block'; 
}
})