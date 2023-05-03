// Start script when DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
    //Define event listeners for the buttons
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "level-menu") {
                document.getElementsByClassName("hidden-menu")[0].style.display = "block";
            }
        });
    }
});