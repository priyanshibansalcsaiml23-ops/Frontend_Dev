const searchBox = document.getElementById("searchBox");
const rows = document.querySelectorAll("#studentTable tr:not(:first-child)");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();
  let found = false;

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    if (text.includes(query)) {
      row.style.display = "";
      found = true;
    } else {
      row.style.display = "none";
    }
  });

  noResults.style.display = found ? "none" : "block";
});
// Initial state
noResults.style.display = "none";