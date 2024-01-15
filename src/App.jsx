import { useState } from 'react'
import './App.css'
import Memebody from "./componenets/memebody"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import memebody from './components/memebody';

function App() {
  return (
    <Router>
      <Route path="./components/Memebody" component={Memebody}/>
    </Router>
  );
}

export default App;
