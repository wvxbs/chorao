import React from 'react';
import logo from './logo.svg';
import './Style.sass';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './sign/Layout'

const AuthFlow = () => {
  
}


const App = () => {
  return (
    <BrowserRouter>
      <Route  exact path="/" component={Layout} />
    </BrowserRouter>
  )
}

export default App;
