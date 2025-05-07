const books = [
    { title: "The Alchemist", authorName: "Paulo Coelho", releaseYear: 1988 },
    { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
    { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
    { title: "Harry Potter", authorName: "J.K. Rowling", releaseYear: 1997 },
    { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  ];
  
  let filteredBooks = books.filter(book => book.releaseYear > 1950);
  let currentSortOrder = "oldest"; // default sort order
  
  const bookList = document.getElementById('bookList');
  const searchInput = document.getElementById('searchInput');
  const sortNewestBtn = document.getElementById('sortNewest');
  const sortOldestBtn = document.getElementById('sortOldest');
  
  function displayBooks(booksToDisplay) {
    bookList.innerHTML = '';
    booksToDisplay.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.authorName} (${book.releaseYear})`;
      bookList.appendChild(li);
    });
  }
  
  function sortBooks(order) {
    if (order === "newest") {
      filteredBooks.sort((a, b) => b.releaseYear - a.releaseYear);
    } else {
      filteredBooks.sort((a, b) => a.releaseYear - b.releaseYear);
    }
    displayBooks(filteredBooks);
  }
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const searchedBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm)
    );
    displayBooks(searchedBooks);
  });
  
  sortNewestBtn.addEventListener('click', () => {
    currentSortOrder = "newest";
    sortBooks(currentSortOrder);
  });
  
  sortOldestBtn.addEventListener('click', () => {
    currentSortOrder = "oldest";
    sortBooks(currentSortOrder);
  });
  
  // Initial display
  sortBooks(currentSortOrder);
  