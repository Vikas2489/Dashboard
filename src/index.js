import './styles/styles.css';
import ReactDOM from 'react-dom/client';
import { BrowseRouter, BrowserRouter, Route } from 'react-router-dom';
import App from './Component/App';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Home from './Component/Home';
import Help_And_Support from './Component/Help_and_support';
import Articles from './Component/Articles';
import articlesArr from './data';
import SingleArticle from './Component/SingleArticle';
import People from './Component/People';
import Books from './Component/Books';

let rootElm = document.getElementById('root');

ReactDOM.createRoot(rootElm).render(
  <BrowserRouter>
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/help_and_support">
          <Help_And_Support />
        </Route>

        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/articles/:slug" component={SingleArticle} />
        <Route path="/people">
          <People />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </div>
    </div>
  </BrowserRouter>
);
