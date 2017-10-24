
let getWeather = function(info) {
  let latitude = info.coords.latitude;
  let longitude = info.coords.longitude;
  console.log("latitude = " + latitude);
  console.log("longitude = " + longitude);
  // console.info(info);
  // let latitude = '41.8781';
  // let longitude = '-87.6298';
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  // console.log(openweathermap_api_url);

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

let convertToJSON = function(response) {
  return response.json();
}

let updateWeather = function(junk) {
  name = junk.name;
  temp = junk.main.temp;
  desc = junk.weather[0].description;
  icon = junk.weather[0].icon;

  temp = Math.round(temp);
  // console.log(name);
  // console.log(temp);
  // console.log(desc);
  // console.log(icon);
  console.log(junk);

  let div = document.getElementById("weather");
  imgUrl = "http://openweathermap.org/img/w/" + icon + ".png";
  div.querySelector(".card-img-top").src = imgUrl;
  div.querySelector(".card-title").innerHTML = name;
  div.querySelector(".card-text").innerHTML = "It is " + temp + " degrees outside.";
  // console.log(imgUrl);
  lat = junk.coord.lat;
  lon = junk.coord.lon;
  console.log(lat);
  console.log(lon);


  }

let displayError = function(error) {
  // console.debug(error);
  window.alert("Sorry, something went wrong.");
}

let link = document.getElementById("get_forecast")
link.addEventListener("click", function(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
});


// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
