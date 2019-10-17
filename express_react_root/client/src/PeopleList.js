// PeopleList component for rendering json list on the server

import React, {Component} from 'react';

// const Student = (props) => (
// 	<ul>
//     {Object.keys(props.student).map(key =>
//       <li key={key}>
//         {key}: {props.student[key]}
//       </li>
//     )}
// 	</ul>
// )

export default class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          uin: "668913328",
          studentInfo: {
            firstName: "JURAT",
            middleName: "",
            lastName: "SHAYIDING",
            rsvpStatus: "false",
            checkin: "true"
          }
        },
        {
          uin: "670168300",
          studentInfo: {
            firstName: "Jonathan",
            middleName: "Samson",
            lastName: "Rowe",
            rsvpStatus: "true",
            checkin: "true"
          }
        },
        {
          uin: "670168228",
          studentInfo: {
            firstName: "Christian",
            middleName: "Aspilla",
            lastName: "Cardenas",
            rsvpStatus: "false",
            checkin: "false"
          }
        },
        {
          uin: "123123",
          studentInfo: {
            firstName: "Phil",
            middleName: "",
            lastName: "Beltran",
            rsvpStatus: "Yes"
          }
        },
        {
          uin: "123123",
          studentInfo: {
            firstName: "Phil",
            middleName: "",
            lastName: "Beltran",
            rsvpStatus: "Yes"
          }
        },
        {
          uin: "123123",
          studentInfo: {
            firstName: "Phil",
            middleName: "",
            lastName: "Beltran",
            rsvpStatus: "Yes"
          }
        }
      ]
    };
  }
  //   state= {
  //     data:[]
  //   };  
    
  //   componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res[2]}))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/students');
  //   const body = await response.json();
  //   console.log(body);
  
  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };
  // render() { 
  //   let myRenderedData = this.state.data.map((x, index) => {
  //     return <p key={index}>{x.uin}</p>
  //   })
  //   return (<div>{myRenderedData}</div>)
  // }
  render() {
    let studenDetails = this.state.data.map((student, i) => {
      let uin = student.uin;
      let studentInfo = Object.keys(student.studentInfo).map((label, i) => {
        return (
          <div key={i}>
            <span>
              <strong>{label}: </strong>
              {`${student.studentInfo[label]}`}
            </span>
          </div>
        );
      });

      return (
        <div key={i}>
          <h3>{uin}</h3>
          <p>{studentInfo}</p>
        </div>
      );
    });
    return <div>{studenDetails}</div>;
  }
}
