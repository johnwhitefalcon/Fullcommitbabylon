
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'https://data.mongodb-api.com/app/data-ukvba/endpoint/data/v1';
const dbName = 'mongdbase1';

app.use(express.static('public'));

app.get('/', async (req, res) => {
  
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const collection = db.collection('mongcollect1');
    const documents = await db1.collection('mongcollect1').find({}).toArray();
    res.json(documents);

});


app.listen(3000);

