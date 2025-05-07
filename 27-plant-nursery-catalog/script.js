// === Plant Data ===
const ballerina = { commonName: "Spanish lavender", scientificName: "Lavandula stoechas", cultivar: "Ballerina" };
const prettyPolly = { commonName: "Spanish lavender", scientificName: "Lavandula stoechas", cultivar: "Pretty Polly" };
const willowVale = { commonName: "Spanish lavender", scientificName: "Lavandula stoechas", cultivar: "Willow Vale" };
const hidcote = { commonName: "English lavender", scientificName: "Lavandula angustifolia", cultivar: "Hidcote" };
const imperialGem = { commonName: "English lavender", scientificName: "Lavandula angustifolia", cultivar: "Imperial Gem" };
const royalCrown = { commonName: "French lavender", scientificName: "Lavandula dentata", cultivar: "Royal Crown" };

const catalog = new Map();
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });

// === Functions ===
const sellPlants = (plant, size, potsNo) => {
  if (!catalog.has(plant)) return "Item not found.";
  const name = `${plant.scientificName} '${plant.cultivar}'`;
  const pots = catalog.get(plant);
  if (pots[size] - potsNo < 0) {
    return `Not enough ${size} size pots for ${name}. Only ${pots[size]} left.`;
  }
  pots[size] -= potsNo;
  return `Catalog successfully updated.`;
};

const removePlant = (plant) => catalog.delete(plant);

const displayCatalog = () => {
  let catalogString = "";
  catalog.forEach((val, key) => {
    catalogString += `${key.scientificName} '${key.cultivar}': ${val.small} S, ${val.medium} M, ${val.large} L\n`;
  });
  return catalogString;
};

const displayPlantsSet = () => {
  const commonNames = [];
  for (const plant of catalog.keys()) {
    commonNames.push(plant.commonName);
  }
  const catalogSet = new Set(commonNames);
  return catalogSet;
};

// === DOM Manipulation ===
const catalogOutput = document.getElementById("catalogOutput");
const plantSelect = document.getElementById("plantSelect");
const removePlantSelect = document.getElementById("removePlantSelect");
const sellForm = document.getElementById("sellForm");
const removeForm = document.getElementById("removeForm");
const sellMessage = document.getElementById("sellMessage");
const removeMessage = document.getElementById("removeMessage");
const plantsSetOutput = document.getElementById("plantsSet");

// Populate Select Options
const populatePlantOptions = () => {
  plantSelect.innerHTML = "";
  removePlantSelect.innerHTML = "";
  for (const plant of catalog.keys()) {
    const option = document.createElement("option");
    option.value = plant.cultivar;
    option.textContent = `${plant.scientificName} '${plant.cultivar}'`;
    plantSelect.appendChild(option);

    const removeOption = option.cloneNode(true);
    removePlantSelect.appendChild(removeOption);
  }
};

// Find Plant Object by Cultivar
const findPlantByCultivar = (cultivar) => {
  for (const plant of catalog.keys()) {
    if (plant.cultivar === cultivar) return plant;
  }
  return null;
};

// Display Catalog and Unique Plant Types
const refreshDisplay = () => {
  catalogOutput.textContent = displayCatalog();

  plantsSetOutput.innerHTML = "";
  const plantsSet = displayPlantsSet();
  plantsSet.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    plantsSetOutput.appendChild(li);
  });
};

// === Event Listeners ===
sellForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedPlant = findPlantByCultivar(plantSelect.value);
  const size = document.getElementById("sizeSelect").value;
  const potsNo = parseInt(document.getElementById("potsNumber").value);

  if (!selectedPlant || isNaN(potsNo) || potsNo <= 0) {
    sellMessage.textContent = "Please select a plant and enter a valid number of pots.";
    return;
  }

  const result = sellPlants(selectedPlant, size, potsNo);
  sellMessage.textContent = result;
  refreshDisplay();
});

removeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedPlant = findPlantByCultivar(removePlantSelect.value);

  if (!selectedPlant) {
    removeMessage.textContent = "Please select a valid plant to remove.";
    return;
  }

  removePlant(selectedPlant);
  removeMessage.textContent = `Plant '${selectedPlant.cultivar}' removed.`;
  populatePlantOptions();
  refreshDisplay();
});

// === Initialize ===
populatePlantOptions();
refreshDisplay();
