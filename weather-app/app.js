const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=d7db7f4b07bb222cc36847ec9840811e&query=31.9539,35.9106&units=m'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.current.temperature
    const apperantTemp = response.body.current.feelslike
    const weatherDescription = response.body.current.weather_descriptions[0]
    console.log(`${weatherDescription}. It is currently ${temp} degrees out and it feels like ${apperantTemp} degrees out.`)
})