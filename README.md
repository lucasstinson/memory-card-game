# Memory Game React App

This Memory Game will be using cards to test your memory. The main goal of this project is to use hooks or lifecycle methods, therefore the application only uses functional components and hooks.

## Project: Memory Card

The project is from The Odin Project [curriculum](https://www.theodinproject.com/lessons/node-path-javascript-memory-card). Or see the Assignment Below.

A **live preview** of the project is [here](https://lucasstinson.github.io/memory-card-game/).

### Overview

#### **Features:**

- A user has the ability to play a memory game with cards.
- Each click on a unique card will add 1 point, with the goal being 15 points.
- A user's best score is tracked as the "High Score".
- Clicking the same card twice will reset your score to 0.
- Each click will randomize the order of the cards. **Good Luck!**

#### **Tools:**

<p align="left"> 
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="50" height="50"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css3" width="50" height="50"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="50" height="50"/> </a>
</p>

#### **Areas of Improvement:**

- The win condition is selecting 15 unique cards. Upon clicking the 15th unique card, the "Score" and "High Score" should update to 15, but instead both of those scores do not change until after the "OK" on the "play again" prompt is clicked. At that point, the "Score" displays 0 for the new game and the "High Score" displays 15.
- The game is on the simpler side and the replay value could be increased if there was a level system in which the game starts out easy with a few cards and the difficulty slowly increases upon each win.

### Assignment

<div class="lesson-content__panel" markdown="1">

1. Create a new project using `create-react-app`.
1. Take a little bit of time to think about how you want to implement your application, the features you want to implement, which components you need, and how to structure your application. Your application should include a scoreboard, which counts the current score, and a "Best Score", which shows the best score you achieved thus far. You also need a couple of cards that display images and possibly informational text. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.
1. Now that you've thought about the structure of your application, set up the folder structure and start creating the components. We suggest you use functional components and therefore hooks in this project.
1. Style your application so you can show it off!
1. As always, push the project to GitHub.
</div>
