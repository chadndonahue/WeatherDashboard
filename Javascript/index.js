var submitButton = document.querySelector('#submitButton')
var inputBox = document.querySelector('#cityName')
var apiKey = "7fdbb9417197c505a863349af8396eb8"

// Only need one call for uv index and 5 day report and need to pass long and lat 
function citySearch(e) {
    e.preventDefault()
    var cityName = inputBox.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        // fiveDay(data.coord.lat, data.coord.lon)
        // all the dom stuff for current conditions here
    })
} 

submitButton.addEventListener("click", citySearch);