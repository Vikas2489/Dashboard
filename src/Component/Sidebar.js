import '../styles/styles.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="w-[260px] h-screen p-1">
        <NavLink
          to="/"
          className="flex font-thin hover:bg-[#E8ECEE] rounded pl-4 py-3  items-center"
          activeClassName={'active'}
          exact
        >
          <img
            className="w-[18px] mr-3"
            src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            alt="home"
          />
          <span>Home</span>
        </NavLink>
        <NavLink
          className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3"
          to="/articles"
          activeClassName="active"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1pRMT8EGWwn5vLi1yKa53zMcUAVpwTmQ4g&usqp=CAU"
            alt="article"
            className="w-[18px] mr-3"
          />
          <span>Articles</span>
        </NavLink>
        <NavLink
          className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3"
          activeClassName="active"
          to="/people"
        >
          <img
            className="w-[18px] mr-3"
            src="https://cdn-icons-png.flaticon.com/512/33/33308.png"
            alt="peopleOfGOT"
          />
          <span>People</span>
        </NavLink>
        <NavLink
          className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3"
          activeClassName="active"
          to="/books"
        >
          <img
            className="w-[18px] mr-3"
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
            alt="books"
          />
          <span>Books</span>
        </NavLink>
        <NavLink
          className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}
          activeClassName="active"
          to="/help_and_support"
        >
          <img
            className="w-[18px] mr-3"
            src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/online_support-512.png"
            alt="help_and_support"
          />
          <span>Help & Support</span>
        </NavLink>
      </ul>
    );
  }
}
