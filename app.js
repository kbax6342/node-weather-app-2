const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=5fe95a05677af86821ad8b665e6e7735&query=37.8267,-122.4233'

request({
    url: url,
    json: true
}, (error, response) => {
    const start = response.body
    console.log(

        "It is currently " +
        start.current.temperature +
        " degreess out. There is a " +
        start.current.precip +
        "% chance of rain."
    )

})

//Goal: Print a small forecaset to the user

//1. Print: "It is currently 58.55 degress out. There is a 0% chance of rain."