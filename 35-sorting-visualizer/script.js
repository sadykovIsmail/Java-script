let currentArray = [];

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(container, arr) {
  container.innerHTML = "";
  arr.forEach(num => {
    const span = document.createElement("span");
    span.textContent = num;
    container.appendChild(span);
  });
}

function isOrdered(a, b) {
  return a <= b;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

function highlightCurrentEls(container, index) {
  const children = container.children;
  if (index < children.length - 1) {
    children[index].style.border = "2px dashed red";
    children[index + 1].style.border = "2px dashed red";
  }
}

document.getElementById("generate-btn").addEventListener("click", function () {
  const arrayContainer = document.getElementById("array-container");
  arrayContainer.innerHTML = "";

  const startingArrayDiv = document.createElement("div");
  startingArrayDiv.id = "starting-array";
  arrayContainer.appendChild(startingArrayDiv);

  currentArray = generateArray();
  fillArrContainer(startingArrayDiv, currentArray);
});

document.getElementById("sort-btn").addEventListener("click", function () {
  if (currentArray.length === 0) return;
  const arrayContainer = document.getElementById("array-container");
  const startingArrayDiv = document.getElementById("starting-array");

  // Remove any existing step divs, keeping only the starting array
  Array.from(arrayContainer.children).forEach(child => {
    if (child !== startingArrayDiv) {
      arrayContainer.removeChild(child);
    }
  });

  // Display the starting array and highlight first comparison
  fillArrContainer(startingArrayDiv, currentArray);
  highlightCurrentEls(startingArrayDiv, 0);

  let arr = currentArray.slice();
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      // For all steps except the first comparison (handled above)
      if (!(i === 0 && j === 0)) {
        const stepContainer = generateContainer();
        fillArrContainer(stepContainer, arr);
        highlightCurrentEls(stepContainer, j);
        arrayContainer.appendChild(stepContainer);
      }
      // Swap if out of order
      if (!isOrdered(arr[j], arr[j + 1])) {
        swapElements(arr, j);
      }
    }
  }

  // Append final sorted array
  const finalContainer = generateContainer();
  fillArrContainer(finalContainer, arr);
  arrayContainer.appendChild(finalContainer);
});
