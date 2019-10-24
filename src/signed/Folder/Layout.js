import React from 'react'
import Header from '../../components/Header'
import Content from './layout/Content'

const Layout = props => {

return (
        <div>
            <div>
                <Header 
                    location={props.folder}
                />
            </div>
            <div className="container is-fluid">
                <div>
                    <Content selected={props.selected} folder={props.folder}/>
                </div>
            </div>
        </div>
    )
}

export default Layout