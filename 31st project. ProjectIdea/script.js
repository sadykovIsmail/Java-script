const projectStatus = {
    PENDING: { description: "Pending Execution" },
    SUCCESS: { description: "Executed Successfully" },
    FAILURE: { description: "Execution Failed" }
  };
  
  class ProjectIdea {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.status = projectStatus.PENDING;
    }
  
    updateProjectStatus(newStatus) {
      this.status = newStatus;
    }
  }
  
  class ProjectIdeaBoard {
    constructor(title) {
      this.title = title;
      this.ideas = [];
    }
  
    pin(item) {
      this.ideas.unshift(item);
    }
  
    unpin() {
      this.ideas.shift();
    }
  
    count() {
      return this.ideas.length;
    }
  
    formatToString() {
      if (this.ideas.length === 0) {
        return `Empty Board has 0 idea(s)\n`;
      }
  
      let result = `${this.title} has ${this.ideas.length} idea(s)\n`;
  
      this.ideas.forEach(idea => {
        result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
      });
  
      return result;
    }
  }
  
  
  const board = new ProjectIdeaBoard("Tech Projects Board");
  
  const titleInput = document.getElementById('titleInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const addBtn = document.getElementById('addBtn');
  const clearBtn = document.getElementById('clearBtn');
  const boardOutput = document.getElementById('boardOutput');
  
  function updateBoardDisplay() {
    boardOutput.textContent = board.formatToString();
  }
  
  addBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
  
    if (!title || !description) {
      alert('Please enter both title and description.');
      return;
    }
  
    const newIdea = new ProjectIdea(title, description);
    board.pin(newIdea);
    updateBoardDisplay();
  
    titleInput.value = '';
    descriptionInput.value = '';
  });
  
  clearBtn.addEventListener('click', () => {
    while (board.count() > 0) {
      board.unpin();
    }
    updateBoardDisplay();
  });
  
  
  updateBoardDisplay();
  