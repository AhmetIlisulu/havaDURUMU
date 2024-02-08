const url = 'https://api.openweathermap.org/data/2.5/'
const key = '08adc67824eac4d1c9a530143f281674'


const weatherIcon = document.querySelector(".weather-icon")


const setQuery = (e) =>{
    if(e.keyCode == '13')
    getResult(searchBar.value)
}
const getResult = (cityName) =>{
    
    

    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
        fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
    
    
}

const displayResult = (result) =>{
    if(result.cod == 404){
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather-buttom').style.display = "none"
        document.querySelector('.weather-top').style.display = "none"
    }
    else{
        console.log(result)
        let city = document.querySelector('.weather-top-col-right-city-name')
        city.innerText = `${result.name}, ${result.sys.country}`

        let temp = document.querySelector('.weather-top-col-right-temp')
        temp.innerText = `${Math.round(result.main.temp)}°C`

        let windSpeed = document.querySelector('.wind')
        windSpeed.innerText = `${result.wind.speed}km/h`

        let hum = document.querySelector('.humidity')
        hum.innerText = `${result.main.humidity}%`

        if(result.weather[0].main == "Clouds"){     
            weatherIcon.src = "images/cloudy.png"
        }
        else if(result.weather[0].main == "Clear"){
        weatherIcon.src = "images/sun.png"
        }
        else if(result.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
        }
        else if(result.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
        }
        else if(result.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }



        document.querySelector(".weather-top").style.display = "flex"
        document.querySelector(".weather-buttom").style.display = "flex"
        document.querySelector(".weather-buttom-info").style.display = "flex"
        document.querySelector('.error').style.display = "none"
    }

    


}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)


