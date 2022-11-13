let form = document.getElementById("form");

function clear() {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#address").value = "";
  document.querySelector("#pincode").value = "";
  document.getElementsByName("gender");
  document.querySelector("#food1").checked = false;
  document.querySelector("#food2").checked = false;
  document.querySelector("#food3").checked = false;
  document.querySelector("#food4").checked = false;
  document.querySelector("#food5").checked = false;
  document.querySelector("#male").checked = false;
  document.querySelector("#female").checked = false;
  document.querySelector("#others").checked = false;
  document.querySelector("#state").value = "";
  document.querySelector("#country").value = "";
}

function getUserDetails() {
  let fname = document.querySelector("#first-name").value;
  let lname = document.querySelector("#last-name").value;
  let address = document.querySelector("#address").value;
  let pincode = document.querySelector("#pincode").value;
  let gender = document.getElementsByName("gender");
  let food1 = document.querySelector("#food1");
  let food2 = document.querySelector("#food2");
  let food3 = document.querySelector("#food3");
  let food4 = document.querySelector("#food4");
  let food5 = document.querySelector("#food5");
  let state = document.querySelector("#state").value;
  let country = document.querySelector("#country").value;

  // Food selection
  let foods = [];
  if (food1.checked === true) {
    let f1 = document.querySelector("#food1").value;
    foods.push(f1);
  }
  if (food2.checked === true) {
    let f2 = document.querySelector("#food2").value;
    foods.push(f2);
  }
  if (food3.checked === true) {
    let f3 = document.querySelector("#food3").value;
    foods.push(f3);
  }
  if (food4.checked === true) {
    let f4 = document.querySelector("#food4").value;
    foods.push(f4);
  }
  if (food5.checked === true) {
    let f5 = document.querySelector("#food5").value;
    foods.push(f5);
  }
  if (foods.length < 2) {
    alert("Choice of food must be atleast 2");
    clear();
    return;
  }

  // Gender selected
  let genderSelected = "";
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      genderSelected += gender[i].value;
    }
  }
  // Collect the user data
  let data = {
    firstName: fname,
    lastName: lname,
    address,
    pincode,
    gender: genderSelected,
    food: foods,
    state,
    country,
  };

  displayUserData(data);
  clear();
}

// Displaying the data in the table
function displayUserData(user) {
  let tableBody = document.querySelector("#table-body");

  let row = tableBody.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  let cell5 = row.insertCell();
  let cell6 = row.insertCell();
  let cell7 = row.insertCell();
  let cell8 = row.insertCell();

  cell1.innerHTML = user.firstName;
  cell2.innerHTML = user.lastName;
  cell3.innerHTML = user.address;
  cell4.innerHTML = user.pincode;
  cell5.innerHTML = user.gender;
  cell6.innerHTML = user.food.join(", ");
  cell7.innerHTML = user.state;
  cell8.innerHTML = user.country;
}
