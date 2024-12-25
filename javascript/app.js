var input = document.getElementById("inpt-1");
var addButton = document.getElementById("add-btn");
var ul = document.getElementById("ul");

function AddHandler() {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.setAttribute("class", "list");
  li.innerHTML = input.value;

  var buttonsContainer = document.createElement("div");
  li.appendChild(buttonsContainer);
  buttonsContainer.setAttribute("class", "btns-container");

  var editButton = document.createElement("button");
  buttonsContainer.appendChild(editButton);
  editButton.setAttribute("class", "editbtn");
  var editIcon = document.createElement("img");
  editIcon.setAttribute("src", "./icons/edit.png");
  editIcon.setAttribute("class", "edit-img")
  editButton.appendChild(editIcon);

  var deletButton = document.createElement("button");
  buttonsContainer.appendChild(deletButton);
  deletButton.setAttribute("class", "editbtn");
  var deleticon = document.createElement("img");
  deletButton.appendChild(deleticon);
  deleticon.setAttribute("src", "./icons/delete.png");
  deleticon.setAttribute("class", "edit-img");

  input.value = "";
}
