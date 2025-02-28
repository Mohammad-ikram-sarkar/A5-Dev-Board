function time() {
  let news = new Date();
  let hour = news.getHours().toString();
  let min = news.getMinutes().toString();
  let sec = news.getSeconds().toString();
  hour = hour % 12 || 12;
  let am_pm = hour >= 12 ? "PM" : "AM";

  let times = `${hour}:${min}:${sec} ${am_pm}`;
  
  console.log( typeof times)

  const timetim = times.innerHTML = times;
  return timetim

}










