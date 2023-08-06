

const express = require('express')
const { MongoClient } = require('mongodb');
const { connectToDatabase1 } = require ('./util/mongodb1')
 

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.get('/api/test', async (req, res) => {

  if (req.method === 'GET') {   
    const {db1} = await connectToDatabase1();

     
    const result = await db1.collection('mongcollect1').find({}).toArray();

   
    const one = res.status(200).json(result)
    console.log(one)
 
    }



        })


app.listen(3000);




