import React from 'react'

const Folder = props => {
    return (
        <div class="card">
            <div class="card-content">
                <p class="title">
                    {props.title}
                </p>
                <p class="subtitle">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}

export default Folder