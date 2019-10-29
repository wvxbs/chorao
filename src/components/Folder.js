import React from 'react'

const Folder = props => {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">
                    {props.title}
                </p>
                <p className="subtitle">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}

export default Folder