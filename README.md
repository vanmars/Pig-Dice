# _Pig Dice_

_27 August 2020_

#### _A web game to practice working with constructors and methods (for Epicodus)_

#### By _**Vanessa Stewart and Daniel Schaff**_

## Description

_This is a Pig Dice game with options for playing with one die or two dice. Players take turns rolling a die or dice. They can decide to continue rolling to acrue potential points or "hold" and add those potential points to their score. Certain roll combinations, however, may cause a turn to end and all potential points to be lost._

## Specifications
One Die
* Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":
* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

Two Dice
* Two standard dice are rolled. If neither shows a 1, their sum is added to the turn total.
* If a single 1 is rolled, the player scores nothing and the turn ends.
* If two 1s are rolled, the player’s entire score is lost, and the turn ends.
* If a double is rolled, the point total is added to the turn total as with any roll but the player is obligated to roll again (possible sub-variation of the two-dice game)

## Setup/Installation Requirements

To View Project:
* Open a web browser of your choice and navigate to the following page: https://vanmars.github.io/pig-dice/

To Extend This Project:
* Clone this project using the 'git clone' command in terminal.
* Open the cloned repo in a text editor of your choice.

## Known Bugs

Future iterations could . . .
* Improve upon the visual layout and design of the UI
* Clear the turn score, for the double dice game when a user loses a turn


## Technologies Used

* HTML5
* CSS/Bootstrap
* JavaScript/jQuery

### License

Copyright (c) 2020 **_Vanessa Stewart and Daniel Schaff_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
