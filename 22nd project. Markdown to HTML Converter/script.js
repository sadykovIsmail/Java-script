const inputEl = document.getElementById("markdown-input");
const outputEl = document.querySelector("#html-output");
const previewEl = document.querySelector("#preview");

function convertMarkdown() {
  let input = inputEl.value;
  let html = input;

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Italic
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/_(.+?)_/g, "<em>$1</em>");

  // Blockquote
  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");

  // Images 
  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, "<img alt='$1' src='$2'>");

  // Links 
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2'>$1</a>");

  // Show raw HTML
  outputEl.textContent = html;

  // Show rendered HTML
  previewEl.innerHTML = html;
  return html
}

inputEl.addEventListener("input", convertMarkdown);
