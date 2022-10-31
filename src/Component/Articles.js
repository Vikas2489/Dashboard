import React from 'react';
import { NavLink } from 'react-router-dom';

let articlesArr = [
  {
    title: 'How to handle state in React. The missing FAQ.',
    author: 'Osmel Mora',
    slug: 'handle-state-in-react',
  },
  {
    title: 'You might not need React Router',
    author: 'Konstantin Tarkus',
    slug: 'no-need-to-use-react-router',
  },
  {
    title: 'Mixins Considered Harmful',
    author: 'Dan Abramov',
    slug: 'mixins-considered-harmful',
  },
  {
    title: 'React Design Principles',
    author: 'Dan Abramov',
    slug: 'react-design-principles',
  },
  {
    title: "Don't use .bind() when passing props",
    author: 'Dave Ceddia',
    slug: 'don-use-bind-when-passing-props',
  },
];

export default class Articles extends React.Component {
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
      return articlesArr.filter((article) => {
        if (article.title.toLowerCase().includes(this.state.inputText)) {
          return article;
        }
      });
    } else {
      return articlesArr;
    }
  };

  render() {
    let articles = this.searchAccordingToUser();
    return (
      <div className="bg-[#D1EEEE] rounded-l w-screen pl-4 py-4">
        <input
          type="text"
          className="px-4 py-1 rounded border-2 border-solid"
          name={this.state.inputText}
          onChange={this.handleChange}
          placeholder="search"
        />
        <ul>
          {articles.map((article) => {
            return (
              <li key={article.slug} className="my-4">
                <NavLink key={article.title} to={`/articles/${article.slug}`}>
                  <p className="underline text-l">{article.title}</p>
                </NavLink>
                <small className="font-bold">{article.author}</small>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
