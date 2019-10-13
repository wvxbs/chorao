import React from 'react'
import Layout from './home/Layout'

const Home = props => {

    return (
        <div>
            <Layout selected={props.selected} />
        </div>
    )
}

export default Home