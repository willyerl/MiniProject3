const axios = require('axios');



const howManytrees = async (CO2) => {
    const options = {
        method: 'GET',
        url: 'https://carbonfootprint1.p.rapidapi.com/TreeEquivalent',
        params: {weight: CO2, unit: 'kg'},
        headers: {
            'X-RapidAPI-Key': 'api-key',
            'X-RapidAPI-Host': 'api-key'
          }
      };
   
    let response = await axios.request(options)
        .then(function (response) {
            
            return response.data
        }).catch(function (error) {
            // console.error(error);
            return error
        });
        return response
        
}

module.exports = { howManytrees }
