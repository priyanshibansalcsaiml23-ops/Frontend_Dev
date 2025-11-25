const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = modal.querySelector(".modal-content");

// Open modal
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

// Close modal when clicking outside
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Prevent closing when clicking inside modal
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
