import React, {useState, useEffect} from 'react'
import Content from './layout/Content'
import Header from '../../components/Header'
import Sidebar from './layout/Sidebar'

const Layout = props => {

    return (
        <div>
            <div id="header">
                <Header />
            </div>
            <div id="body" className="container">
                <div class="columns">
                    <div class="column is-one-fifth is-hidden-touch" id="sidebar">
                        <div>
                            <h1 className="title">
                                Ações:
                            </h1>
                        </div>
                        <Sidebar />
                    </div>
                    <div class="column is-auto" id="homeContent">
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