const exp = require('express');
const path = require('path/posix');
const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');
const fs = require('fs');

const app = exp();
const port = process.env.PORT || 5000

app.listen(port, () => console.log('Listing at port 5000'))
app.use(exp.static('public'))
app.use(exp.static(path.join(__dirname,'public')))
app.get('public/puzzle-1/',function(req, res){
    fs.readFile('I_am_Genius.html',function(error, data_file){
        if(error){
            res.status(404)
            res.write('Error: File not found!')
        }else{
            res.write(data_file)
        }
        res.end()
    })
})

/*
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
  alert("Done");
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
*/