const toggleBtn = document.getElementById("toggle-theme");
console.log(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
