var weatherData = document.getElementById("weather_data");
  weatherData.addEventListener('click',function(e){
 e.preventDefault();
 var cityName = document.getElementById("cityName").value;
 var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=d586090c232e55d3b4e52ed44956b4b6";
  if(cityName == ""){
      alert("Enter a city name");
  }else{
  fetch(url).then(function(response){
      if(response.ok){
          return response.json();
      }else{
          throw new Error(Error);
      }
  }).then(function(data){
      console.log(data);
    const html =    `
        <h2 class="text-danger text-center"><span class="text-dark">City:</span>${data.name}</h2>
        ` ;
      document.getElementById("display_data").insertAdjacentHTML('afterbegin',html);
  }).catch(function(error){
      console.log(error);
  });
  }
});