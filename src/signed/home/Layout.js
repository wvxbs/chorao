import React, {useState, useEffect} from 'react'
import Content from './layout/Content'
import Header from '../../components/Header'
import Sidebar from './layout/Sidebar'

const Layout = props => {

    return (
        <div>
            <div id="header">
                <Header 
                    location="Home"
                />
            </div>
            <div id="body" className="container is-fluid">
                <div className="columns">
                    <div className="column is-one-fifth is-hidden-touch" id="sidebar">
                        <div>
                            <h1 className="title title-mb">
                                Ações:
                            </h1>
                        </div>
                        <Sidebar />
                    </div>
                    <div className="column is-auto" id="homeContent">
                        <Content 
                            selected={props.selected} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout