const axios = require('axios');
const fakeBill = require('../test/testBill');

require('dotenv').config();


// creates and sends a bill object to the client
async function getBill(req,res){
  let billData = await fetchBillData(1117006);
  let bill = generateBill(billData.data.bill);

  res.json(bill);
}

// sends a fake bill to the client 
async function getFakeBill(req,res){
  let fakeBill= await generateFakeBill();
  res.json(fakeBill);
}

// fetches bill data from legiscan api
function fetchBillData(id){
  return axios.get(`https://api.legiscan.com/?key=${ process.env.API_KEY }&op=getBill&id=${ id }`);
}

// generates a fake bill for testing purposes
function generateFakeBill(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(fakeBill);
    }, 500);
  });
};

// generates a bill object from the raw bill data 
function generateBill(billData){
  return {
    'id'          :billData.bill_id,
    'title'       :billData.title,
    'number'      :billData.bill_number,
    'sponsors'    :billData.sponsors,
    'votes'       :billData.votes,
    'status'      :billData.status,
    'description' :billData.description
  };
}



module.exports = {
  getBill,
  getFakeBill
};



