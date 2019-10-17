import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ReactFileReader from 'react-file-reader';
import './style.css';

export default class FileUpload extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  // how to post those to database

  state = {
    fileUpload_status: 'false',
    isAvailable: false,
  }

  handleFiles = files => {
    var reader = new FileReader();
    const t_his = this;
    reader.onload = function (e) {
      // Use reader.result
      var csv = reader.result;
      var lines = csv.split(/\r\n|\n/);
      var result = [];
      var headers = lines[0].split(",");
      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        const removeQuotesFromLine = lines[i].replace(/['"]+/g, '');
        var currentline = removeQuotesFromLine.split(",");
        for (var j = 0; j < headers.length; j++) {
          const removeQuotesFromHeaders = headers[j].replace(/['"]+/g, '');
          obj[removeQuotesFromHeaders] = currentline[j];
        }
        delete obj['Timestamp'];
        result.push(obj);
      }

      t_his.setState({
        data: JSON.stringify(result, null, 4),
        isAvailable: true
      })
    }
    reader.readAsText(files[0]);
    // format json as standard json object
  }
  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        {this.state.isAvailable &&

          <pre>{this.state.data}</pre>

        }
      </div>
    );
  }
}