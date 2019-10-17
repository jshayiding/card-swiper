import React, {Component} from 'react'

export default class CehckInUIN extends Component {
    constructor() {
      super();
      this.state = {       
        uin: '',
        checkIn: 'False',
        Rsvp: 'False'
      };
      this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      var self = this;
      fetch('/getNodeDups').then(function(response) {
      let responseData = response.json();
      for (let eachData in responseData){
          if(responseData[eachData].uin == self.refs.stdID){
              console.log("Data is already present");
              return;
          }
          else{
              this.setState({
                 UIN:uin, 
                 checkInStatus:True, 
                 Rsvp_status:False
              }, ()=>{
                     fetch("/student",{  // rest api for adding new entries
                         method:'POST',                             
                         body: {this.state.UIN,
                                           this.state.checkInStatus,
                                           this.state.Rsvp} 
                     }).then(function(response) {
                           return response.json()
                     }).then(function(body) {
                           console.log(body);
                      })
                })
            }
        }
    })
    // handle change when values is changed
    handlechange = ({target: {value}}) => this.setState(state => value.length <= 9 && !isNaN(Number(value)) && {value} || state)
    render() {
      return (
        <form onSubmit={this.onSubmit}>
          {/* <input type="text" placeholder="enter UIN" ref="uin" value={this.state.value} onChange={this.handlechange}/> */}
          <input placeholder="enter UIN" value={this.state.value} onChange={this.handlechange}/>
          <input type="submit" />
        </form>
      );
    }
  }
}