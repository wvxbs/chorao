import React from 'react'
import Header from './layout//Header'
import Content from './layout/Content'

const Layout = props => {

    return (
        <div>
            <div id="header">
                <Header />
            </div>
            <div id="body" className="container">
                <Content selected={props.selected} />
            </div>
        </div>
    )
}

export default Layout