// SUBMIT A SUBSCRIBER
//Creating Local Storage
let subscibers = JSON.parse(localStorage.getItem("subscibers"));

if (subscibers == null) {
  subscibers = [];
}

// update contacts and subscribers count
// document.getElementById(".subscibe").innerHTML = subscibers.length;
// document.getElementById("subscribers").innerHTML = subscibers.length;

// New user object
function subscribeUser() {
  newSubscibers = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    country: document.getElementById("country").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    bday: document.getElementById("bday").value,
    role: "user",
  };
  //Storing inside the array
  // validate(newSubscibers);

  subscibers.push(newSubscibers);

  // updating local storage
  localStorage.setItem("subscibers", JSON.stringify(subscibers));

  swal("Done!", "Subscriber Added Successfully!", "success");

  // display contacts
  displayContacts();
}

// delete function
function empty() {
   document.getElementById("firstname").value = "",
   document.getElementById("lastname").value = "",
   document.getElementById("email").value = "",
   document.getElementById("phone").value = "",
   document.getElementById("country").value = "",
   document.getElementById("state").value = "",
  document.getElementById("city").value = "",
  document.getElementById("bday").value = "",
  src = "";
}


// sweet alert delete functon
function Delete(i){
 
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        subscibers.splice(i, 1);
        users = subscibers;
        localStorage.setItem("subscibers", JSON.stringify(subscibers))
        displayContacts();
        empty();
       
        swal("Your file has been  deleted!", {
         icon: "success"
        });
      
      }
    });
  }
        
// POPULATING THE VIEWCONTACT PAGE
displayContacts();

function displayContacts() {
  contactCount = "";
  for (i = 0; i < subscibers.length; i++) {
    var xTable = document.getElementById("contactTable");

    contactCount += `
     <tr>
  <td>${i + 1}</td>
  <td>${subscibers[i].email}</td>
  <td>${subscibers[i].firstName}</td>
  <td>${subscibers[i].lastName}</td>
  <td>${subscibers[i].phone}</td>
  <td>${subscibers[i].country}</td>
  <td>${subscibers[i].state}</td>
  <td>${subscibers[i].city}</td>
  <td>${subscibers[i].bday}</td>
  <td class="text-right">
    <button class="btn btn-primary badge-pill" data-toggle="modal" data-target="#edit" style="width: 80px; background: #6920bd;">Edit</button>
  </td>


  <td class="text-right">
    <button class="btn btn-danger badge-pill" data-toggle="modal" data-target="#"  style="width: 80px;" id="delete" onclick="Delete()">Delete</button>
  </td>
</tr>`;
  }

  xTable.innerHTML = contactCount;
}

displayContacts();
  

// =====UploadContact====//

$(document).ready(function(){

  $('#viewFile').click(function(){
    var rdr = new FileReader();
    rdr.onload = function (e) {
// Convert the role into an array
    var theRows = e.target.result.split("\n");
    // ===Loop through the rows=====//
    for(var row = 0; row < theRows.length; row++){
    // ======Get The columns into an array====//
     var columns = theRows[row].split(".");
    //  =====Get number of column===//
    var columnCount = columns.length
    // ====Validate Number of Columns
    if(columnCount!=8) {
    
     
      newRow="<tr><td>Incorrect number of columns</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>"
    }else{

    }
    newRow = "<tr><td>" + columns[0] + "</td><td>" + columns[1] + "</td><td>" + columns[2] + "</td><td>" + columns[3] 
    + "</td><td>" +  columns[4] + "</td><td>" +  columns[5] + "</td><td>" +  columns[6] + "</td><td>" +  columns[7] + "</td><td>" +  columns[8] + "</td>";
      $("#tablemain").append(newRow);

    }
    
    
    
    }
    rdr.readAsText($('#inputFile')[0].files[0]);
  });


});

