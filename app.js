const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast.js')
const readLine = require('readline')

const address = process.argv[2]

// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("What city would you like to look up?  ", (answer) => {

//     console.log("Thank you for you valuble feeback:  " + answer)

if (!address) {
    return console.log('No address provided')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)

        }

        forecast(data.latitude, data.logitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })

    })
}


//     rl.close
// })