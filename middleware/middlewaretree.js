const axios = require('axios');



const howManytrees = async (CO2) => {
    const options = {
        method: 'GET',
        url: 'https://carbonfootprint1.p.rapidapi.com/TreeEquivalent',
        params: {weight: CO2, unit: 'kg'},
        headers: {
            'X-RapidAPI-Key': 'f553b49b9cmsh1925d308b2dbde2p1f473djsn2347dd397149',
            'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com'
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