function permuteString(str, prefix = "", results = []) {
    if (str.length === 0) {
      results.push(prefix);
      return results;
    }
  
    const seen = new Set();
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (seen.has(char)) continue;
      seen.add(char);
  
      const remaining = str.slice(0, i) + str.slice(i + 1);
      permuteString(remaining, prefix + char, results);
    }
  
    return results;
  }
  
  function generatePermutations() {
    const input = document.getElementById("inputString").value;
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
  
    const results = permuteString(input);
    resultsDiv.innerHTML = `<p><strong>${results.length}</strong> permutations found:</p><p>${results.join(', ')}</p>`;
  }
  