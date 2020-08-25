const request = require("request")

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURI(address) + ".json?access_token=pk.eyJ1Ijoia2JheDYzNDIiLCJhIjoiY2tlNGdkaGM0MHN6dTJ5bnhxd245bjBjNyJ9.Hyj6dy2Obykg5BS9OyhfZQ&limit=1"
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback("This api won't connect to endpoint", undefined)
        } else if (response.body.features.length === 0) {
            callback('There was no info return', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                logitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}



module.exports = geocode