# The Hangman Game

(Developer: Yannick Ferenczi)

This is a web application of the famous 'Hangman Game'. It allows the user to play online. The goal is to guess the secret word or expression before the figure is hung.

![responsive mockup](documentation/responsive_mockup.png)

[Visit the live project here](https://yannickferenczi.github.io/the-hangman-game/)

---
## Table of Contents

- [The Hangman Game](#the-hangman-game)
  - [Table of Contents](#table-of-contents)
  - [User experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User stories](#user-stories)
  - [Design](#design)
    - [Color](#color)
    - [Structure](#structure)
    - [Features](#features)
    - [Wireframe](#wireframe)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks and other Programs](#frameworks-and-other-programs)
  - [Testing](#testing)
    - [Performance and Accessibility](#performance-and-accessibility)
    - [Validator Testing for syntaxe errors](#validator-testing-for-syntaxe-errors)
    - [Testing the features along with the user stories from the user experience section above. \[^1\]](#testing-the-features-along-with-the-user-stories-from-the-user-experience-section-above-1)
    - [Testing responsiveness and cross platform compatibility](#testing-responsiveness-and-cross-platform-compatibility)
  - [Bugs](#bugs)
  - [Deployment](#deployment)
    - [How this project was deployed](#how-this-project-was-deployed)
    - [How to clone the repository](#how-to-clone-the-repository)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)
  - [Acknowledgements](#acknowledgements)

---
## User experience

### Target Audience

The target audience for the Hangman Game can include:

- People who want to play online
- People who want to improve their vocabulary
- People who want to learn new idioms

### User stories

1. First Time Visitor Goals
   - As a First Time Visitor, I want to easily understand the main purpose of the website. (US01)
   - As a First Time Visitor, I want to be able to understand how to play. (US02)
   - As a First Time Visitor, I want to have everything I need to play the game. (US03)
2. Returning Visitor Goals
   - As a Returning Visitor, I want a number of riddles to be really high as I do not want to already know what are the secret words. (US04)
   - As a Returning Visitor, I want to know my score and my remaining lifes. (US05)
3. Frequent User Goals
   - As a Frequent User, I want to have everything on the same page to optimize the time I spend on the application. (US06)
   - As a Frequent User, I want to be able to play on any of my devices and always have all the information relative to the game visible without scrolling. (US07)
   - As a Frequent User, I want to be able to easily find back the tab of the application when visiting other websites. (US08)

---
## Design

The design has been kept as simple as possible for the user to easily find the needed information while playing. The full game area (riddle, score and lifes, hangman and typing area) should all be visible without scrolling for a best user experience. The application uses a mobile-first approach development as it is expected to be mostly played on a mobile phone.

### Color

The hangman game reminds me on the first black and white western movies taking place in the old USA. Therefore, I wanted to keep the application black and white and a little touch of yellow-brown to refer to the sandy desert of Texas.

### Structure

Everything happens on the same page and the interactions are entirely handled with JavaScript. Therefore, if the page is reloaded, the score and the lifes will be reset to default.

### Features

1. Features related to the game implementation

    | Code | Description |
    | ------- | -------- |
    | F01 | The game has a level selection to give users more playing options |
    | F02 | The game has a score calculation to keep track of the total score when playing more riddles |
    | F03 | The game has a remaining lifes calculation to challenge players |
    | F04 | The game has a rules section explaining how to play, how to make points and some bonus calculations. This section is hidden by default to optimize the clarity of the game |
    | F05 | The game has a typing area allowing users to submit their guessed letters without keyboards |
    | F06 | The game has a draw area to illustrate at which stage users are from hanging |
    | F07 | The game provides a readable information of how many steps are left before hanging for users who are not familiar with the application to know how many tries left they have before hanging |

2. Features related to the website utilisation

    | Code | Description |
    | ------- | -------- |
    | F08 | The site has a favicon to help users finding the tab back when navigating to other pages |
    | F09 | The site has a responsive design, allowing users to play on any device |

3. Screenshots of features

    - F01:

        ![Screenchot of the level menu](documentation/level_menu.png)
    - F02, F03, F05, F06 & F07:

        ![Screenchot of the game area](documentation/game_area.png)
    - F04:

        ![Screenchot of the game rules](documentation/game_rules.png)
    - F08:

        ![Screenchot of the favicon](documentation/favicon.png)
    - F09:

        ![Responsive mockup](documentation/responsive_mockup.png)

4. Screenshots of the messages to the user

    - A confirm window pops up when users want to change level while a riddle has been started:
        ![Screenchot of the confirm window](documentation/confirm_changing-level.png)
    - A congratulations message pops up when users solve a riddle:
        ![Screenchot of the congratulaions message](documentation/congratulations_message.png)
    - A 'You lost' message pops up when users did not find the secret word before the figure was hung:
        ![Screenchot of the 'you lost' message](documentation/you-lost_message.png)
    - A 'Game Over' message pops up when users have used all their lifes:
        ![Screenchot of the 'game over' message](documentation/game-over_message.png)

5. Features which could be implemented with more time

    - Add sound effects when the users ate playing to give a more entertaining feedback to their actions.
    - Implement event listeners related to the keyboard, giving users more options to play.
    - Implement the game for more languages. The traduction of the website would not be a big effort but the lists of secret words would need to be stored in separate files instead of being in the script.
    - Add a Hint option, allowing users to display a letter of the riddle for free (against some compromises on the score).
    - Track the best score when users play more game in a row to help them know if they beat their own scores.

### Wireframe

The wireframes have been created without holding back ideas. Therefore, some features, which could be nice to have on the project, have actually not been implemented on the final version because of a lack of capacity. For example the project has only been developed in english. The french and german part could be implemented later.

![wireframe of the project](documentation/hangman_game_wireframe.png)

---
## Technologies Used

### Languages

- HTML5
- CSS3
- JavaScript

### Frameworks and other Programs

- Balsamiq has been used for the wireframes.
- Font Awesome has been used to display the copyright icon.
- Paint has been used to create the favicon and the draws of the hangman.
- Tinypng has been used to reduce the size of the images.
- Git has been used to version control the project.
- GitHub has been used to cloudify and deploy the project.
- CodeAnywhere has been used as an IDE to develop the project.

---
## Testing

### Performance and Accessibility

A lighthouse test has been performed and the results can be seen below:

- for mobile
    ![lighthouse results for mobile](documentation/lighthouse_report_mobile.png)
- for desktop
    ![lighthouse results for desktop](documentation/lighthouse_report_desktop.png)

### Validator Testing for syntaxe errors

- W3C markup validator results
    ![w3c markup validator results](documentation/w3c_markup_validator.png)
- W3C CSS validator results
    ![w3c css validator results](documentation/w3c_css_validator.png)
- jshint results
    ![jshint results](documentation/jshint_results.png)

### Testing the features along with the user stories from the user experience section above. [^1]

[^1]: A cross at the intersection of 'F' codes and 'US' codes means that the feature answers the user story.

| Features Code \\ User Stories Code | US01 | US02 | US03 | US04 | US05 | US06 | US07 | US08 |
| ---------------------------------- | :----: | :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| F01 |   | X |   | X |   |   |   |   |
| F02 |   |   |   |   | X |   |   |   |
| F03 |   |   |   |   | X |   |   |   |
| F04 |   | X |   |   |   | X |   |   |
| F05 |   |   | X |   |   |   |   |   |
| F06 | X |   |   |   |   |   |   |   |
| F07 |   | X |   |   |   |   |   |   |
| F08 |   |   |   |   |   |   |   | X |
| F09 |   |   |   |   |   |   | X |   |

### Testing responsiveness and cross platform compatibility

The application has been tested on different devices such as iPhone 6, iPhone 11, Samsung Galaxy S21, Tablet Huawei, laptop Lenovo Ideapad, Mac Book.

It worked and displayed as expected on all of those devices.

The application has also been tested and worked as expected using the following web browsers : Safari, Google Chrome, Microsoft Edge and Mozilla Firefox.

---
## Bugs

**UNSOLVED**<br>
The lists of secret words should be storaged in separated json files to keep the data out of the script. But for some reasons, even though the data could be read with the script, they could not be used while playing. I did not really understand the issue nor how to fix it. I have then decided to carry on having the data as a dictionnary in the script.js file.

**UNSOLVED**<br>
The levels could be reconsidered as it seems to be much more complicated to guess a short word than a long one (as there is more chance to be a match when the word has more letters). A new points calculation would then need to be implemented.

**UNSOLVED**<br>
To have some sound effects playing during the game would be a great entertainment for the user. Unfortunately, in this area of expertise too, I did not really understand why the sounds could not be played nor how to fix that issue.

**UNSOLVED**<br>
When changing level while a riddle has already been started, a confirm window pops up to alert that a life is going to be lost. Users can then confirm or cancel. However, when cancelling, the same confirm window pops up again and users must cancel a second time to get rid of it.

---
## Deployment

### How this project was deployed

1. In the GitHub repository, navigate to the Settings tab, then choose Pages from the left hand menu.
2. From the source section drop-down menu, select the Master Branch and click on the 'save' button.
3. Refresh the page after a few minute to display the link to the live webpage.
4. Any changes pushed to the master branch will take effect on the live project.

[Visit the live project here](https://yannickferenczi.github.io/the-hangman-game/)

### How to clone the repository

1. Go to the <https://github.com/yannickferenczi/the-hangman-game> repository.
2. Click the 'Code' button to the right of the screen, then click HTTPs and copy the link.
3. Open a GitBash terminal and navigate to the directory where you want to locate the clone.
4. On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process.

---
## Credits

### Content

- The secret words have been imported from [7esl](https://7esl.com/) and formated by the developer to harmonise its usage in the script.
- The full content has been created by the developer.

### Media

- The background image has been downloaded for free from [Pixabay](https://pixabay.com/) (Big thanks to the creator: mhdhg)
- All the hangman draws as well as the favicon have been created by the developer using paint.

---
## Acknowledgements

- A huge thanks to my wife for letting me spend hours on this project, even though in that period we got married and welcomed our little daughter in our wonderful world.
- Thank you to Code Institute for their program to become a full stack software developer allowing me to code this project after less than 3 weeks of learning.
