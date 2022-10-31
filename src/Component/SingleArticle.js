import React from 'react';
import { NavLink } from 'react-router-dom';

export default class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {}
  }
  render() {
    return (
      <div className="bg-[#D1EEEE] rounded-l w-screen pl-4 py-4">
        <NavLink to="/articles">
          <p className="underline mb-4 "> 👈 Go back to articles</p>
        </NavLink>
        <h3>The slug of the article ::: {this.props.match.params.slug}</h3>
      </div>
    );
  }
}
