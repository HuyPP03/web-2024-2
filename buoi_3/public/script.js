// Function to change layout
function changeLayout(layout) {
  document.body.className = layout;
}

// Random CPA between 3 and 4
function getRandomCPA() {
  const cpa = (Math.random() * (4 - 3) + 3).toFixed(2);
  document.getElementById("randomCPA").textContent = cpa;
}

function visitCount() {
  let visitCount = Number(localStorage.getItem("visitCount")) || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  return visitCount;
}
// Initialize page
window.onload = function () {
  getRandomCPA();
  document.body.className = "layout-1"; // Default layout
  document.getElementById("visitCount").textContent = visitCount();
};
