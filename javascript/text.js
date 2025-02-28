let date = new Date().toDateString();
document.getElementById("today").innerHTML = date;


const toggle = document.getElementById("blog-btn").addEventListener("click", () => {
  location.href = "question.html";
})