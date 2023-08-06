
const express = require('express')
const app = express();

app.use(express.static('public'))

app.get('/api/endpoint', async (req, res) => {
    const API_KEY =  'xdFIHV5Lt6dDJ4vk1YvAds3hvELPCM5UtVoiKJP1ZNKf7w1QnqY2WerLSyoYX4v2'
    const COLLECTION_NAME = 'mongcollect1'
    const DB_NAME = 'mongdbase1'

    const response = await fetch(`https://data.mongodb-api.com/app/data-ukvba/endpoint/data/v1/databases/${DB_NAME}/${COLLECTION_NAME}`, {
        headers: {
              'x-api-key': API_KEY,
            },});
    const result = await response.json();    
       
        const one = res.status(200).json(result)
        const one1 = one.send()
        console.log(one)
     
        })



app.listen(3000);



