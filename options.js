browser.storage.local.get({ pattern: "" }).then((item) => {
  if (item.pattern.trim().length > 0) {
    document.querySelector("#pattern").value = item.pattern.trim();
  }
});

document.querySelector("#options-form").addEventListener("submit", () => {
  browser.storage.local.set({ pattern: document.querySelector("#pattern").value.trim() });
});