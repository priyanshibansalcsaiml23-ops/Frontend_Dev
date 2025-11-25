const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");
let currentEdit = null;

// Add product to list
addBtn.addEventListener("click", () => {
  const name = input.value.trim();
  if (!name) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="name">${name}</span>
    <button data-action="edit">Edit</button>
    <button data-action="delete">Delete</button>
  `;
  list.appendChild(li);
  input.value = "";
});

// Event delegation for Edit/Delete
list.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  const li = e.target.closest("li");
  if (!action || !li) return;

  if (action === "edit") {
    if (currentEdit) saveEdit(currentEdit);
    enterEditMode(li);
  } else if (action === "delete") {
    if (currentEdit === li) currentEdit = null;
    li.remove();
  }
});

// Enter edit mode
function enterEditMode(li) {
  const nameSpan = li.querySelector(".name");
  const input = document.createElement("input");
  input.type = "text";
  input.value = nameSpan.textContent;
  li.insertBefore(input, nameSpan);
  nameSpan.style.display = "none";
  li.classList.add("editing");
  currentEdit = li;
  input.focus();
}

// Save edit
function saveEdit(li) {
  const input = li.querySelector("input");
  const nameSpan = li.querySelector(".name");
  nameSpan.textContent = input.value.trim() || nameSpan.textContent;
  input.remove();
  nameSpan.style.display = "";
  li.classList.remove("editing");
  currentEdit = null;
}

// Auto-save on outside click
document.addEventListener("click", (e) => {
  if (currentEdit && !currentEdit.contains(e.target)) {
    saveEdit(currentEdit);
  }
});
