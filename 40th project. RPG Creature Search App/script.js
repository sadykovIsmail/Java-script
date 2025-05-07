// Define API endpoints
const LIST_API_URL = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
const CREATURE_API_URL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

// Get references to input, button, and all stat display elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const statElements = document.querySelectorAll(".stat");
const statMap = {};  // will map element IDs to the actual DOM elements

statElements.forEach(span => {
  if (span.id) {
    statMap[span.id] = span;
  }
});

// Utility: fetch JSON data from a given URL (with basic error handling)
async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

// Utility: clear all displayed creature info (reset spans)
// Ensures #types element is emptied and others have no leftover text:contentReference[oaicite:4]{index=4}
function clearDisplay() {
  Object.entries(statMap).forEach(([id, elem]) => {
    if (id === "types") {
      elem.innerHTML = "";    // remove any child elements in #types
    } else {
      elem.textContent = "";  // clear text for all other stats
    }
  });
}

// Fetch the full creature list once, then enable search functionality
let creaturesList = [];
window.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(LIST_API_URL);
  if (data) {
    creaturesList = data;
  }
  // Attach click handler after list is loaded
  searchButton.addEventListener("click", onSearch);
});

// Search handler: find creature by name or ID and display its info
async function onSearch() {
  const query = searchInput.value.trim();
  if (query === "") {
    // If input is empty, just clear any existing display and do nothing
    clearDisplay();
    return;
  }
  // Try to match query with a creature by name (case-insensitive) or by numeric ID
  const creature = creaturesList.find(creat =>
    creat.name.toLowerCase() === query.toLowerCase() || String(creat.id) === query
  );
  clearDisplay();  // Clear previous results regardless of outcome
  if (!creature) {
    alert("Creature not found");
  } else {
    // Fetch detailed data for the found creature
    const info = await fetchData(CREATURE_API_URL + creature.id);
    if (!info) {
      alert("Creature not found");
    } else {
      // Update text content of each field with the creature’s info
      statMap["creature-name"].textContent = info.name.toUpperCase();
      statMap["creature-id"].textContent = `#${info.id}`;
      statMap["weight"].textContent = `Weight: ${info.weight}`;
      statMap["height"].textContent = `Height: ${info.height}`;
      // Populate types – add each type as a separate element (e.g., as a div or span)
      info.types.forEach(typeObj => {
        const typeName = typeObj.name.toUpperCase();
        statMap["types"].innerHTML += `<span>${typeName}</span>`;
      });
      // Populate stats – each stat’s name corresponds to an element ID:contentReference[oaicite:5]{index=5}
      info.stats.forEach(statObj => {
        const statName = statObj.name;           // e.g., "hp", "attack", "defense", etc.
        const statValue = statObj.base_stat;     // the numeric value of the stat
        if (statMap[statName]) {
          statMap[statName].textContent = statValue;
        }
      });
    }
  }
  // Optionally, clear the search input for convenience
  searchInput.value = "";
}
