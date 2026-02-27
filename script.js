var popupoverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addpopupButton = document.getElementById("add-popup-button");
var cancelpopup = document.getElementById("cancel-popup");
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");

var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

/* Show Popup */
addpopupButton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupBox.style.display = "block";
});

/* Hide Popup */
cancelpopup.addEventListener("click", function (event) {
  event.preventDefault();
  closePopup();
});

popupoverlay.addEventListener("click", closePopup);

function closePopup() {
  popupoverlay.style.display = "none";
  popupBox.style.display = "none";
}

/* Add Book */
addBook.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    booktitleinput.value.trim() === "" ||
    bookauthorinput.value.trim() === "" ||
    bookdescriptioninput.value.trim() === ""
  ) {
    alert("Please fill all fields!");
    return;
  }

  var div = document.createElement("div");
  div.className = "book-container";

  div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <button class="delete-btn">Delete</button>
    `;

  container.append(div);

  /* Clear inputs */
  booktitleinput.value = "";
  bookauthorinput.value = "";
  bookdescriptioninput.value = "";

  closePopup();
});

/* Delete using Event Delegation */
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
