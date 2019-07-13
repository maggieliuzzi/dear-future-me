import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LetterForm from './LetterForm';
import ConfirmationPage from './ConfirmationPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/confirmation" component={ConfirmationPage} />
        <Route path="/create-letter" component={LetterForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
