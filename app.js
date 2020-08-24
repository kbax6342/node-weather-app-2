const request = require('request')




const searchText = toString(console.log('What adress are your looking for'))


const url = 'http://api.weatherstack.com/current?access_key=5fe95a05677af86821ad8b665e6e7735&query=37.8267,-122.4233'
request({
    url: url,
    json: true
}, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather')
    } else if (response.body.error) {
        if (response.body.error.code === 601) {
            console.log('"Please specify a valid location identifier using the query parameter.')
        }

    } else {
        const start = response.body

        console.log(
            start.current.weather_descriptions + "! in " + start.location.name + "," +
            start.location.region +
            ". It is currently " +
            start.current.temperature +
            " degreess out. There is a " +
            start.current.precip +
            "% chance of rain."
        )
    }



})

//Geocoding
//Address
const forward2Geocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2JheDYzNDIiLCJhIjoiY2tlNGdkaGM0MHN6dTJ5bnhxd245bjBjNyJ9.Hyj6dy2Obykg5BS9OyhfZQ&limit=1"


request({
    url: forward2Geocoding,
    json: true
}, (error, response) => {
    if (error) {
        console.log("This api won't connect to endpoint")
    } else if (response.body.message) {
        console.log('Not Found')
    } else if (response.body.features.length < 0) {
        console.log('There was not info returned')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(
            "Longitutde:" + longitude + "\n" +
            "Latitude:" + latitude
        )
    }

})