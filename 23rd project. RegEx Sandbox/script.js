const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

const getFlags = () => {
  let flags = "";
  if (globalFlag.checked) flags += "g";
  if (caseInsensitiveFlag.checked) flags += "i";
  return flags;
};

const replace = () => {
  const value = regexPattern.value;
  const flags = getFlags();
  const regex = new RegExp(value, flags);

  const originalText = stringToTest.textContent;
  const matches = originalText.match(regex);

  if (matches) {
   
    stringToTest.innerHTML = originalText.replace(regex, match => `<span class="highlight">${match}</span>`);
   
    testResult.textContent = matches.join(", ");
  } else {
   
    testResult.textContent = "no match";
    stringToTest.innerHTML = originalText; 
  }
};

testButton.addEventListener("click", replace);
