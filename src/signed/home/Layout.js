import React, {useState, useEffect} from 'react'
import Content from './Content'

const Layout = props => {

    return (
        <div>
            <div id="body" className="container">
                <Content 
                    selected={props.selected} 
                />
            </div>
        </div>
    )
}

export default Layout