const apiKey = "d586090c232e55d3b4e52ed44956b4b6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather (city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();
        console.log(data);
        console.log(data.main.temp);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";
        if(data.weather[0].main == "Clouds")
            weatherIcon.src= "image/clouds.png"
        else if(data.weather[0].main == "Clear")
            weatherIcon.src= "image/clear.png"
        else if(data.weather[0].main == "Drizzle")
            weatherIcon.src= "image/drizzle.png"
        else if(data.weather[0].main == "Snow")
            weatherIcon.src= "image/snow.png"
        else if(data.weather[0].main == "Rain")
            weatherIcon.src= "image/rain.png"
        else if(data.weather[0].main == "Mist")
            weatherIcon.src= "image/mist.png"
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})


// var weatherData = document.getElementById("weather_data");
// weatherData.addEventListener('click',function(e){
// e.preventDefault();
// var cityName = document.getElementById("cityName").value;
// var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&appid=d586090c232e55d3b4e52ed44956b4b6";
//  if(cityName == ""){
//      alert("Enter a city name");
//  }else{
//     fetch(url).then(function(response){
//       if(response.ok){
//           return response.json();
//       }else{
//           throw new Error(Error);
//       }
//   }).then(function(data){
//       console.log(data);
//     const html =`<h2 class="text-danger text-center"><span class="text-dark">Temprature:</span>${data.main.temp}</h2>
// ` ;
//       document.getElementById("display_data").insertAdjacentHTML('afterbegin',html);
//   }).catch(function(error){
//       console.log(error);
//   });
//   }
// });