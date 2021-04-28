import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('https://mern-family-todo.herokuapp.com/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <div>
          <h3>Add a New Member</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Member Name: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  />
            </div>
            <div className="form-group">
              <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
          </form>
        </div>
        <div>
          <h3>Avialable Members</h3>
          <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Member Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}