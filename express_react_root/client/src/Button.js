import React, { Component } from 'react';


/*
class Button extends React.Component {
    state = { counter: 1 };
    
    handleClick = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1 
      }));
    };
    
    render() {
      return (
        
       
        <button onClick={this.handleClick}>
          {this.state.counter}
        </button>
 

      );
    }
  }

  export default Button;
  */

  /*
 state = {
    data: []
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
  this.callBackendAPI()
    .then(res => this.setState({ data: res[2]}))
    .catch(err => console.log(err));
}
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
callBackendAPI = async () => {
  const response = await fetch('/students');
  const body = await response.json();
  console.log(body);

  if (response.status !== 200) {
    throw Error(body.message) 
  }

  return body;
};
*/

 class Button extends React.Component {
    state = { success: 'Data recieved will be displayed here' };


    mountComponent() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ success: res[2].uin}))
        .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/students');
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

        <div id="db_contents">
            {this.state.success}

        </div>
       
            
            </div>
 

      );
    }
  }

  export default Button;