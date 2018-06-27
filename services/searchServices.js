const axios = require('axios');
const testSearch = require('../test/testSearch');
require('dotenv').config();


// fetch raw search data from legiscan api
function fetchSearchData(term){
  return axios.get(`https://api.legiscan.com/?key=${process.env.API_KEY}&op=search&state=CO&query=${term}`);
}


// fetches and sends search data to client
async function getSearch(req,res){
  console.log("[Fetching Search Results]: ",req.query.q);
  let results = await fetchSearchData(req.query.q);
  res.json({'results':results.data.searchresult});
}


module.exports= {
  'getSearch':getSearch
};