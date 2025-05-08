# Storytelling App

An interactive web app for presenting choose‐your‐own‐adventure style stories. Guide your users through narrative slides, let them make decisions, and save their progress as they explore every branch.

## Features

- **Story Slides**: Displays story content (text & optional images) slide by slide  
- **Branching Choices**: Offer 2+ decision buttons per slide to branch the narrative  
- **Navigation Controls**: “Next,” “Back,” and choice buttons to move through the story  
- **Progress Saving**: Saves current slide/branch in `localStorage`, so users can return where they left off  
- **Dynamic Content**: Load story data from a JSON file for easy updates & new chapters  
- **Responsive Design**: Works on desktop, tablet, and mobile screens  

## Demo

Open `index.html` in your browser or view the live demo:  
<https://file:///C:/Users/sadyk/OneDrive/Рабочий%20стол/Java-script/19-storytelling-app/index.html>

![Screenshot of the Storytelling App](./screenshot.png)

## Installation

_No build tools or external dependencies required!_

1. Clone this repository:  
   ```bash
   git clone https://github.com/sadykovIsmail/Java-script/tree/main/19-storytelling-app
Open index.html in any modern web browser.

Usage
On page load, the first slide of the story appears.

Read the story text and view any accompanying images.

Click a choice button to follow a narrative branch, or use Next/Back if available.

Your current position is auto‐saved; refresh or revisit later to continue.

To restart, click Restart Story or clear browser storage.

Tech Stack
HTML5 for structure

CSS3 for styling and responsive layout

Vanilla JavaScript (ES6+) for loading story data, handling navigation & saving progress

File Structure
storytelling-app/
├── index.html             # Main HTML page
├── css/
│   └── style.css         # App styles
├── js/
│   ├── script.js             # Core navigation & storage 
│
└── README.md              # Project documentation

Contributing
1) Fork the repo

2) Create a new branch:
git checkout -b feature/<your-branch-name>

3) Commit your changes:
git commit -m "Add awesome feature"

4) Push to the branch:
git push -u origin feature/<your-branch-name>

5) Open a Pull Request