menuToggleBtn = document.querySelector(".menu_toggle");
menusDiv = document.querySelector(".menus");
iconDiv = document.querySelector(".icon");
menuToggleBtn.addEventListener("click", () => {
  menusDiv.classList.toggle("active");
  iconDiv.classList.toggle("active");
});
