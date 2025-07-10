const contactForm = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModal");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show modal
  modal.style.display = "flex";
  document.body.classList.add("modal-open");

  // Optionally reset form
  contactForm.reset();
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

// Optional: close modal when clicking outside
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
