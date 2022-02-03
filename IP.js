const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');

async function main(phare, key) {

  const uri = "mongodb+srv://test1hello:3rZzGLm4dimFHam@testdb-01.oupbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      //Get client IP address
      const C_ID = await clientID();
      console.log(C_ID);
      console.log(Date());

      await createnewdata(client, {
        User_ID : C_ID,
        Phare : phare,
        Key : key, 
        date : Date()
        })
      } catch (e) {
      console.error(e);
  } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
  }
  alert("Done");
}

//Client IP address function
async function clientID(){
const response = await fetch('https://json.geoiplookup.io/');
const data = await response.json();

return data;
}

//Insert Data into DB one by one
async function createnewdata(client, newListing){
const result = await client.db("CentipedeUser").collection("Players").insertOne(newListing);

console.log(`Inserted Id: ${result.insertedId}`);
}

module.exports = { clientID , main };

//main().catch(console.error);