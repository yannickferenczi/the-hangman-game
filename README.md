# The Hangman Game

(Developer: Yannick Ferenczi)

This is a web application of the famous 'Hangman Game'. It allows the user to play online. The goal is to guess the secret word or expression before the figure is hung.

[Visit the live project here]()



## Bugs

When clicking on the level-menu button, the first heading does not stay where it belong.
Bug fixed by setting the value of the css property grid-row-start of the first heading to 1.

The lists of words or expressions to guess are contained in some json file. Nevertheless, it seems that those files cannot be access to as long as they are on my machine and not on a server.
To fix this, I provided a shorter list for the development phase, until the project is deployed.
