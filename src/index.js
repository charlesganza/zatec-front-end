import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PeoplePage from './pages/PeoplePage';
import SearchResult from './pages/SearchResult';
import CategoriesList from './pages/CategoriesList';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element = {<App />} />
      <Route exact path="/result" element = {<SearchResult />} />
      <Route exact path="/categories" element = {<CategoriesList />} />
      <Route exact path="/people" element = {<PeoplePage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
