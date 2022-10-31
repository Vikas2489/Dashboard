import React from 'react';
import { books } from '../data';

export default class Books extends React.Component {
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
      return books.filter((book) => {
        if (book.title.toLowerCase().includes(this.state.inputText)) {
          return book;
        }
      });
    } else {
      return books;
    }
  };

  render() {
    let bookArr = this.searchAccordingToUser();
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
          {bookArr.map((book) => {
            return (
              <li key={book.isbn} className="card">
                <div className="flex justify-center mb-[1.2rem]">
                  <img
                    className="border-2 w-[50%] border-solid"
                    src={book.image}
                    alt={book.title}
                  />
                </div>
                <h2 className="text-center font-semiBold">{book.title}</h2>
                <p className="text-center text-xs font-bold my-4">
                  Author: {book.author}
                </p>
                <div className="text-center text-[#313F9E] hover:underline text-[#]">
                  <a
                    className="text-white text-sm bg-[#3B8180] rounded-xl px-6 py-[6px] "
                    href={book.website}
                  >
                    Buy More!
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
