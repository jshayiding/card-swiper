/* Generate JSON file */
/*
let csvToJson = require('convert-csv-to-json');

let fileInputName = './myInputFile.csv';
let fileOutputName = 'myOutputFile.json';


csvToJson.fieldDelimiter(',') .getJsonFromCsv(fileInputName);  //Define another dilimiterd
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
*/






/* Generate Array of Object in JSON format */
/*
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8081);
*/



var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    let csvToJson = require('convert-csv-to-json');

    let json = csvToJson.generateJsonFileFromCsv("./myInputFile.csv", "myOutputFile.json");
    for(let i=0; i<json.length;i++){
        console.log(json[i]);
    }
}).listen(8081);




/*
let csvToJson = require('convert-csv-to-json');

let json = csvToJson.generateJsonFileFromCsv("./myInputFile.csv");




for(let i=0; i<json.length;i++){
    console.log(json[i]);
}
*/


