
const poll = new Map();


addOption("Turkey");
addOption("Morocco");
addOption("Algeria");


function addOption(option) {
  if (!option) return;
  if (poll.has(option)) return;
  poll.set(option, new Set());
}


function vote(option) {
  const voterId = prompt("Enter your Voter ID:").trim();

  if (!poll.has(option)) {
    alert(`Option "${option}" does not exist.`);
    return;
  }

  const votersSet = poll.get(option);

  if (votersSet.has(voterId)) {
    alert(`Voter ${voterId} has already voted for "${option}".`);
  } else {
    votersSet.add(voterId);
    updateResultsOnPage();
    alert(`Thank you! Voter ${voterId} voted for "${option}".`);
  }
}


function showOptions() {
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  poll.forEach((_, option) => {
    const btn = document.createElement('button');
    btn.innerText = `Vote for ${option}`;
    btn.onclick = () => vote(option);
    optionsDiv.appendChild(btn);
  });
}


function displayResults() {
  let resultText = "";
  poll.forEach((votersSet, option) => {
    resultText += `${option}: ${votersSet.size} votes\n`;
  });
  return resultText.trim();
}


function updateResultsOnPage() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerText = displayResults();
}


showOptions();
updateResultsOnPage();
