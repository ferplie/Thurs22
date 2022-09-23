document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('octo').addEventListener('click', getOcto);
  document.getElementById('getRecBtn').addEventListener('click', getRec);
  const output=document.getElementById('Output');

  async function getOcto(ev) {
  ev.preventDefault();
  console.log('Getting New Token');
  const url="/api/generateAccessToken"
  const myData =await fetch(url)
  const received = await myData.json();


  console.log(received);
 }

 async function getRec(ev) {
  ev.preventDefault();
  console.log('Getting Data From Zoho');
  const url="/api/octo"
  const myData =await fetch(url)
  const received = await myData.json();
  output.innerHTML=received;

  console.log(received);

 
 }











});