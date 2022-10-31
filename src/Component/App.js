import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Sidebar />
        <Home />
      </>
    );
  }
}
