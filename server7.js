

const express = require('express')
const { MongoClient } = require('mongodb');

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const uri = 'mongodb+srv://johnwhitefalcon:Flow8404@cluster0.ufllo.mongodb.net/mongdbase1?retryWrites=true&w=majority'
const dbname = 'mongdbase1'
const result = [];

const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.get('/api/test', (req, res) => {

  async function a1(){  
    const client = await new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });


    const clientPromise = await client.connect()
      const {db1} = await clientPromise.db(dbname);
     
      result = await db1.collection('mongcollect1').find({}).toArray();
        const one = res.status(200).json(result)
        const one1 = res.send(result)
        console.log(one)
    
    }
a1();
        })


app.listen(3000);



