// Frontend is modified from the express generator template
// This will be changed to React in the next course (FS II)

listAccounts();

function listAccounts() {
  httpGet("/api/account/address")
    .then((response) => response.json())
    .then((response) => {
      const body = document.getElementById("users-body");
      body.innerHTML = "";

      response.forEach((acc) => {
        body.innerHTML += accComponent(acc);
      });
    });
}

function accComponent(acc) {
  return `<ul><li>${acc}</li></ul>`;
}

/******************************************************************************
 *                        Add, Edit, and Delete Users
 ******************************************************************************/

document.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    var el = event.target;
    if (el.matches("#send-btn")) {
      sendTransaction();
    }
  },
  false
);

function sendTransaction() {
  var to = document.getElementById("to-input");
  var amount = document.getElementById("amount-input");
  var data = {
    to: to.value,
    value: amount.value.toString(),
  };
  httpPost("/api/transaction/send", data).then((res) => {
    const el = document.getElementById("user-balance");
    el.innerHTML = `Your balance: ${res}`;
  });
}

function showEditView(userEle) {
  var normalView = userEle.getElementsByClassName("normal-view")[0];
  var editView = userEle.getElementsByClassName("edit-view")[0];
  normalView.style.display = "none";
  editView.style.display = "block";
}

function cancelEdit(userEle) {
  var normalView = userEle.getElementsByClassName("normal-view")[0];
  var editView = userEle.getElementsByClassName("edit-view")[0];
  normalView.style.display = "block";
  editView.style.display = "none";
}

function submitEdit(ele) {
  var userEle = ele.parentNode.parentNode;
  var nameInput = userEle.getElementsByClassName("name-edit-input")[0];
  var emailInput = userEle.getElementsByClassName("email-edit-input")[0];
  var id = ele.getAttribute("data-user-id");
  var data = {
    user: {
      name: nameInput.value,
      email: emailInput.value,
      id: Number(id),
    },
  };
  httpPut("/api/users/update", data).then(() => {
    displayUsers();
  });
}

function deleteUser(ele) {
  var id = ele.getAttribute("data-user-id");
  httpDelete("/api/users/delete/" + id).then(() => {
    displayUsers();
  });
}

function httpGet(path) {
  return fetch(path, getOptions("GET"));
}

function httpPost(path, data) {
  return fetch(path, getOptions("POST", data));
}

function httpPut(path, data) {
  return fetch(path, getOptions("PUT", data));
}

function httpDelete(path) {
  return fetch(path, getOptions("DELETE"));
}

function getOptions(verb, data) {
  var options = {
    dataType: "json",
    method: verb,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return options;
}
