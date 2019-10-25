import React from 'react';
import './Style.sass';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Sign from './sign/Sign'
import Home from './signed/Home'
import Folder from './signed/Folder';
//import { CookiesProvider } from 'react-cookie'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = ({
      logged : false
    })
  }

  componentWillMount() {

    this.setState({logged : true})

  }

  render() {

    var {logged} = this.state

    const DefaultRoute = props => {

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
          return <Folder selected={id} />
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
            <Sign selected={props.cat} />
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
            Selector(props.cat, props.component)
          )
      } else if (logged === false) {
        return (
          <Redirect to="/SignIn" />
        )      
      } 
  
    }

    return (
      <BrowserRouter>
        <Route 
          exact
          path="/"
          component={() => <DefaultRoute />}
        />
        <Route 
          path="/SignIn" 
          component={() => (
            <NonProtectedRoute  
              cat={1} 
            />
            )
          } 
        />
        <Route 
          path="/SignUp" 
          component={() => (
            <NonProtectedRoute 
              cat={2} 
            />
            )
          }
        />
        <Route 
          path="/Home"
          component={() => (
            <ProtectedRoute 
              cat={1}  
              component={1} 
            />
            )
          }
        />
        <Route 
          path="/Recents"
          component={() => (
            <ProtectedRoute 
              cat={1}  
              component={2} 
            />
            )
          }
        />
      <Route 
          path="/Trash"
          component={() => (
            <ProtectedRoute 
              cat={1}  
              component={3} 
            />
            )
          }
        />
       <Route 
          path="/Details"
          component={() => (
            <ProtectedRoute 
              cat={1}  
              component={2} />
            )
          }
        />
        <Route 
          path="/Folder/:folderName"
          component={() => (
            <ProtectedRoute 
              cat={3}  
              component={1} />
            )
          }
        />
        <Route 
          path="/Folder/:folderName/:fileName"
          component={() => (
            <ProtectedRoute 
              cat={3}  
              component={1} />
            )
          }
        />
      </BrowserRouter>
      )
  }
} 