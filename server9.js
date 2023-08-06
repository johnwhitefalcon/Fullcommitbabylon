const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express();

app.use(express.static('public'))


app.get('/api/endpoint', async (req, res) => {

    const API_KEY =  'xdFIHV5Lt6dDJ4vk1YvAds3hvELPCM5UtVoiKJP1ZNKf7w1QnqY2WerLSyoYX4v2'
    const COLLECTION_NAME = 'mongcollect1'
    const DB_NAME = 'mongdbase1'

MongoClient.connect('https://data.mongodb-api.com/app/data-ukvba/endpoint/data/v1/databases/${DB_NAME}/${COLLECTION_NAME}')

  db.collection('mongcollect1').find().toArray((err, result) => {
   
    const finish = response.json() 
    const one = res.status(200).json(finish)
    const one1 = one.send()


  })
})

  app.listen(3000);

