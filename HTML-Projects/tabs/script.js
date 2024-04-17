const tabs = document.querySelectorAll(".tabs h3");
const tabContents = document.querySelectorAll(".tab-content div");


tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    deactivateAll();
    tab.classList.add("active");
    tabContents[index].classList.add("active");
  });
});

function deactivateAll() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabContents.forEach((content) => {
    content.classList.remove("active");
  });
}
