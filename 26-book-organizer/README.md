# Book Organizer

A web app to help you catalog, search, and manage your personal library. Quickly add books, view your collection, and keep track of read/unread status.

## Features

- **Add Book**: Enter title, author, genre, and year to add a new book  
- **List View**: Displays all books in a table or card layout  
- **Search & Filter**: Search by title or author; filter by genre or read/unread status  
- **Edit & Remove**: Update book details or delete entries at any time  
- **Read Status Toggle**: Mark books as “Read” or “Unread” with one click  
- **Persistent Storage**: Saves your collection in `localStorage` so it persists across sessions  
- **Responsive Design**: Works on desktop and mobile browsers  

## Demo

Open `index.html` in your browser or view the live demo:  
<https://sadykovismail.github.io/Java-script/26-book-organizer/>

![Screenshot of the Book Organizer app](./screenshot.png)

## Installation

_No build tools or external dependencies required!_

1. Clone this repository:  
   ```bash
   git clone https://github.com/sadykovIsmail/Java-script/tree/main/26-book-organizer
Open index.html in any modern web browser.

Usage
Fill out the Add Book form with the book’s Title, Author, Genre, and Year.

Click Add to save the book to your collection.

Use the Search bar to find books by Title or Author.

Use the Genre dropdown and Read/Unread checkbox to filter your view.

Click the ✏️ icon next to a book to edit its details.

Click the 🗑️ icon to remove a book.

Toggle the Read checkbox on each entry to mark it as read or unread.

Tech Stack
HTML5 for structure

CSS3 for styling and responsive layout

Vanilla JavaScript (ES6+) for application logic and localStorage integration

File Structure

book-organizer/
├── index.html           # Main HTML page
├── css/
│   └── style.css       # App styles
├── js/
│   └── script.js       # Core logic: add/edit/remov search/
|
└── README.md            # Project documentation

Contributing
1) Fork the repo

2) Create a new branch:
git checkout -b feature/<your-branch-name>

3) Commit your changes:
git commit -m "Add awesome feature"

4) Push to the branch:
git push -u origin feature/<your-branch-name>

5) Open a Pull Request