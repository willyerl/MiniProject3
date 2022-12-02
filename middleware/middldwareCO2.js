const axios = require("axios");

const middlAllModels = async (maker, model) => {
const encodedParams = new URLSearchParams();
encodedParams.append("vehicle_make", maker);
encodedParams.append("vehicle_model", model);
encodedParams.append("distance_value", "10");
encodedParams.append("distance_unit", "km");

const options = {
  method: 'POST',
  url: 'https://carbonsutra1.p.rapidapi.com/vehicle_estimate_by_model',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
    'X-RapidAPI-Key': 'f553b49b9cmsh1925d308b2dbde2p1f473djsn2347dd397149',
    'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
  },
  data: encodedParams
};
let response = await axios.request(options)
.then(function (response) {
    
    return response.data
}).catch(function (error) {
    console.error(error);
    return error
});
return response
}
module.exports = {
  middlAllModels
}