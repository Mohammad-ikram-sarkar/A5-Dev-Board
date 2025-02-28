// btn - 1
const btn1 = document.getElementById("btn-1");

btn1.addEventListener("click", (event) => {
 
  alert("board updated successfully");

  const tack = parseInt(document.getElementById("total-taskcount").innerText);
  console.log(tack)

  const  completed = parseInt(document.getElementById("completed-task").innerText);
  console.log(completed)
  document.getElementById("completed-task").innerText = completed + 1;

  if (tack > 0) {
    document.getElementById("total-taskcount").innerText = tack - 1;
  } else {
    document.getElementById("total-taskcount").innerText = 0;
  }

  const history = document.getElementById("history");

  const p = document.createElement("div");

  

  p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 5px; margin-bottom: 15px;");

  p.innerText = `you have completed the tack Fix Mobile Button Issue ${time()}`;

  history.appendChild(p);

 const btn1 =  document.getElementById("btn-1")

 btn1.setAttribute("disabled" , "true");


})


//btn -2


const btn2 = document.getElementById("btn-2").addEventListener("click", (event) => {
 
  alert("board updated successfully");

  const tack = parseInt(document.getElementById("total-taskcount").innerText);
  console.log(tack)

  const  completed = parseInt(document.getElementById("completed-task").innerText);
  console.log(completed)
  document.getElementById("completed-task").innerText = completed + 1;

  if (tack > 0) {
    document.getElementById("total-taskcount").innerText = tack - 1;
  } else {
    document.getElementById("total-taskcount").innerText = 0;
  }

  const history = document.getElementById("history");

  const p = document.createElement("div");

  

  p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 5px; margin-bottom: 15px;");

  p.innerText = `you have completed the tack Add Pay Success Modal at ${time()}`;

  history.appendChild(p);

 const btn1 =  document.getElementById("btn-2")

 btn1.setAttribute("disabled" , "true");

 
})

// btn-3 

const btn3 = document.getElementById("btn-3").addEventListener("click", (event) => {
 
  alert("board updated successfully");

  const tack = parseInt(document.getElementById("total-taskcount").innerText);
  console.log(tack)

  const  completed = parseInt(document.getElementById("completed-task").innerText);
  console.log(completed)
  document.getElementById("completed-task").innerText = completed + 1;

  if (tack > 0) {
    document.getElementById("total-taskcount").innerText = tack - 1;
  } else {
    document.getElementById("total-taskcount").innerText = 0;
  }

  const history = document.getElementById("history");

  const p = document.createElement("div");

  

  p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 5px; margin-bottom: 15px;");

  p.innerText = `you have completed the tack Add new reaction 🤲 at ${time()}`;

  history.appendChild(p);

 const btn1 =  document.getElementById("btn-3")

 btn1.setAttribute("disabled" , "true");

 
})

// btn- 4 

const btn4 = document.getElementById("btn-4").addEventListener("click", (event) => {
 
  alert("board updated successfully");

  const tack = parseInt(document.getElementById("total-taskcount").innerText);
  console.log(tack)

  const  completed = parseInt(document.getElementById("completed-task").innerText);
  console.log(completed)
  document.getElementById("completed-task").innerText = completed + 1;

  if (tack > 0) {
    document.getElementById("total-taskcount").innerText = tack - 1;
  } else {
    document.getElementById("total-taskcount").innerText = 0;
  }

  const history = document.getElementById("history");

  const p = document.createElement("div");

  

  p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 5px; margin-bottom: 15px;");

  p.innerText = `you have completed the tack Fix Video Loading Issue at ${time()}`;

  history.appendChild(p);

 const btn1 =  document.getElementById("btn-4")

 btn1.setAttribute("disabled" , "true");

 
})


// btn - 5 

const btn5 = document.getElementById("btn-5").addEventListener("click", (event) => {
 
  alert("board updated successfully");

  const tack = parseInt(document.getElementById("total-taskcount").innerText);
  console.log(tack)

  const  completed = parseInt(document.getElementById("completed-task").innerText);
  console.log(completed)
  document.getElementById("completed-task").innerText = completed + 1;

  if (tack > 0) {
    document.getElementById("total-taskcount").innerText = tack - 1;
  } else {
    document.getElementById("total-taskcount").innerText = 0;
  }

  const history = document.getElementById("history");

  const p = document.createElement("div");

  

  p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 5px; margin-bottom: 15px;");

  p.innerText = `you have completed the tack Integrate AI search at ${time()}`;

  history.appendChild(p);

 const btn1 =  document.getElementById("btn-5")

 btn1.setAttribute("disabled" , "true");

 
})



// btn - 6

const btn6 = document.getElementById("btn-6").addEventListener("click", (event) => {
 
  alert("board updated successfully");

  const tack = parseInt(document.getElementById("total-taskcount").innerText);
  console.log(tack)

  const  completed = parseInt(document.getElementById("completed-task").innerText);
  console.log(completed)
  document.getElementById("completed-task").innerText = completed + 1;

  if (tack > 0) {
    document.getElementById("total-taskcount").innerText = tack - 1;
  } else {
    document.getElementById("total-taskcount").innerText = 0;
  }

  const history = document.getElementById("history");

  const p = document.createElement("div");

  

  p.setAttribute("style" , "background-color: #F4F7FF; padding: 15px; border-radius: 5px; margin-bottom: 15px;");

  p.innerText = `you have completed the tack Review Ami Probashi Site at ${time()}`;

  history.appendChild(p);

 const btn1 =  document.getElementById("btn-6")

 btn1.setAttribute("disabled" , "true");

 
})

const historyClear = document.getElementById("clear-btn").addEventListener("click", (event) => {
  document.getElementById("history").innerHTML = "";
})

