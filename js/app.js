let input = document.getElementById('cityName');
let main = document.getElementById('name');
let country=document.getElementById('country');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');
let weatherIcon=document.getElementById('icon')
let clouds = document.getElementById('clouds');
let button= document.getElementById('myButton');
const KELVIN = 273;
const key='1e9e7c011bcc9737b6cffa300dc1e1eb';
const weather = {}
weather.temperature = {
   unit : "celsius"
}

button.addEventListener('click', function(name){
   let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`;
fetch(api)
.then(function(response){
   let data = response.json();
   return data;
})
.then(function(data){
  console.log(data.main.temp);
  weather.temperature.value = Math.floor(data.main.temp - KELVIN);
  weather.city = data['name'];
  weather.country =data.sys.country;
  weather.description = data['weather'][0]['description'];
  weather.iconIdo= data.weather[0].icon;
})
.then(function(){
   displayWeather();
})

.catch(error => alert("Wrong city name!"));
})

function displayWeather(){
main.innerHTML = weather.city;
  country.innerHTML = weather.country;
  weatherIcon.innerHTML=`<img src="icons/${weather.iconIdo}.png"/>`;
  desc.innerHTML = weather.description;
  temp.innerHTML = weather.temperature.value+"°<span>C</span>";
  input.value ="";
}



/*temp.addEventListener("click", function(){
   console.log(weather.temperature.value);
   if(weather.temperature.value >= 25){
      
      temp.innerHTML=`
     <img src="images/drink-84533_1920.jpg"/>
      <h2>It s time to rest!!!</h2></div>`
      
  }else if(weather.temperature.value <= 0){
   temp.innerHTML=`<img src="images/download.jpeg"/>
   <h2>It s time to rest!!!</h2></div>`   
  }else{
   temp.innerHTML=`<img src="images/drink-84533_1920.jpg"/>
   <h2>It s time to rest!!!</h2></div>` 

  }
})*/
