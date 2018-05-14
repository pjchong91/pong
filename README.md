# Project 3: Pong 
* Author: P. Chong, WDP Student 2018 Q2.

## Description and Objective: 
- Create a pong game using object oriented programming in Javascript.  Three additional game-features are to be added by the author.  The game should be loaded using Webpack.

## Using:
- Javascript (ES6) and Webpack.

## Questions Encountered and Learning Acquired:
* Q - What are SVG's and why are we using them?
- SVG's stands for scalable vector graphics.  More specifically, SVG's are from XML and they are great for graphics that need scaled.  As SVG's change size they maintain high quality.

* Q - What is webpack?
- Webpack is a module bundler that can be used to neatly package all the files required to build a webpage into a bundle.  Files are converted to .JS type files with module loaders and then each page is connect to each other via dependencies as dictated through a dependency graph.

* Introduction to ES6: Classes
- ES6 allows for the creation of 'Classes'.  Classes are like templates (ie. template for a car has 4 wheels, 4 doors, mirrors, etc).  We then use templates to build many similar objects that have their own unique traits (ie. Smart Car vs Sports Car that both use car template but have their own features).  For pong, we used classes to create the Ball(s), board, game, paddles, and score keeping.  

* 'Instantiated Variables'
- From what I think I understand so far... our game renders at 60fps.  When we want to measure a game at a moment of time, we are looking at variables at a specific instant (thus, instantiated variable).  We use 'this' often in the coding of pong because we are constantly examining these instantiated variables each time the game is rendered.  For example, at THIS point in the game, where is THIS instant of the ball relative to THIS instant of the paddle? 

## Goals for Future Improvement:
- Increase familiarity and control with Object Oriented Programming

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

## Game Features as per Author:
**Good Balls & Bomb Balls**
* Green ball(buff ball): Let the green ball through to get a paddle buff!

* Red ball (bomb ball): If this ball hits your paddle it will make it smaller!

* White ball: Don't let these through or your opponent gets a point.


##Personal Learnings:
- Yarn vs NPM : Yarn is a Facebook-equivalent to NPM.  They download the same modules but utilize different caching mechanisms.  Yarn had an advantage over older versions of NPM due to its ability to download modules in parallel.  The newest version of NPM has adapted to similarly allow for multithread installation of modules.  Some instructors at RED prefer NPM because it is open-source and community driven.