// /.netlify/functions/octo

// const fetch = require('node-fetch');

// exports.handler = async function (event, context, callback) {
//   var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer 1000.d285d6260b770cda9dddb6b1ff22e330.27e555af37fff8e8aaec0d2e7b7bc989");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://creator.zoho.com/api/v2/zoho_henks/bainsvleicpf/report/All_Sectors/2573309000006717012", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   // let res = await fetch(url);
//   // let data = await res.json();

//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify(result),
//   });
// };
const fetch = require("node-fetch");

const API_ENDPOINT = "https://creator.zoho.com/api/v2/zoho_henks/bainsvleicpf/report/All_Sectors/2573309000006717012";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Authorization: "Bearer 1000.07d287262c6ad121350a2879dc526813.97a428b69434f5d106bc299914372d77"} })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: JSON.stringify(data),
        }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};