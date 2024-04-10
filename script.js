const apiKey = "3e23f3c6882c3f7ce0226dcde1fa399f";

const inputspace = document.getElementById('ctrname')
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputspace.value}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    // console.log(apiUrl);
    // console.log(inputspace.value);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".weather").style.display = "block";
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "° C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.Weather[0].main == "Clouds") {
            weatherIcon.src = "img/Cloud.png";
        }
        else if (data.Weather[0].main == "Clear") {
            weatherIcon.src = "img/Clear.png";
        }
        else if (data.Weather[0].main == "Rain") {
            weatherIcon.src = "img/Rain.png";
        }
        else if (data.Weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if (data.Weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})