function showTime() {
let time = document.querySelector('.time');
let dateN = new Date();
let currentTime = dateN.toLocaleTimeString();
time.textContent = currentTime;
setTimeout(showTime, 1000);
}
showTime();

function showDate() {
let date = document.querySelector('.date');	
let now = new Date();
let options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
let currentDay = now.toLocaleDateString('en-US', options);
date.textContent = currentDay;
setTimeout(showDate, 60000);
}
showDate();

function showGreeting(){ //отображать приветствие внутри указанного элемента
let greeting = document.querySelector('.greeting');		
let dateHi = new Date();
var hour = dateHi.getHours();
	if (hour <= 6) {
	  message = 'Good night';
	} else if (hour <= 12) {
	  message = 'Good morning';
	} else if (hour <= 18) {
	  message = 'Good afternoon';
	} else {
	  message = 'Good evening';
	}
greeting.textContent = message;
}
showGreeting();

function getRandomNum(min=1, max=20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let Num = Math.floor(Math.random() * (max - min + 1)) + min;
  let NumS = Num.toString(); 
  let NumN = NumS.padStart(2, "0"); 
 	return  NumN;
}
getRandomNum()

function getTimeOfDay(){
let dateHi = new Date();
var hour = dateHi.getHours();
	if (hour <= 6) {
	  messageD = 'night';
	} else if (hour <= 12) {
	  messageD = 'morning';
	} else if (hour <= 18) {
	  messageD = 'afternoon';
	} else {
	  messageD = 'evening';
	}
return messageD;
}

async function getWeather() {  
input.addEventListener('change', getWeather(input.value));
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=f076cd439fccd2214083bc2443386178&units=metric`;
const res = await fetch(url);
const data = await res.json(); 
var temp = Math.round(data.main.temp);
weatherIcon.className = 'weather-icon owf';
weatherIcon.classList.add(`owf-${data.weather[0].id}`);
temperature.textContent = `${temp}°C`;
weatherDescription.textContent = data.weather[0].description;
}
getWeather();


function setBg(){
let slideNext = document.querySelector('.slide-next');
slideNext.addEventListener('click', getNextSlide);
const TimeOfDay=getTimeOfDay();
const img = new Image();
img.src = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${TimeOfDay}/${getRandomNum}.jpg';  
getNextSlide.onload = () => {  
document.body.style.backgroundImage = "url('${img.src}')";
} 
}
setBg();