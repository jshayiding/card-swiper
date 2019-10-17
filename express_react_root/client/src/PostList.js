import React, { Component } from 'react';
import logo from './logo.svg';




class PostList extends Component {

  
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


  
render() {
    
    return (
        <div> 
          
            <div>
            <div>{this.state.data.uin}</div>
          </div>
        </div>
    );
  }


}


export default PostList;