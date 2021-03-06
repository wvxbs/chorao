import React from 'react'

const Button = props => {

    const spacer = " " + props.text

    return (
        <button className="button is-medium is-white">
            <b>
                <p className={props.img}> </p>
                {spacer}
            </b>
        </button>
    )
}

export default Button