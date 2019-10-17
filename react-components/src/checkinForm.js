// manual check in component

import React from 'react';

export class checkinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        UIN: '',
        checkin_status: false
    };
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/students');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  onSubmit(e) {
    e.preventDefault();
    const response = await fetch('/people', {
      body: JSON.stringify(this.state),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    }
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        alert('match found');
      } else {
        alert('not found');
      }
    });
  }
  render() {
    return (
      <form onSubmit={this.checkinForm.bind()}>
        <input type="text" name="UIN" onChange={e => this.setState({UIN: e.target.value})}/>
        <input type="text" name="checkin" onChange={e => this.setState({checkin: e.target.value})}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default checkinForm;