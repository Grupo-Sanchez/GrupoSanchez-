const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster.82jgc.mongodb.net/GrupoSanchez?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("GrupoSanchez").collection("Prueba");
  // perform actions on the collection object
  client.close();
}).then(console.log("Base datos conectada con exito")
.catch(console.error()));
