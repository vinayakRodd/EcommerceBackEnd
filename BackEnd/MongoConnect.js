const mongodb=require('mongodb')

// const connectionUrl="mongodb://127.0.0.1:27017/ShoppingCart" // 0.0.0.0:27017/name_of_collection //
const connectionUrl = "mongodb+srv://roddvinayak709:k4DCXFzgTfGvAk6Q@cluster0.tlhg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client=new mongodb.MongoClient(connectionUrl)

var db;

try{
    
    client.connect();
    console.log("Connected to Mongodb")
    db=client.db()
}

catch(err)
{
    console.log(err)
}

module.exports=db