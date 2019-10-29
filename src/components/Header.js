import React from 'react'
import Sidebar from '../signed/home/layout/Sidebar'
import { Link } from 'react-router-dom'
import CreateFile from '../signed/CreateFile'

const Header = props => {

    const handleCreateFile = () => {

        alert("asdasd")

        return (
            <CreateFile 
                active="is-active"
            />
        )
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
                        <Link to="CreateFile">
                            <button className="button is-primary">
                                <i class="far fa-file"></i>
                            </button>    
                        </Link>
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