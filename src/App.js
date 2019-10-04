import React, {useState, useEffect} from 'react';
import './Style.sass';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom'
import Sign from './sign/Sign'
import { CookiesProvider } from 'react-cookie'


const App = props => {

  const [logged, setLogged] = useState(null)
  const [path, setPath] = useState("")

  useEffect(()=> {
    //setPath(props.location.pathname)

    setLogged(true)
  })

  const Auth = (s) =>{

    if(s == 0) {
      return <Redirect to="/SignIn" />

    } else {
      return <Sign selected={s} />

    }
  }

  const Home = (s) =>{

    if(s == 0) {
      return <Redirect to="/Home" />

    } else {
      return <Home selected={s} />

    }
  }

  const Location = () => {
    if(path == "SignIn" && logged == true) {
      Home(1)
    } else if(path == "Home" && logged == false) {
      Auth(2)
    }
  }

  const LoginStack = () => {
    return (
        <BrowserRouter>
          <Route exact={true} path="/" component={() => Auth(0)} />
          <Route path="/SignIn" component={() => Auth(1)} />
          <Route path="/SignUp" component={() => Auth(2)} />
        </BrowserRouter>
    )
  }

  const LoggedStack = () => {
    return (
      <BrowserRouter>
          <Route exact={true  } path="/" component={() => Home(0)} />
          <Route path="/Home" component={() => Home(1)} />
          <Route path="/User" component={() => Home(2)} />
      </BrowserRouter>
    )
  }

  const LoadingStack = () => {
    return (
      <BrowserRouter>
          <Route exact path="/" component={() => (
          <div>
            <h1>asdasda</h1>
          </div>
          ) } />
      </BrowserRouter>
    )
  }

  const AuthFlow = props => {

    Location()
    
    if(logged == true ){
      return LoggedStack()

    } else if (logged == false){
      return LoginStack()

    } else {
      return LoadingStack()
    }

  }

  return (
    <CookiesProvider>
      <AuthFlow />
    </CookiesProvider>
  )
}

export default App;
