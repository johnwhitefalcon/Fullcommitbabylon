
const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Use body-parser to parse incoming request bodies
app.use(bodyParser.json());

// Connect to the MongoDB database
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://johnwhitefalcon:Flow8404@cluster0.ufllo.mongodb.net/mongdbase1?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
MongoClient.connect(function(err){
        
        var collection = client.db("mongdbase1").collection("mongcollect1");
        
        
  })       
  


app.get('/api/test', async (req, res) => {
    var collection = await client.db("mongdbase1").collection("mongcollect1");
    const result = await collection('mongcollect1').find({}).toArray();
    const one = await res.status(200).json(result)
    const one1 = await res.send(one)

})


app.listen(3000);