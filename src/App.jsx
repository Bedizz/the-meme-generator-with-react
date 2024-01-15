import { useState } from 'react'
import './App.css'
import Memebody from "./componenets/memebody"
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="./components/Memebody" />
    </Router>>
  );
}

export default App;
