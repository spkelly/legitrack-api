const axios = require('axios');
const he = require('he');
// const fakeBill = require('../test/testBill');

require('dotenv').config();


// creates and sends a bill object to the client
async function getBill(req,res){
  let billData = await fetchBillData(req.params.id);
  let bill = generateBill(billData.data.bill);

  res.json(bill);
}


// sends a fake bill to the client 
// async function getFakeBill(req,res){
//   let fakeBill= await generateFakeBill();
//   res.json(fakeBill);
// }

// fetches bill data from legiscan api
function fetchBillData(id){
  return axios.get(`https://api.legiscan.com/?key=${ process.env.API_KEY }&op=getBill&id=${ id }`);
}






// "votes": [
// {
//   "roll_call_id": 751588,
//   "date": "2018-05-09",
//   "desc": "Senate: Consideration of Resolutions Resolution",
//   "yea": 35,
//   "nay": 0,
//   "nv": 0,
//   "absent": 0,
//   "total": 35,
//   "passed": 1,
//   "chamber": "S",
//   "chamber_id": 22,
//   "url": "https://legiscan.com/CO/rollcall/HJR1022/id/751588",
//   "state_link": "http://leg.colorado.gov/content/hjr18-1022vote19d54a"
//   },
//   {
//   "roll_call_id": 751589,
//   "date": "2018-05-09",
//   "desc": "House: Third Reading Res",
//   "yea": 64,
//   "nay": 0,
//   "nv": 0,
//   "absent": 1,
//   "total": 65,
//   "passed": 1,
//   "chamber": "H",
//   "chamber_id": 21,
//   "url": "https://legiscan.com/CO/rollcall/HJR1022/id/751589",
//   "state_link": "http://leg.colorado.gov/content/hjr18-1022vote189402"
//   }
//   ],

// used to make legiscan data more compatible with the ChartJs API
function chartifyVotes(votes){
  return votes.map(({desc, url, state_link, ...vote})=>{
    return { 
      label: vote.date,
      data:[ vote.yea, vote.nay, vote.nv, vote.absent],
      desc,
      url,
      state_link
    }
  });
}

// const testData = {
//  labels: ["Yay", "Nay", "NV", "Pass"],
//    datasets:[{
//      label:"number of votes",
//      data:[52,65,0,0],
//      backgroundColor: ['#777','#333']
//   }
// ]} 

// generates a bill object from the raw bill data 
function generateBill(billData){
  let votes = chartifyVotes(billData.votes);
  let decodedTitle = he.decode(billData.title);

  return {
    'id':billData.bill_id,
    'title':decodedTitle,
    'number':billData.bill_number,
    'sponsors':billData.sponsors,
    'votes':votes,
    'status':billData.status,
    'stats':{
      'status': billData.status,
      'id': billData.bill_id
    },
  'description' :billData.description
  };
};



module.exports = {
  getBill,
};



