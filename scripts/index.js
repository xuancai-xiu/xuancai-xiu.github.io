document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const content = document.querySelector(".content");
    const toggleBtn = document.getElementById("toggle-btn");
    const avatar = document.getElementById("avatar");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        content.classList.toggle("collapsed");
        avatar.classList.toggle("collapsed");
    });
});
