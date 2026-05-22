const checklist = [
  {
    id: "structure-landmarks",
    category: "Structure",
    title: "Use clear page regions",
    description: "Check that the interface has meaningful header, main, navigation, and footer regions where appropriate."
  },
  {
    id: "structure-headings",
    category: "Structure",
    title: "Keep headings in order",
    description: "Review whether headings describe the content below them and follow a logical hierarchy."
  },
  {
    id: "readability-contrast",
    category: "Readability",
    title: "Test text contrast",
    description: "Make sure body text, labels, controls, and error messages have enough contrast against their backgrounds."
  },
  {
    id: "readability-length",
    category: "Readability",
    title: "Keep lines comfortable",
    description: "Avoid long text lines and dense blocks that make scanning difficult, especially on wide screens."
  },
  {
    id: "keyboard-focus",
    category: "Keyboard",
    title: "Show visible focus",
    description: "Tab through the interface and confirm every interactive element has a visible focus state."
  },
  {
    id: "keyboard-order",
    category: "Keyboard",
    title: "Follow a predictable tab order",
    description: "Keyboard focus should move in the same order a person visually understands the page."
  },
  {
    id: "forms-labels",
    category: "Forms",
    title: "Label every input",
    description: "Each input should have a persistent label that remains understandable after the field is filled."
  },
  {
    id: "forms-errors",
    category: "Forms",
    title: "Explain errors clearly",
    description: "Validation messages should say what happened and how to fix it without relying on color alone."
  },
  {
    id: "responsive-small",
    category: "Responsive",
    title: "Review small screens",
    description: "Check that content, controls, and navigation work without overlap or tiny tap targets on mobile widths."
  },
  {
    id: "motion-reduction",
    category: "Motion",
    title: "Respect reduced motion",
    description: "Avoid essential meaning that depends on animation and support reduced-motion preferences when animation is used."
  },
  {
    id: "content-actions",
    category: "Content",
    title: "Use specific action labels",
    description: "Buttons and links should describe the action or destination, not rely on vague labels like click here."
  },
  {
    id: "content-empty-states",
    category: "Content",
    title: "Design helpful empty states",
    description: "Empty states should explain what is missing and offer the next useful action when possible."
  }
];

const checklistElement = document.querySelector("#checklist");
const categoryFilter = document.querySelector("#categoryFilter");
const completedCount = document.querySelector("#completedCount");
const resetButton = document.querySelector("#resetButton");
const checkedIds = new Set(JSON.parse(localStorage.getItem("ux-review-checked") || "[]"));

function saveProgress() {
  localStorage.setItem("ux-review-checked", JSON.stringify([...checkedIds]));
}

function updateSummary() {
  completedCount.textContent = checkedIds.size.toString();
}

function renderCategories() {
  const categories = [...new Set(checklist.map((item) => item.category))].sort();

  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  }
}

function renderChecklist() {
  const activeCategory = categoryFilter.value;
  const visibleChecks = activeCategory === "all"
    ? checklist
    : checklist.filter((item) => item.category === activeCategory);

  checklistElement.replaceChildren();

  for (const item of visibleChecks) {
    const row = document.createElement("article");
    row.className = "check";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.id;
    checkbox.checked = checkedIds.has(item.id);
    checkbox.setAttribute("aria-label", item.title);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        checkedIds.add(item.id);
      } else {
        checkedIds.delete(item.id);
      }

      saveProgress();
      updateSummary();
    });

    const content = document.createElement("div");
    const category = document.createElement("span");
    category.className = "category";
    category.textContent = item.category;

    const title = document.createElement("h2");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    content.append(category, title, description);
    row.append(checkbox, content);
    checklistElement.append(row);
  }

  updateSummary();
}

categoryFilter.addEventListener("change", renderChecklist);

resetButton.addEventListener("click", () => {
  checkedIds.clear();
  saveProgress();
  renderChecklist();
});

renderCategories();
renderChecklist();
