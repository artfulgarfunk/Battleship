import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/app';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
const app = document.getElementById('app')

ReactDOM.render(
  <Router>
    <Route path='/' component={App}>
    </Route>
  </Router>,
app);
