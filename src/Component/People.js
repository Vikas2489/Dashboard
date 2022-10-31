import React from 'react';
import { peopleOfGOT } from '../data';

let allPeople = peopleOfGOT.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

console.log(allPeople);

export default class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      inputText: target.value,
    });
  };

  searchAccordingToUser = () => {
    if (this.state.inputText) {
      return allPeople.filter((people) => {
        if (people.name.toLowerCase().includes(this.state.inputText)) {
          return people;
        }
      });
    } else {
      return allPeople;
    }
  };

  render() {
    let peopleArr = this.searchAccordingToUser();
    return (
      <div className="bg-[#D1EEEE] rounded-l w-screen pl-4 py-4">
        <input
          type="text"
          className="px-4 py-1 rounded border-2 border-solid"
          name={this.state.inputText}
          onChange={this.handleChange}
          placeholder="search"
        />
        <ul className="people">
          {peopleArr.map((people, i) => {
            return (
              <li key={i} className="card">
                <div className="info">
                  <img
                    className="rounded-full border-2 border-solid mr-3"
                    src={people.image}
                    alt={people.name}
                  />
                  <h2>{people.name}</h2>
                </div>
                <p className="text-center my-5">{people.description}</p>
                <div className="text-center text-[#313F9E] hover:underline text-[#]">
                  <a href={people.wikiLink}>Learn More!</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
