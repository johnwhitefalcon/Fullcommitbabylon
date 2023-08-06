
const express = require('express')


const app = express()

app.get('/fetchdata', async (req, res) => {
    const API_KEY = 'xdFIHV5Lt6dDJ4vk1YvAds3hvELPCM5UtVoiKJP1ZNKf7w1QnqY2WerLSyoYX4v2'
    const URL = `https://data.mongodb-api.com/app/data-ukvba/endpoint/data/v1/databases/mongdbase1/mongcollect1`
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
 
    const response = await fetch(`https://data.mongodb-api.com/app/data-ukvba/endpoint/data/v1/databases/${DB_NAME}/${COLLECTION_NAME}`, 
        {headers})
    const result = await response.json();    
       
        const one = res.status(200).json(result)
        const one1 = one.send()


})

app.listen(3000)


