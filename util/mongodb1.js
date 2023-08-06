
// import { MongoClient } from 'mongodb'
const { MongoClient } = require('mongodb');

//const assert = require('assert');
//const MongoClient = require('mongodb').MongoClient; 
const uri = process.env.MONGODB_URI1;
const dbname = process.env.MONGO_DB1;

async function connectToDatabase1(){
  
//  const client = await new MongoClient(uri);
const client = await new MongoClient(uri)
const clientPromise  = await client.connect()

  
const db1 = await clientPromise.db(dbname);

return {db1}

}


module.exports = {connectToDatabase1}






