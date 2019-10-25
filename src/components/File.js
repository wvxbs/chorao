import React from 'react'

const File = props => {


    const HandleEdit = () => {

    }

    const HandleDelete = () => {
        
    }


    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {props.ext}
                </p>
                <a className="card-header-icon has-text-black" aria-label="more options">
                    <span className="icon">
                        <i class="fas fa-cloud-download-alt"></i>
                    </span>
                </a>
                    <a className="card-header-icon has-text-black" aria-label="more options">
                    <span className="icon">
                        <i class="fas fa-pen"></i>
                    </span>
                </a>
                <a className="card-header-icon has-text-black" aria-label="more options">
                    <span className="icon">
                        <i class="far fa-times-circle has-text-danger"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    <h1 className="title">{props.name}</h1>
                </div>
            </div>

        </div>
    )
}

export default File