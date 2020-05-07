import React from "react";
import { render } from "react-dom";
export default class Form extends React.Component {
  state = {
    Name: "Kamesh",
    Mobile: "7395948407",
    email: "Kamesh3799@gmail.com"
  };
  change = e => {
    this.setState({
      [e.target.parameter]: e.target.value
    });
  };
  OnSubmit = e => {
    e.preventDefault();
    var emailerr = false;
    var phoneerr = true;
    if (!this.state.email.includes("@") || !this.state.email.includes("."))
      emailerr = true;
    if (this.state.Mobile.length === 10) {
      phoneerr = false;
    }
    if (phoneerr) {
      this.setState({
        Name: this.state.Name,
        Mobile: "",
        email: this.state.email
      });
    }
    if (emailerr) {
      this.setState({
        Name: this.state.Name,
        Mobile: this.state.Mobile,
        email: ""
      });
    }
    if (phoneerr && emailerr) {
      this.setState({
        Name: this.state.Name,
        Mobile: "",
        email: ""
      });
    }
    if (!phoneerr && !emailerr) {
      this.props.saveData(this.state);
      //console.log(this.state);
      // Validation of the form
      this.setState({
        Name: "",
        Mobile: "",
        email: ""
      });
    }
  };
  render() {
    return (
      <form>
        <input
          parameter="Name"
          placeholder="Name"
          value={this.state.Name}
          onChange={e => this.setState({ Name: e.target.value })}
        />
        <input
          parameter="Mobile"
          placeholder="Mobile Number"
          value={this.state.Mobile}
          onChange={e => this.setState({ Mobile: e.target.value })}
        />
        <input
          parameter="email"
          placeholder="Email ID"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
        <button onClick={e => this.OnSubmit(e)}> Submit </button>
      </form>
    );
  }
}
