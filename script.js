// Smooth scroll on button click
document.querySelector(".btn").addEventListener("click", function (e) {
  e.preventDefault();
  const target = document.querySelector("#about");
  target.scrollIntoView({ behavior: "smooth" });
});
