import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "./table.css";
class App extends React.Component {
  state = {
    size: 0,
    List: []
  };

  addData = data => {
    var joined = this.state.List.concat(data);
    console.log("Printing in Add Data!");
    //  console.log("Printing joined - ");
    //  console.log(joined);
    this.setState({ List: joined });
  };
  saveData = data => {
    console.log("Data Saved!");
    // this.setState({ myArray: joined })
    this.addData(data);
    // console.log(this.state.List);
  };
  renderTableData() {
    return this.state.List.map((person, index) => {
      const { Name, Mobile, email } = person; //destructuring
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{Name}</td>
          <td>{Mobile}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }
  render() {
    console.log(this.state.List);
    return (
      <div>
        <h2>Subscription Form</h2>
        <Form saveData={data => this.saveData(data)} />
        <br />
        <h3> Form Responses </h3>
        <table id="form">
          <tbody>
            <tr>
              <th> S.No </th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email ID</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
