const express = require('express')
const { MongoClient } = require('mongodb');

const app = express();

const uri = 'mongodb+srv://johnwhitefalcon:Flow8404@cluster0.ufllo.mongodb.net/mongdbase1?retryWrites=true&w=majority'
const dbname = 'mongdbase1'

app.use(express.static('public'))

async function connectToDatabase1(){
    const client = await new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });


    const clientPromise = await client.connect()
    
      
    const db1 = await clientPromise.db(dbname);
    return {db1}

}


app.get('*', async (req, res) => {
    // Connect to the MongoDB Atlas database
    

    if (req.method === 'GET') {   
        const {db1} = await connectToDatabase1();  
         
        const result = await db1.collection('mongcollect1').find({}).toArray();
        
       
        const one = res.status(200).json(result)
        const one1 = res.status(200).json(result).send()
        console.log(one)
     
        }

    })

app.listen(3000);

