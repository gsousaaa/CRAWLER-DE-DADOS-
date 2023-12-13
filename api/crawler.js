const axios = require('axios')
const db = require('./db');

function insertDb(data) {
    const q = "INSERT INTO respostas(`temp`, `region`, `country`, `city`) VALUES(?, ?, ?, ?)";

    const arrData = [
        data.current.temp_c,
        data.location.region,
        data.location.country,
        data.location.name

    ]
    console.log(arrData)
    db.query(q, arrData, (err, res) => {
        return console.log(res)
    })

}

async function fetchDataFromWeatherAPI(city) {
    const arrData = []

    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=606887d94d6f424696a130013231212&q=${city}&aqi=no`)
        const data = response.data
        // função para inserir no banco de dados
        insertDb(data)

        const objData = {
            temp: data.current.temp_c,
            region: data.location.region,
            country: data.location.country,
            city: data.location.name
        }
       
        arrData.push(objData)
        return arrData

    } catch (error) {
        console.error("Erro ao buscar dados da api: ", error.message)
    }
}

module.exports = fetchDataFromWeatherAPI
