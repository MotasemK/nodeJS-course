const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const readData = fs.readFileSync('1-json.json')
const toString = readData.toString()
const data = JSON.parse(toString)

data.name = "Motasem"
data.age = 25

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)