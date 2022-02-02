/*$(document).ready(function(){
    $("span").click(function(){
      alert(atob('Q29uZ3JhdHVsYXRpb25zISBmb2xsb3cgeW91ciBsZWFkOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRJmFiX2NoYW5uZWw9Umlja0FzdGxleQ=='));
      main().catch(console.error);
    });
  });
*/
const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');

var datetime = new Date();

async function main() {

  const uri = "mongodb+srv://test1hello:3rZzGLm4dimFHam@testdb-01.oupbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      //Get client IP address
      const C_ID = await clientID();
      console.log(C_ID);

      await createnewdata(client, {
        User_ID : C_ID,
        date : datetime
        })
      } catch (e) {
      console.error(e);
  } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
  }
}

//Client IP address function
async function clientID(){
const response = await fetch('http://ip-api.com/json');
const data = await response.json();

return data;
}

//Insert Data into DB one by one
async function createnewdata(client, newListing){
const result = await client.db("CentipedeUser").collection("Players").insertOne(newListing);

console.log(`Inserted Id: ${result.insertedId}`);
}

main().catch(console.error);