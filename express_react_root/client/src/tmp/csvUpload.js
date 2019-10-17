import React, { Component } from 'react';

var fs = require('fs');

var csv = require('fast-csv');

fs.createReadStream('datasample.csv')
    .pipe(csv())
    .on('data', function(data) {
        console.log(data);
    })
    .on('end', function(data){
        console.log('Read finished');
    })
class csvUpload extends Component{




    render() {
        return (
          
         <div>
          <button onClick={this.handleClick}>
            Upload
          </button>
  
          <form ref='uploadForm' 
        id='uploadForm' 
        action='/upload' 
        method='post' 
        encType="multipart/form-data">
          <input type="file" name="sampleFile" />
          <input type='submit' value='Upload!' />
      </form>  
  
  
          <div id="db_contents">
              {this.state.success}
  
          </div>
         
              
              </div>
   
  
        );
      }

    }

    export default csvUpload;
