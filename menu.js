let avatar = document.querySelector(".avatar");
let dropdown = document.querySelector(".dropdown");

// Toggle the dropdown menu when the avatar is clicked
avatar.addEventListener("click", function () {
  dropdown.classList.toggle("show");
});