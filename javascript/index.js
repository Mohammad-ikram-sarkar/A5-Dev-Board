
const buttons = [
  { id: "btn-1", text: "Fix Mobile Button Issue" },
  { id: "btn-2", text: "Add Pay Success Modal" },
  { id: "btn-3", text: "Add new reaction 🤲" },
  { id: "btn-4", text: "Fix Video Loading Issue" },
  { id: "btn-5", text: "Integrate AI search" },
  { id: "btn-6", text: "Review Ami Probashi Site" }
];


buttons.forEach(btn => {
  document.getElementById(btn.id).addEventListener('click', () => {
    updateBoard(btn.id, btn.text);
  });
});

function updateBoard(buttonId, description) {
  alert("Board updated successfully"); 

  const totalEl = document.getElementById("total-taskcount");
  const completedEl = document.getElementById("completed-task");

  const newCompleted = parseInt(completedEl.textContent) + 1;
  completedEl.textContent = newCompleted;

  const newTotal = Math.max(parseInt(totalEl.textContent) - 1, 0);
  totalEl.textContent = newTotal;

  
  document.getElementById(buttonId).disabled = true;


  const historyItem = document.createElement("div");
  historyItem.className = "history-entry";
  historyItem.textContent = `You have completed the task ${description} at ${new Date().toLocaleTimeString()}`;
  
  document.getElementById("history").appendChild(historyItem);
  historyItem.style.backgroundColor = "#F4F7FF";
  historyItem.style.padding = "15px";

  if (newTotal === 0) {
    alert("congrates!!! you have completed all tasks");
  }
}

const historyClear = document.getElementById("clear-btn").addEventListener("click", (event) => {
  document.getElementById("history").innerHTML = "";
})
