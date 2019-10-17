import React, { Component } from 'react';

//Source: npm express-fileupload



//Next step: Parse csv content to JSON, use upload API call

class FileUpload extends Component {

    state = { success: 'Data recieved will be displayed here' };


    mountComponent() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ success: "true"}))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/csvUpload');
        
        console.log(response);
        
        const body = await response.json();
        console.log(body);

        
        if (response.status !== 200) {
            throw Error(body.message) 
          }
      
        return body;
    }

    handleClick = () => {
        this.setState({success: 'true'});
      };
    
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
  
  
  export default FileUpload;
