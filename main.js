let selectedTd;

const table = document.querySelector("table");

table.onclick = function (event) {
  let td = event.target.closest("td");
  if (!td) return;
  if (!table.contains(td)) return;
  highlight(td);
};

function highlight(td) {
  if (selectedTd) {
    selectedTd.classList.remove("highlight");
  }
  selectedTd = td;
  selectedTd.classList.add("highlight");
}
