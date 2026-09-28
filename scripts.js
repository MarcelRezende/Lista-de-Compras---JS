const input = document.querySelector(".form input");
const button = document.querySelector(".btn-1");
const market = document.querySelector("#market");
const description = document.querySelector("#description");
const closeButton = document.querySelector("#description button");
const deleteItems = document.querySelectorAll(".items button");


button.addEventListener("click", function (){
  const item = input.value.trim();

  if (item === "") {
    return alert("O campo não pode estar vazio.");
  }

  if (/\d/.test(item)) {
    return alert("O item não pode conter números.")
  }
  
  const newItem = document.createElement("div");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  const checkbox = document.createElement("input");
  const deleteIcon = document.createElement("img");

  checkbox.type = "checkbox";
  newItem.classList.add("items");
  span.textContent = item;

  market.append(newItem);

  newItem.append(checkbox);
  newItem.append(span);

  deleteIcon.src = "./assets/icons/delete.svg";
  deleteButton.append(deleteIcon);
  newItem.append(deleteButton);

  input.value = ""
  
  deleteButton.addEventListener("click", function(){
    newItem.remove();
    description.classList.add("show-result");
    setTimeout(function() {
      description.classList.remove("show-result");
    }, 5000);
  });
});

deleteItems.forEach(function(deleteButton) {
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
    description.classList.add("show-result");
    setTimeout(function() {
      description.classList.remove("show-result");
    }, 5000);
  });
});



closeButton.addEventListener("click", function (){
description.classList.remove("show-result");
});
