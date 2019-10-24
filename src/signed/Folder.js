import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Layout from './Folder/Layout'

class Folder extends React.Component {

    state = {
        logged : true,
        folderName : ''
    }

    componentWillMount () {
        const { folderName } = this.props.match.params

        this.setState({folderName})

    }

    
    render() {

    if(this.state.logged === true) {
        return (
            <Layout 
                selected={this.props.selected}
                folder={this.state.folderName}
            />
        ) 
    }
}
}

export default withRouter(Folder)