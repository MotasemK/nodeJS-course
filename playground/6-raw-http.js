const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=d7db7f4b07bb222cc36847ec9840811e&query=40,-75&units=m`

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = '' + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('Error', (error) => {
    console.log('An error', error)
})

request.end()