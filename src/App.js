import React from 'react';
import './Style.sass';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Sign from './sign/Sign'
import Home from './signed/Home'
import { CookiesProvider } from 'react-cookie'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = ({
      logged : false
    })
  }

  componentWillMount() {

    //this.setState({logged : true})

  }

  render() {

    var {logged} = this.state

    const DefaultRoute = () => {

      if(logged === true) {
       return (
          <Redirect to="/Home" />
       )
  
      } else if (logged === false) {
  
        return (
          <Redirect to="/SignIn" />
        )      
      } 
  
    }
  
    const Selector = (cat, id) => {

      switch(cat){
        case 1:
          return <Home selected={id} />
        break
        case 2:
          return <Sign selected={id} />
        break
        case 3:
          return <Sign selected={id} />
        break
        case 4:
          return <Sign selected={id} />
        break
        default :
          return <Sign selected={id} />
        break
      }
    }

    const NonProtectedRoute = props => {
      if(logged === false) { 
        return (
            <Route 
                path={"/" + props.path + ""} 
                component={() => <Sign selected={props.cat} /> }
            />
          )
      } else if (logged === true) {
        return (
          <Redirect to="/Home" />
        )      
      } 
    }

    const ProtectedRoute = props => {
      if(logged === true) { 
        return (
            <Route 
                path={"/" + props.path + ""} 
                component={() => {
                  return (
                    Selector(props.cat, props.component)
                  )
                }
              }
            />
          )
      } else if (logged === false) {
        return (
          <Redirect to="/SignIn" />
        )      
      } 
  
    }

    return (
      <BrowserRouter>
        <NonProtectedRoute path="/SignIn" cat={1} />
        <NonProtectedRoute path="/SignUp" cat={1} />
        <ProtectedRoute path="/Home" cat={1} component={1} /> 
      </BrowserRouter>
      )
  }
} 