const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const btnInsert = document.getElementById("btnInsert");
const isOutput = document.getElementById("isOutput");
const btnAllDelete = document.getElementById("btnAllDelete");
const autoFILL = document.getElementById("autoFILL");
const inputDelKey = document.getElementById("inputDelKey");
const btnDelete = document.getElementById("btnDelete");
const inputReadDataKey = document.getElementById("inputReadDataKey");
const btnReadData = document.getElementById("btnReadData");
const readedDataHere = document.getElementById("readedDataHere");
const removeData = document.getElementById("removeData");

// new Todo input and value
btnInsert.onclick = function() {
  const key = inputKey.value;
  const timeIn = inputValue.value;

  if (key && timeIn) {
    localStorage.setItem(key, timeIn);
    location.reload();
  } else {
    alert("Must Enter Value.");
  }
};

// Local Storage Todo and their values (output)
for (i = 0; i < localStorage.length; i++) {
  const getKey = localStorage.key(i);
  const getValue = localStorage.getItem(getKey);
  const Delete = localStorage.removeItem(i, getValue);

  if (getKey != null) {
    localStorage.removeItem(i)
  }

  isOutput.innerHTML += `
    <hr />
    Todo is: ${getKey} <br /><br />
    Time-in is: ${getValue} <br /><br />
    <button onclick = ${Delete}>Delete data</button>
    `;
}
// If there is data stored in local storage
if (localStorage.length != 0) {
  document.getElementById("availRecords").innerHTML += `
    Records available in LocalStorage
    `;
}

// If there is no data stored in local storage
if (localStorage.length == 0) {
  btnAllDelete.style.display = "none";
  autoFILL.innerHTML += `
        Add some Todo - Time-in records using INSERT DATA box
    `;
}

// read value of the todo
btnReadData.onclick = function () {
  const inputReadDataKeyNew = inputReadDataKey.value;
  const readeddData = localStorage.getItem(inputReadDataKeyNew);

  if (inputReadDataKeyNew) {
    readedDataHere.innerHTML += `
        Time-in of requested Todo is: ${readeddData}
        <br/>
        `;
  }
};

// delete data/todo
btnDelete.onclick = function () {
  const inputDelKeyD = inputDelKey.value;

  if (inputDelKey) {
    localStorage.removeItem(inputDelKeyD);
    location.reload();
  }
};

// Delete all data/todos
btnAllDelete.onclick = function () {
  localStorage.clear();
  location.reload();
};
