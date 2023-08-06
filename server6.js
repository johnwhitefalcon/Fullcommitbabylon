
const express = require('express')
const { MongoClient } = require('mongodb');
var cors = require('cors');

const uri = 'mongodb+srv://johnwhitefalcon:Flow8404@cluster0.ufllo.mongodb.net/mongdbase1?retryWrites=true&w=majority'
const dbname = 'mongdbase1'
const result = [];

const app = express();
app.use(cors({
  origin: 'http://localhost:3000/api/test',
  origin: uri
}));


app.use(express.static('public'))

app.use('/api/test', async function connectToDatabase1(req, res, next){
    const client = await new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });


    const clientPromise = await client.connect()
      const {db1} = await clientPromise.db(dbname);
     
      result = await db1.collection('mongcollect1').find({}).toArray();
      
connectToDatabase1(); 
next()

})



app.get('/api/test', async (req, res) => {

        const one = res.status(200).json(result)
        const one1 = res.send(result)
        console.log(one)
     
        })

app.listen(3000);



