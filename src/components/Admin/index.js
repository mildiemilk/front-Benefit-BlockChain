import React, { Component } from 'react';
import Nav from './Nav';
import List from './list';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="admin">
        <Nav />
        <List />
      </div>
    )
  }
}

export default Admin;
