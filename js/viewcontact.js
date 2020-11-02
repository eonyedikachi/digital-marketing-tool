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

$("#delete").click(function () {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Your file has been successfully deleted!", {
        icon: "success",
      });
    } else {
      swal("Your file is safe!");
    }
  });
});

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
    <button class="btn btn-danger badge-pill" data-toggle="modal" data-target="#"  style="width: 80px;" id="delete">Delete</button>
  </td>
</tr>`;
  }

  xTable.innerHTML = contactCount;
}

displayContacts();
