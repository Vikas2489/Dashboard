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
        <NavLink to="/" activeClassName="active" exact>
          <li className="flex font-thin hover:bg-[#E8ECEE] rounded pl-4 py-3  items-center">
            <img
              className="w-[18px] mr-3"
              src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
              alt="home"
            />
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink to="/articles" activeClassName="active">
          <li className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1pRMT8EGWwn5vLi1yKa53zMcUAVpwTmQ4g&usqp=CAU"
              alt="article"
              className="w-[18px] mr-3"
            />
            <span>Articles</span>
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/people">
          <li className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3">
            <img
              className="w-[18px] mr-3"
              src="https://cdn-icons-png.flaticon.com/512/33/33308.png"
              alt="peopleOfGOT"
            />
            <span>People</span>
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/books">
          <li className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3">
            <img
              className="w-[18px] mr-3"
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="books"
            />
            <span>Books</span>
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/help_and_support">
          <li
            className="flex font-thin items-center hover:bg-[#E8ECEE] rounded pl-4 py-3"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px' }}
          >
            <img
              className="w-[18px] mr-3"
              src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/online_support-512.png"
              alt="help_and_support"
            />
            <span>Help & Support</span>
          </li>
        </NavLink>
      </ul>
    );
  }
}
