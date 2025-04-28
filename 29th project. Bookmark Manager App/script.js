const getBookmarks = () => {
    const storedBookmarks = localStorage.getItem("bookmarks");
    if (!storedBookmarks) return [];
  
    try {
      const parsedBookmarks = JSON.parse(storedBookmarks);
      if (Array.isArray(parsedBookmarks)) {
        return parsedBookmarks.filter(b =>
          typeof b.name === 'string' &&
          typeof b.url === 'string' &&
          typeof b.category === 'string'
        );
      } else {
        return [];
      }
    } catch (e) {
      console.error("Error parsing bookmarks data:", e);
      return [];
    }
  };
  
  const displayOrCloseForm = () => {
    document.getElementById("main-section").classList.toggle("hidden");
    document.getElementById("form-section").classList.toggle("hidden");
  };
  
  const displayOrHideCategory = () => {
    document.getElementById("main-section").classList.toggle("hidden");
    document.getElementById("bookmark-list-section").classList.toggle("hidden");
  };
  
  document.getElementById("add-bookmark-button").addEventListener("click", () => {
    const categoryName = document.getElementById("category-dropdown").value;
    document.querySelector(".category-name").innerText = categoryName;
    displayOrCloseForm();
  });
  
  document.getElementById("close-form-button").addEventListener("click", displayOrCloseForm);
  
  document.getElementById("add-bookmark-button-form").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const url = document.getElementById("url").value;
    const category = document.getElementById("category-dropdown").value;
  
    const bookmarks = getBookmarks();
    bookmarks.push({ name, url, category });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  
    document.getElementById("name").value = "";
    document.getElementById("url").value = "";
  
    displayOrCloseForm();
  });
  
  document.getElementById("close-list-button").addEventListener("click", displayOrHideCategory);
  
  
  document.getElementById("view-category-button").addEventListener("click", () => {
    const selectedCategory = document.getElementById("category-dropdown").value;
    const bookmarks = getBookmarks();
    const filteredBookmarks = bookmarks.filter(b => b.category === selectedCategory);
  
    const categoryList = document.getElementById("category-list");
    categoryList.innerHTML = "";
  
    if (filteredBookmarks.length === 0) {
      categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    } else {
      filteredBookmarks.forEach(bookmark => {
        categoryList.innerHTML += `
          <input type="radio" id="${bookmark.name}" name="bookmark" value="${bookmark.name}">
          <label for="${bookmark.name}">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
          </label>
        `;
      });
    }
  
    displayOrHideCategory();
  });
  
  
  document.getElementById("delete-bookmark-button").addEventListener("click", () => {
    const selectedRadio = document.querySelector('input[name="bookmark"]:checked');
    if (!selectedRadio) return;
  
    const bookmarkName = selectedRadio.value;
    const category = document.getElementById("category-dropdown").value;
    const bookmarks = getBookmarks();
  
    const updatedBookmarks = bookmarks.filter(
      bookmark => !(bookmark.name === bookmarkName && bookmark.category === category)
    );
  
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    document.getElementById("view-category-button").click();
  });
  