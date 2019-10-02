import React from 'react';
import './Style.sass';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './sign/Layout'

const Auth = (k) =>{
  return <Layout selected={k} />
}


const App = () => {


  const LoginStack = () => {
    return (
        <BrowserRouter>
          <Route exact path="/" component={() => Auth(0)} />
          <Route path="/SignIn" component={() => Auth(0)} />
          <Route path="/SignUp" component={() => Auth(1)} />
        </BrowserRouter>
    )
  }

  const LoggedStack = () => {
    return (
      <BrowserRouter>
          <Route exact path="/" component={() => Auth(1)} />
          <Route path="/SignIn" component={() => Auth(0)} />
          <Route path="/SignUp" component={() => Auth(1)} />
      </BrowserRouter>
    )
  }

  const AuthFlow = () => {

    return LoginStack()

  }


  return AuthFlow()
}

export default App;
