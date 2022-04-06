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
  httpPost("/api/transaction/send", data)
    .then((response) => response.json())
    .then((res) => {
      const el = document.getElementById("user-balance");
      el.innerHTML = `Your balance is: ${res}`;
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
