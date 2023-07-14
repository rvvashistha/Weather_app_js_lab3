
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2e7f3536bcmshf9f11ee40cf9bbap1915dejsn5be193da8dd8',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2e7f3536bcmshf9f11ee40cf9bbap1915dejsn5be193da8dd8',
        'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
    }
};

const temp = document.getElementById("temp")
const max_temp = document.getElementById("max_temp")
const main_temp = document.getElementById("main_temp")
const max_temp2 = document.getElementById("max_temp2")
const min_temp = document.getElementById("min_temp")
const min_temp2 = document.getElementById("min_temp2")
const submit = document.getElementById("submit")
const city = document.getElementById("city_input")
const cityName = document.getElementById("cityName")
const date = document.getElementById("date")
const feels_like2 = document.getElementById("feels_like2")
const feels_like = document.getElementById("feels_like")
const current_weather = document.getElementById("current_weather")



const getWeather = (city) => {

    date.innerHTML = getCurrentDateAndTime();  
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(Response => Response.json())
        .then(Response => {

            temp.innerHTML = Response.temp
            max_temp.innerHTML = Response.max_temp
            min_temp.innerHTML = Response.min_temp
            feels_like.innerHTML = Response.feels_like
            max_temp2.innerHTML = '<span>&#8451;</span>'
            min_temp2.innerHTML = '<span>&#8451;</span>'
            main_temp.innerHTML = '<span>&#8451;</span>'
            feels_like2.innerHTML = '<span>&#8451;</span>'
            console.log(Response)
        })


        fetch('https://the-weather-api.p.rapidapi.com/api/weather/' + city, options2)
        .then(Response => Response.json())
        .then(Response => {
            
            cityName.innerHTML = Response.data.city
            current_weather.innerHTML = Response.data.current_weather
            
            console.log(Response)
            
        })
        .catch(err => console.error(err))


}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (city.value === "") {
        alert("Please enter the city name ")
    }
    else {
        getWeather(city.value)

    }
})

function getCurrentDateAndTime() {
    var dateTime = new Date();
    var gtm_date = dateTime.toGMTString();
    return gtm_date.split(' ').slice(0, 4).join(' ');
}


getWeather("Delhi")
