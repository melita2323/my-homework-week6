let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let time = document.querySelector("#time-city");
time.innerHTML = `${days[now.getDay()]}  ${now.getHours()}:${now.getMinutes()}`;

function addCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let change = document.querySelector("#city-name");
  change.innerHTML = `${city.value}`;
}
let cityform = document.querySelector("#city-form");
cityform.addEventListener("submit", addCity);


function showTemp(response){
let temp=Math.round(response.data.main.temp)
let temper=document.querySelector("#degree")
temper.innerHTML=`${temp}`
}
let cityName = document.querySelector("#city-name").value;
let apiKey = "6e5b6f936c666f6de792a3c5bae3ad5e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemp);


function showPosition(position){
let namePosition = document.querySelector("#city-name").value;
namePosition.innerHTML=`${position.data.main.name}`
}
function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(showPosition)
}
let button=document.querySelector("#current")
current.addEventListener("click",getCurrentPosition)