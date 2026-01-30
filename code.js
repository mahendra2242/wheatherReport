
let city = document.querySelector(".search input");
let Status_img = document.querySelector(".Status-image img");
let celsius = document.querySelector(".celsius");
let humidity = document.querySelector(".humidityText");
let wind = document.querySelector(".windText");
let searchBtn = document.querySelector(".search-icon");
let cityname = document.querySelector(".city-name");
let errorMsg = document.querySelector(".error");
let weather = document.querySelector(".con-text");


searchBtn.addEventListener("click",async () => {
    let Base_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city.value}&appid=5e9d22e31b8fcbf83deaa08f5047ced6`
    let response = await fetch(Base_url);
    let data = await response.json();
    console.log(data);
    if (response.status == 200) {
        cityname.innerText = data.name;
        celsius.innerText = Math.round(data.main.temp) + "°C";
        weather.innerText = data.weather[0].main;
        humidity.innerText = data.main.humidity + " %";
        wind.innerText = data.wind.speed + " km/h";
        if(data.weather[0].main == "Rain") {
            Status_img.src = "rainy.png";
        }
        else if(data.weather[0].main == "Clouds") {
            Status_img.src = "cloudy3.png";
        }
        else if(data.weather[0].main == "Mist") {
            Status_img.src = "mist2.png";
        }
        else if(data.weather[0].main == "Clear") {
            Status_img.src = "clear.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            Status_img.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Haze") {
            Status_img.src = "mist2.png";
        }
        errorMsg.style.display = "none";
    }
    else  {
        errorMsg.style.display = "block";
    }
})