let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".button__themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});