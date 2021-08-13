const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)


// Setup static directory to serve
app.use(express.static(publicDirectory))


app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Motasem Khalefa'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About me',
        name:'Motasem'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        message: 'Contact us for more information',
        title: 'Help',
        name: 'Motasem khalefa' 
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'Motasem Khalefa',
        message: 'Help article not found',
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'Motasem Khalefa',
        message: 'My 404 page',
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})