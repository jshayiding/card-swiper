
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ccarde8:testpass222%21@cluster0-moa1z.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //testdb.testCollection
  console.log("Connected");
  client.close();
});

//Express Router
  // -creating routes "/" individual or set
  // destructoring (ex. only uin and name)
