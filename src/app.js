const checklist = [
  {
    id: "structure-landmarks",
    category: { en: "Structure", sr: "Struktura" },
    title: { en: "Use clear page regions", sr: "Koristi jasne regione stranice" },
    description: {
      en: "Check that the interface has meaningful header, main, navigation, and footer regions where appropriate.",
      sr: "Proveri da interfejs ima smislen header, main, navigation i footer region gde je to potrebno."
    },
    wcag: [{ id: "1.3.1", label: "Info and Relationships", url: "https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html" }]
  },
  {
    id: "structure-headings",
    category: { en: "Structure", sr: "Struktura" },
    title: { en: "Keep headings in order", sr: "Drži naslove u logičnom redosledu" },
    description: {
      en: "Review whether headings describe the content below them and follow a logical hierarchy.",
      sr: "Proveri da li naslovi opisuju sadržaj ispod sebe i prate logičnu hijerarhiju."
    },
    wcag: [{ id: "2.4.6", label: "Headings and Labels", url: "https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html" }]
  },
  {
    id: "readability-contrast",
    category: { en: "Readability", sr: "Čitljivost" },
    title: { en: "Test text contrast", sr: "Proveri kontrast teksta" },
    description: {
      en: "Make sure body text, labels, controls, and error messages have enough contrast against their backgrounds.",
      sr: "Proveri da tekst, labele, kontrole i poruke grešaka imaju dovoljan kontrast u odnosu na pozadinu."
    },
    wcag: [{ id: "1.4.3", label: "Contrast Minimum", url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" }]
  },
  {
    id: "readability-length",
    category: { en: "Readability", sr: "Čitljivost" },
    title: { en: "Keep lines comfortable", sr: "Drži redove teksta preglednim" },
    description: {
      en: "Avoid long text lines and dense blocks that make scanning difficult, especially on wide screens.",
      sr: "Izbegavaj preduge redove i guste blokove teksta koji otežavaju skeniranje sadržaja."
    },
    wcag: [{ id: "1.4.8", label: "Visual Presentation", url: "https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html" }]
  },
  {
    id: "keyboard-focus",
    category: { en: "Keyboard", sr: "Tastatura" },
    title: { en: "Show visible focus", sr: "Prikaži vidljiv fokus" },
    description: {
      en: "Tab through the interface and confirm every interactive element has a visible focus state.",
      sr: "Prođi kroz interfejs tasterom Tab i proveri da svaka interaktivna kontrola ima vidljivo fokus stanje."
    },
    wcag: [{ id: "2.4.7", label: "Focus Visible", url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html" }]
  },
  {
    id: "keyboard-order",
    category: { en: "Keyboard", sr: "Tastatura" },
    title: { en: "Follow a predictable tab order", sr: "Prati predvidljiv Tab redosled" },
    description: {
      en: "Keyboard focus should move in the same order a person visually understands the page.",
      sr: "Fokus tastature treba da se kreće redosledom koji prati vizuelno razumevanje stranice."
    },
    wcag: [{ id: "2.4.3", label: "Focus Order", url: "https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html" }]
  },
  {
    id: "forms-labels",
    category: { en: "Forms", sr: "Forme" },
    title: { en: "Label every input", sr: "Obeleži svako polje" },
    description: {
      en: "Each input should have a persistent label that remains understandable after the field is filled.",
      sr: "Svako polje treba da ima stalnu labelu koja ostaje razumljiva i nakon unosa."
    },
    wcag: [{ id: "3.3.2", label: "Labels or Instructions", url: "https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html" }]
  },
  {
    id: "forms-errors",
    category: { en: "Forms", sr: "Forme" },
    title: { en: "Explain errors clearly", sr: "Objasni greške jasno" },
    description: {
      en: "Validation messages should say what happened and how to fix it without relying on color alone.",
      sr: "Poruke validacije treba da kažu šta se desilo i kako se popravlja, bez oslanjanja samo na boju."
    },
    wcag: [{ id: "3.3.1", label: "Error Identification", url: "https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html" }]
  },
  {
    id: "responsive-small",
    category: { en: "Responsive", sr: "Responsive" },
    title: { en: "Review small screens", sr: "Proveri male ekrane" },
    description: {
      en: "Check that content, controls, and navigation work without overlap or tiny tap targets on mobile widths.",
      sr: "Proveri da sadržaj, kontrole i navigacija rade bez preklapanja i premalih zona za dodir."
    },
    wcag: [{ id: "1.4.10", label: "Reflow", url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html" }]
  },
  {
    id: "motion-reduction",
    category: { en: "Motion", sr: "Animacija" },
    title: { en: "Respect reduced motion", sr: "Poštuj reduced motion podešavanje" },
    description: {
      en: "Avoid essential meaning that depends on animation and support reduced-motion preferences when animation is used.",
      sr: "Ne oslanjaj ključno značenje samo na animaciju i podrži reduced-motion podešavanja kada se animacija koristi."
    },
    wcag: [{ id: "2.3.3", label: "Animation from Interactions", url: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html" }]
  },
  {
    id: "content-actions",
    category: { en: "Content", sr: "Sadržaj" },
    title: { en: "Use specific action labels", sr: "Koristi konkretne nazive akcija" },
    description: {
      en: "Buttons and links should describe the action or destination, not rely on vague labels like click here.",
      sr: "Dugmad i linkovi treba da opisuju akciju ili destinaciju, umesto nejasnih labela kao što je klikni ovde."
    },
    wcag: [{ id: "2.4.4", label: "Link Purpose", url: "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html" }]
  },
  {
    id: "content-empty-states",
    category: { en: "Content", sr: "Sadržaj" },
    title: { en: "Design helpful empty states", sr: "Dizajniraj korisna prazna stanja" },
    description: {
      en: "Empty states should explain what is missing and offer the next useful action when possible.",
      sr: "Prazna stanja treba da objasne šta nedostaje i ponude sledeću korisnu akciju kada je moguće."
    },
    wcag: [{ id: "3.3.5", label: "Help", url: "https://www.w3.org/WAI/WCAG22/Understanding/help.html" }]
  }
];

const ui = {
  en: {
    eyebrow: "Open-source UX tool",
    title: "UX Accessibility Review Kit",
    description: "A practical checklist for reviewing interfaces before handoff, launch, or portfolio publication.",
    category: "Category",
    allCategories: "All categories",
    language: "Language",
    export: "Export Markdown",
    reset: "Reset checks",
    completed: "checks completed",
    notes: "Review notes",
    notesPlaceholder: "Add observations, fixes, or follow-up tasks...",
    wcag: "Related WCAG",
    exportedTitle: "UX Accessibility Review",
    done: "Done",
    notDone: "Not done"
  },
  sr: {
    eyebrow: "Open-source UX alat",
    title: "UX Accessibility Review Kit",
    description: "Praktična lista za proveru interfejsa pre handoff-a, lansiranja ili objave portfolio rada.",
    category: "Kategorija",
    allCategories: "Sve kategorije",
    language: "Jezik",
    export: "Izvezi Markdown",
    reset: "Resetuj provere",
    completed: "završenih provera",
    notes: "Beleške iz review-a",
    notesPlaceholder: "Dodaj zapažanja, popravke ili sledeće korake...",
    wcag: "Povezani WCAG",
    exportedTitle: "UX Accessibility Review",
    done: "Urađeno",
    notDone: "Nije urađeno"
  }
};

const checklistElement = document.querySelector("#checklist");
const categoryFilter = document.querySelector("#categoryFilter");
const languageSelect = document.querySelector("#languageSelect");
const completedCount = document.querySelector("#completedCount");
const resetButton = document.querySelector("#resetButton");
const exportButton = document.querySelector("#exportButton");
const checkedIds = new Set(JSON.parse(localStorage.getItem("ux-review-checked") || "[]"));
const notes = JSON.parse(localStorage.getItem("ux-review-notes") || "{}");

let currentLanguage = localStorage.getItem("ux-review-language") || "en";

function text(value) {
  return value[currentLanguage] || value.en;
}

function saveProgress() {
  localStorage.setItem("ux-review-checked", JSON.stringify([...checkedIds]));
  localStorage.setItem("ux-review-notes", JSON.stringify(notes));
  localStorage.setItem("ux-review-language", currentLanguage);
}

function updateUiText() {
  const copy = ui[currentLanguage];
  document.documentElement.lang = currentLanguage === "sr" ? "sr" : "en";
  document.querySelector("#eyebrow").textContent = copy.eyebrow;
  document.querySelector("#pageTitle").textContent = copy.title;
  document.querySelector("#pageDescription").textContent = copy.description;
  document.querySelector("#categoryLabel").textContent = copy.category;
  document.querySelector("#languageLabel").textContent = copy.language;
  exportButton.textContent = copy.export;
  resetButton.textContent = copy.reset;
  document.querySelector("#completedLabel").textContent = copy.completed;
}

function updateSummary() {
  completedCount.textContent = checkedIds.size.toString();
}

function renderCategories() {
  const selectedCategory = categoryFilter.value || "all";
  const categories = [...new Map(checklist.map((item) => [item.category.en, text(item.category)])).entries()]
    .sort((a, b) => a[1].localeCompare(b[1]));

  categoryFilter.replaceChildren();

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = ui[currentLanguage].allCategories;
  categoryFilter.append(allOption);

  for (const [value, label] of categories) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    categoryFilter.append(option);
  }

  categoryFilter.value = selectedCategory;
}

function createWcagLinks(item) {
  const list = document.createElement("ul");
  list.className = "wcag-list";
  list.setAttribute("aria-label", ui[currentLanguage].wcag);

  for (const criterion of item.wcag) {
    const entry = document.createElement("li");
    const link = document.createElement("a");
    link.href = criterion.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = `${criterion.id} ${criterion.label}`;
    entry.append(link);
    list.append(entry);
  }

  return list;
}

function renderChecklist() {
  const activeCategory = categoryFilter.value;
  const visibleChecks = activeCategory === "all"
    ? checklist
    : checklist.filter((item) => item.category.en === activeCategory);

  checklistElement.replaceChildren();

  for (const item of visibleChecks) {
    const row = document.createElement("article");
    row.className = "check";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.id;
    checkbox.checked = checkedIds.has(item.id);
    checkbox.setAttribute("aria-label", text(item.title));

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
    category.textContent = text(item.category);

    const title = document.createElement("h2");
    title.textContent = text(item.title);

    const description = document.createElement("p");
    description.textContent = text(item.description);

    const noteLabel = document.createElement("label");
    noteLabel.className = "note-label";
    noteLabel.setAttribute("for", `${item.id}-notes`);
    noteLabel.textContent = ui[currentLanguage].notes;

    const noteField = document.createElement("textarea");
    noteField.id = `${item.id}-notes`;
    noteField.rows = 3;
    noteField.placeholder = ui[currentLanguage].notesPlaceholder;
    noteField.value = notes[item.id] || "";
    noteField.addEventListener("input", () => {
      notes[item.id] = noteField.value;
      saveProgress();
    });

    content.append(category, title, description, createWcagLinks(item), noteLabel, noteField);
    row.append(checkbox, content);
    checklistElement.append(row);
  }

  updateSummary();
}

function exportMarkdown() {
  const copy = ui[currentLanguage];
  const date = new Date().toISOString().slice(0, 10);
  const lines = [
    `# ${copy.exportedTitle}`,
    "",
    `Date: ${date}`,
    `Completed: ${checkedIds.size}/${checklist.length}`,
    "",
    "## Checklist"
  ];

  for (const item of checklist) {
    const status = checkedIds.has(item.id) ? copy.done : copy.notDone;
    lines.push("");
    lines.push(`### ${text(item.title)}`);
    lines.push(`- Status: ${status}`);
    lines.push(`- Category: ${text(item.category)}`);
    lines.push(`- Guidance: ${text(item.description)}`);
    lines.push(`- WCAG: ${item.wcag.map((criterion) => `${criterion.id} ${criterion.label}`).join(", ")}`);

    if (notes[item.id] && notes[item.id].trim()) {
      lines.push(`- Notes: ${notes[item.id].trim()}`);
    }
  }

  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ux-accessibility-review-${date}.md`;
  link.click();
  URL.revokeObjectURL(url);
}

categoryFilter.addEventListener("change", renderChecklist);

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  saveProgress();
  updateUiText();
  renderCategories();
  renderChecklist();
});

resetButton.addEventListener("click", () => {
  checkedIds.clear();

  for (const key of Object.keys(notes)) {
    delete notes[key];
  }

  saveProgress();
  renderChecklist();
});

exportButton.addEventListener("click", exportMarkdown);

languageSelect.value = currentLanguage;
updateUiText();
renderCategories();
renderChecklist();
