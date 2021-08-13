const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=d7db7f4b07bb222cc36847ec9840811e&query=31.9539,35.9106&units=m'
/*
request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service')
    } else if (response.body.error){
        console.log(response.body.error.info)
    }
    else{
        const temp = response.body.current.temperature
        const apperantTemp = response.body.current.feelslike
        const weatherDescription = response.body.current.weather_descriptions[0]
    
        console.log(`${weatherDescription}. It is currently ${temp} degrees out and it feels like ${apperantTemp} degrees out.`)
    }
   
})
*/
// Geocoding: taking an address and convert it to latitude and longitude.
// user will provide an address -> convert it to lat/long -> get the weather.


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWtoYWxlZmEiLCJhIjoiY2tzODl3YW9vMHQycDJvcHM2N3NrczJrNCJ9.0snFuAHVUuQNeCXrQAVCrA&limit=1'
request({ url:geocodeURL, json: true},(error,response) => {
    if (error){
        console.log('Unable to connect to geocode service')
    } else if (response.body.features.length === 0){
        console.log('Please enter a valid address !!!')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(`Latitude is ${latitude} and Longitude is ${longitude}`)
    }
})
