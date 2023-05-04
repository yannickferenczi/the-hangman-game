// Start script when DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
    let level = "level1";
    let theRiddle = new Riddle(level);
    // Define event listeners for the buttons
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "level-menu") {
                // Display the level options
                document.getElementsByClassName("level-menu")[0].style.display = "none";
                document.getElementsByClassName("dark-background")[0].style.display = "block";
            } else if (this.getAttribute("data-type") === "close-menu") {
                // Hide the level options
                document.getElementsByClassName("level-menu")[0].style.display = "block";
                document.getElementsByClassName("dark-background")[0].style.display = "none";
            } else if (this.getAttribute("data-type") === "level") {
                // Select the level of the game
                level = this.innerHTML;
                theRiddle = new Riddle(level);
                let listOfLevelButtons = document.getElementsByClassName("level-option");
                for (let button of listOfLevelButtons) {
                    button.dataset.status = "inactive";
                }
                this.dataset.status = "active";
            }
        });
    }
});

/**
 * The object Riddle picks a random string from different lists depending 
 * on the level selected, creates a riddle out of it, calculates the amount 
 * of points that can be won
 */
class Riddle {
    constructor(level) {
        this.level = level;
        this.stuffToGuess = this.getStuffToGuess();
    }

    /**
     * This method is called once when an instance is created
     * and defines randomly what to guess
     * @returns the word or expression to guess as a string
     */
    getStuffToGuess() {
        // Fetch the listOfWords from the level pick by the user
        // let listOfWords = fetch(`data-${this.level}.json`);

        let listOfWords = [
            "Aboil",
            "North",
            "Novel",
            "Nurse",
            "Nudge",
            "Nerve",
            "Nifty",
            "Notch",
            "Newts",
            "Nooks",
            "Nasal",
            "Quirk",
            "Quoin",
            "Quoit",
            "Quote",
            "Quash",
            "Quest",
            "Quern",
            "Covers",
            "Create",
            "Credit",
            "Crisis",
            "Custom",
            "Damage",
            "Danger",
            "Mature",
            "Medium",
            "Member",
            "Memory",
            "Mental",
            "Merely",
            "Merger",
            "Method",
            "Middle",
            "Miller",
            "Mining",
            "Report",
            "Rescue",
            "Resort",
            "Result",
            "Retail",
            "Retain",
            "Worker",
            "Wright",
            "Writer",
            "Yachts",
            "Yacker",
            "Yammer",
            "Yanked",
            "Yapper",
            "Yclept",
            "Yearly",
            "Yeasts",
            "Yecchs",
            "Yelled",
            "Yodled",
            "Yogurt",
            "Yonder",
            "Yttria",
            "Yuppie"
        ];

        // Create a random Int between 0 and the length of listOfWords
        let randomNumber = Math.floor(Math.random() * (listOfWords.length - 1));

        return listOfWords[randomNumber];
    }

    /**
     * Replace every letter of stuffToGuess and leave other characters
     * (such as space, comma, etc) visible
     */
    transformStuffToGuessIntoRiddle() {
        this.riddle = "";
        for (let character of this.stuffToGuess) {
            if ("abcdefghijklmnopqrstuvwxyz".includes(character.toLowerCase())) {
                this.riddle += "_";
            } else {
                this.riddle += character;
            }
        }
        return this.riddle;
    }

    /**
     * Calculates the amount of points the riddle can bring
     * if it is solved
     * @returns a number
     */
    calculateRiddlePoints() {
        this.points = 0;
        for (let character of this.riddle) {
            if (character === "_") {
                this.points += 1;
            }
        }
        return this.points;
    }
}
