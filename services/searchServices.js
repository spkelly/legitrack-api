const axios = require('axios');

require('dotenv').config();


// fetch raw search data from legiscan api
function fetchSearchData(term){
  return axios.get(`https://api.legiscan.com/?key=${process.env.API_KEY}&op=search&state=CO&query=${term}`);
}


// fetches and sends search data to client
async function getSearch(req,res){
  let results = await fetchSearchData(req.query.term);
  res.json({'results':results.data.searchresult});
}


module.exports= {
  'getSearch':getSearch
};