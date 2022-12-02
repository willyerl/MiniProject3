const axios = require('axios');



const allvehicle = async () => {
    const options = {
        method: 'GET',
        url: 'https://carbonsutra1.p.rapidapi.com/vehicle_makes',
        headers: {
          'X-RapidAPI-Key': 'f553b49b9cmsh1925d308b2dbde2p1f473djsn2347dd397149',
          'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
        }
      };
   
    let response = await axios.request(options)
        .then(function (response) {
            
            return response.data
        }).catch(function (error) {
            console.error(error);
            return error
        });
        return(response)
        
}

const allModels = async (maker) => {
    const options = {
        method: 'GET',
        url: `https://carbonsutra1.p.rapidapi.com/vehicle_makes/${maker}/vehicle_models`,
        headers: {
          'X-RapidAPI-Key': 'f553b49b9cmsh1925d308b2dbde2p1f473djsn2347dd397149',
          'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
        }
      };
   
      let response = await axios.request(options)
      .then(function (response) {
          
          return response.data
      }).catch(function (error) {
          // console.error(error);
          return error
      });
      return(response)
        
}

module.exports = { allvehicle, allModels }