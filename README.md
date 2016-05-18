# Spotlight-Intro

**Project Setup**

## Installation

*You need to have [NodeJS](http://nodejs.org/)*

*Type below commands in terminal*

```````
npm install
```````

**To Run**

*Type below command in terminal*

```````
gulp
```````

**Application Directory Structure**

``````````
├── app
│   ├── images
│   ├── fonts
│   ├── js
│   │   └── application.js
│   ├── css
│   │   └── master.css
│   ├── scss
│   │   └── modules.scss
│   │   └── base.scss
│   │   └── layout.css
│   │   └── mixins.css
│   │   └── master.css
│   │   └── reset.css
│   │   └── variables.css
│   └── index.html
├── node_modules
├── gulpfile.js
├── package.json
├── .gitattributes
└── .gitignore
``````````

# Description

The spotlight intro experience walks user through an interactive quiz, where they can customize their prefrences and recieve their aura. Users are guided through three questions, focused around their favorite genres, artists, and muscial aspects. Throughout this process, and "aura" is being formed: changing colors, glowing, and changing shape 

**Aura**

An aura is essentailly a circle that is created through user interactions and prefrences. Each step of the quiz manipulates this circle. Aura data is then sent to the server, to be used later in the museum and the exit experience.

