// Start script when DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
    //Define event listeners for the buttons
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "level-menu") {
                document.getElementsByClassName("level-menu")[0].style.display = "none";
                document.getElementsByClassName("hidden-menu")[0].style.display = "block";
            } else if (this.getAttribute("data-type") === "close-menu") {
                document.getElementsByClassName("level-menu")[0].style.display = "block";
                document.getElementsByClassName("hidden-menu")[0].style.display = "none";
            }
        });
    }
});