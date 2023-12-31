
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

// Replace <API_KEY> with your actual MongoDB Atlas API key
const url = 'mongodb+srv://johnwhitefalcon:Flow8404@cluster0.ufllo.mongodb.net/mongdbase1?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error connecting to MongoDB Atlas' });
    } else {
      console.log('Successfully connected to MongoDB Atlas');
      const db = client.db('mongdbase1');
      const collection = db.collection('mongcollect1');
      collection.find({}).toArray((err, docs) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: 'Error fetching data from MongoDB Atlas' });
        } else {
          console.log('Successfully fetched data from MongoDB Atlas');
          res.status(200).json(docs);
        }
        client.close();
      });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
