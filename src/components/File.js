import React from 'react'
import axios from 'axios'

const File = props => {

    const handleDownload = () => {
        axios({
            method : "DELETE"
            ur
        })
    }

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    .
                </p>
                <a className="card-header-icon has-text-black" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-cloud-download-alt"></i>
                    </span>
                </a>
                <a className="card-header-icon has-text-black" aria-label="more options">
                    <span className="icon">
                        <i className="far fa-times-circle has-text-danger"></i>
                    </span>
                </a>
            </header>
            <div className="card-content" >
                <div className="content">
                    <h1 className="title card-formatted-text">{props.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default File