var fs = require("fs");
        var sampleObject = {
                            uin: "123123",
                            studentInfo:{
                            firstName: "Phil",
                            middleName: "",
                            lastName: "Beltran",
                            rsvpStatus: "Yes"
                        }
                    };

   var fs = require('fs');  //gets the file system module for reading and writing files
   fs.readFile('./test1.json', 'utf8', function (err, data) {  //provide callback with data field
    var json = JSON.parse(data); //parses the data into json array string
    json.push(sampleObject);  //appends the contents of the object to the array
    fs.writeFile('./test1.json', JSON.stringify(json), function(err, result) {  //transforms JSON back to the string, write file and save file
       if(err) console.log('error', err); //Print out error if not successful
     });
   });

   //TODO provide checkin field and manual type in for UIN if card swipe does not work

   //Google form -> csv -> JSON -> cardswipe program

