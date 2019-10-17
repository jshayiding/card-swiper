const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://MongoDB:testpass222%21@cluster0-moa1z.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "testdb";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;

app.listen(3001, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("people");
        studentCollection = database.collection("students");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});



// Endpoints for HTTP Consumption

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });

//POST
//When client does a POST request to the "/person" endpoint, take
//the body and insert into the collection.
app.post("/person", (request, response) => {
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

//GET
//Return all data in the collection representing people
//No conditions = {} in find command
//Results gets converted into an array
app.get("/people", (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//GET
//Gets specific person 
//Route parameter "id" which represents object id in MongoDB
app.get("/person/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//Adds a student to the server
app.post("/student", (request, response) => {
    studentCollection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

//Gets all the students from the database
app.get("/students", (request, response) => {
    studentCollection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

//Upload JSON data to database
app.post("/upload", (request, response) => {
    var fs = require('fs');
    fs.readFile('test1.json', 'utf8', function(err, data) {
        console.log(data);
        var json = JSON.parse(data);

        studentCollection.insert(json, (error, result) => {
            if(error) {
                return response.status(500).send(error);
            }
            
            response.send(result.result);
        });
    });
});

//Gets the JSON file
app.get("/getJSON", (request, response) => {
    var fs = require('fs');
    fs.readFile('test1.json' , 'utf8', function(err, data) {
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);

        response.send(json);
    })
});


app.get("/getNonDups", (request, response) => {
    var fs = require('fs');
    fs.readFile('test1.json' , 'utf8', function(err, data) {
        console.log(data);
        var json = JSON.parse(data);
        console.log(json);
        
        validateUIN("670168228").then(function(valid){
            console.log("is it valid? " + valid);
            if(valid){
                console.log("UIN is not in the database");
            }else{
                console.log("UIN already exists");
            }
        });
        response.send(json);
    });
});






/* Check already existing UINs in the database */
function validateUIN(UIN){

    return studentCollection.findOne({uin: UIN}).then(function(result){
        console.log(UIN);
        console.log(result);
        return result == null;
    });
    
}

app.get("/person/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.get('/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

  app.post('/send', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });

//Check url
/*
curl -X POST \
    -H 'content-type:application/json' \
    -d '{"firstname":"Marko","lastname":"Simmons"}' \
    http://localhost:3000/student
*/



/* API Route Links:
http://localhost:3000/people
*/








/*
//Import express
let express = require('express');

//Initialize the app
let app = express();

//Import Body parser
let bodyParser = require('body-parser');

//Import Mongoose
let mongoose = require('mongoose');

//Import routes
let apiRoutes = require("./api-routes");

//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://ccarde8:testpass222%21@cluster0-moa1z.mongodb.net/test?retryWrites=true');

var db = mongoose.connection;
//Setup server port
var port = process.env.PORT || 8080;

//Send message for default URL
app.get('/' , (req, res) => res.send("Express and Nodemon"));

//Use API routes in the App
app.use('/api' , apiRoutes);


//nodemon is a node module that watches the files
//and restarts the express-server when there are changes
//instead of doing it manually

//run by nodemon index


//Launch app to listen to specified port
app.listen(port, function() {
    console.log("Running RestHub on port " + port);
});


*/