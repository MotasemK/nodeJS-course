const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    
    const url = `http://api.weatherstack.com/current?access_key=d7db7f4b07bb222cc36847ec9840811e&query=${latitude},${longitude}&units=m`
    request( { url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error){
            callback(response.body.error.info, undefined)
        } else {
            const temp = response.body.current.temperature
            const apperantTemp = response.body.current.feelslike
            const weatherDescription = response.body.current.weather_descriptions[0]
            callback(undefined, `${weatherDescription}. It is currently ${temp} degrees out and it feels like ${apperantTemp} degrees out.`)
        }
    })
}

module.exports = forecast