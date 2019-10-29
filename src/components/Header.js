import React from 'react'
import Sidebar from '../signed/home/layout/Sidebar'
import { Link } from 'react-router-dom'

const Header = props => {

    const Location = props.location

    if(Location === "Home"){
        
    }

    const handleCreateFile = () => {

    }


    return (
        <div className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h1 className="title ">
                        <i class="fas fa-sad-cry"></i>
                    </h1>
                </Link>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary">
                            <i class="far fa-file"></i>
                        </a>    
                    </div>
                </div>
                <div className="navbar-end is-hidden-desktop">
                    <Sidebar />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header