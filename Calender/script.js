const date = document.getElementById("p1");
const day = document.getElementById("p2");
const month = document.getElementById("p3");
const year = document.getElementById("p4");

const today = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


console.log(today);
date.innerHTML = today.getDate();
day.innerHTML = days[today.getDay()];
month.innerHTML = mon[today.getMonth()];
year.innerHTML = today.getFullYear();
