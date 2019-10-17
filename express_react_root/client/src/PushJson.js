import React, {Component} from 'react'

// 
var ajaxResponse = [
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
];

// 

export default class PushJson extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      isLoaded: false,
    }
  };
  // fetch REST API
  componentDidMount() {
      fetch("/students")
      .then(res => res.json())
      .then(json => {
          this.setState({data: json, isLoaded:true});
      });
  }
  // push nested json on the browser
  componentDidMount() {
    setTimeout(() => {
      ajaxResponse = this.state.data.map(student => {
        student["collapse"] = false;
        return student;
      });
      this.setState({ data: ajaxResponse, isLoaded: true });
    }, 1000);
  }

  doCollapse = i => {
    let students = this.state.data;
    students[i].collapse = !students[i].collapse;
    this.setState({ data: students });
  };

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
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
            <h3>
              {uin}{" "}
              <button onClick={() => this.doCollapse(i)}>
                {student.collapse ? "-" : "+"}
              </button>
            </h3>
            {student.collapse ? <div>{studentInfo}</div> : <div />}
          </div>
        );
      });
      return <div>{studenDetails}</div>;
    }
  }
}