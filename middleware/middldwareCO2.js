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
    'X-RapidAPI-Key': 'api-key',
    'X-RapidAPI-Host': 'api-key'
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
