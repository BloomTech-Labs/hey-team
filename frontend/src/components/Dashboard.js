import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));
    const id = params.get('doc_id');
    localStorage.setItem('doc_id', id);
  }

  render() {
    return <div>this is the side bar menu</div>;
  }
}

export default Dashboard;
