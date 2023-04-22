const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0); 
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `Giveaway ends on ${weekday}, ${date } ${month} ${year} ${hours}:${minutes}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  // convert to days, hours, minutes and seconds
  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000; // it is one day in milliseconds
  const oneHour = 60 * 60 * 1000; // it is one hour in milliseconds
  const oneMinute = 60 * 1000; // it is one minute in milliseconds
  // calculate all values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  

  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }

  // set values array

  const values = [days, hours, minutes, seconds];

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h3 class="expired" style="color: red; font-weight: bold;">sorry, this giveaway has expired</h3>`
  }


}
// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();