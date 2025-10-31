document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("pages-container");
  const saveBtn = document.getElementById("saveBtn");
  const saveStatus = document.getElementById("saveStatus");

  // Create 20 editable pages dynamically (Page 2 to 21)
  for (let i = 2; i <= 21; i++) {
    const pageDiv = document.createElement("div");
    pageDiv.classList.add("page");
    pageDiv.innerHTML = `
      <h2>Diary Page ${i - 1}</h2>
      <p contenteditable="true" class="editable" data-page="${i}">✨ Write your thoughts here...</p>
    `;
    container.appendChild(pageDiv);
  }

  const pages = document.querySelectorAll(".editable");

  // Load previously saved content
  pages.forEach((page, index) => {
    const savedText = localStorage.getItem(`diaryPage${index}`);
    if (savedText) page.innerHTML = savedText;
  });

  // Save all pages
  saveBtn.addEventListener("click", () => {
    pages.forEach((page, index) => {
      localStorage.setItem(`diaryPage${index}`, page.innerHTML);
    });
    saveStatus.textContent = "✨ Saved successfully!";
    setTimeout(() => (saveStatus.textContent = ""), 2000);
  });
});
