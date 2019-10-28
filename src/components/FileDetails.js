import React from 'react'
import { withRouter, Link} from 'react-router-dom'

class FileDetails extends React.Component {

    state = {
        logged : true,
        fileName : ''
    }

    componentWillMount () {
        const { fileName } = this.props.match.params

        this.setState({fileName})

    }  

    render () {

        return(
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <p>
                        {this.state.fileName}
                    </p>
                    <p className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                    </p>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
}

export default withRouter(FileDetails)