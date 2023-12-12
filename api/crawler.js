const axios = require('axios')

async function fetchDataFromWeatherAPI(city) {
    const arrData = []
    
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=606887d94d6f424696a130013231212&q=${city}&aqi=no`)
        const data =  response.data
        
        const objData = {
            city: data.location.name,
            temp: data.current.temp_c,
            region: data.location.region,
            country: data.location.country
           } 
          
           arrData.push(objData)

       
         return arrData

    } catch (error) {
        console.error("Erro ao buscar dados da api: ", error.message)
    }
}

module.exports = fetchDataFromWeatherAPI
