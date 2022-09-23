
const fetch = require("node-fetch");
require('dotenv').config();

const API_ENDPOINT = "https://creator.zoho.com/api/v2/zoho_henks/bainsvleicpf/report/All_Sectors/2573309000000061549";

exports.handler = async (event, context) => {

const RECID= event.queryStringParameters.REC_ID;


  return fetch(API_ENDPOINT, { headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}`} })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
        }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};

