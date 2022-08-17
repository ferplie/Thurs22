// /.netlify/functions/octo

const fetch = require('node-fetch');

exports.handler = async function (event, context, callback) {
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 1000.d285d6260b770cda9dddb6b1ff22e330.27e555af37fff8e8aaec0d2e7b7bc989");
myHeaders.append("Cookie", "442b5845d7=7252427f3b265480bf287607c0af6dd2; ZCNEWLIVEUI=true; _zcsr_tmp=5cc8dd11-8476-4cbc-84e3-9100047d1f70; zccpn=5cc8dd11-8476-4cbc-84e3-9100047d1f70");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://creator.zoho.com/api/v2/zoho_henks/bainsvleicpf/report/All_Sectors/2573309000006717012", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  // let res = await fetch(url);
  // let data = await res.json();

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(result),
  });
};
