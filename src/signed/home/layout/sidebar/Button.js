import React from 'react'

const Button = props => {
    return (
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child notification is-light is-hoverable">
                    <p className="title is-5">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Button