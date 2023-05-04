// Start script when DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
    let level = "level1";
    let theRiddle = new Riddle(level);
    displayRiddle(theRiddle.transformStuffToGuessIntoRiddle());
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
            } else if (this.getAttribute("data-type") === "letter") {
                // Try a letter to solve the riddle
                let userGuess = this.innerHTML;
                this.disabled = true;
                this.style.cursor = "default";
                this.style.backgroundColor = "#999";
                this.style.color = '#555';
                let checkedUserAnswer = checkRiddleWithUserGuess(userGuess, theRiddle.stuffToGuess);
                if (checkedUserAnswer.length > 0) {
                    // If the tried letter is in the riddle
                    insertAnswerIntoRiddle(theRiddle.stuffToGuess, checkedUserAnswer);
                    let riddleCompleted = !(document.getElementById("riddle").textContent.includes("_"));
                    if (riddleCompleted) {
                        increaseScore(theRiddle.calculateRiddlePoints());
                        document.getElementById("end-game-container").style.display = "block";
                        document.getElementById("end-game-heading").textContent = "Congratulations!";
                        document.getElementById("end-game-info").innerHTML =
                            `<p>You got it and increased your score by  ${theRiddle.calculateRiddlePoints()} points!</p>
                            <p>You now have a total of ${document.getElementById("total-score").innerHTML} points.</p>`;
                        document.getElementById("new-game").textContent = "Continue";
                    }
                }
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

/**
 * Display the riddle in the DOM
 * @param {string} stuffToGuess 
 */
function displayRiddle(riddle) {
    document.getElementById("riddle").textContent = riddle;
}

function checkRiddleWithUserGuess(userGuess, stuffToGuess) {
    let indexToReveal = [];
    let startIndex = 0;
    let searchScope = stuffToGuess.toUpperCase().slice(startIndex);
    while (searchScope.includes(userGuess)) {
        let newIndex = searchScope.indexOf(userGuess);
        indexToReveal.push(startIndex + newIndex);
        startIndex = newIndex + 1;
        searchScope = searchScope.slice(startIndex);
    }
    return indexToReveal;
}

function insertAnswerIntoRiddle(riddleSolution, indexToDisplay) {
    let riddle = document.getElementById("riddle");
    let listOfLetters = Array.from(riddle.innerHTML);
    for (let index of indexToDisplay) {
        listOfLetters[index] = riddleSolution[index];
    }
    riddle.textContent = listOfLetters.join("");
}


function increaseScore(riddlePoints) {
    currentScore = document.getElementById("total-score").textContent;
    document.getElementById("total-score").textContent = parseInt(currentScore) + riddlePoints;
}
