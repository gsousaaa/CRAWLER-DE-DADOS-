const express = require('express')
const fetchDataFromWeatherAPI = require ('./crawler')

const app = express()
const PORT = 3000
app.listen(PORT)

app.get('/weather/:city', async (req, res) => {
    const { city } = req.params
    try {
        const weatherData = await fetchDataFromWeatherAPI(city)
        res.json(weatherData)
    } catch(error) {
        console.error(`Erro ao buscar ${error.message}`)
    }
})


