import React from 'react'

const Button = props => {
    return (
        <button class="button is-medium is-white">
            <i className={props.img}> </i>
            <b>{ props.text}</b>
        </button>
    )
}

export default Button