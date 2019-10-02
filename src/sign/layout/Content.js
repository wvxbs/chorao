import React, {useState} from 'react'

const Content = props => {

    const Selector = () =>{

        const selected = props.selected

        if(selected === 0) {
            return <h1>AOAOAOO</h1>
        } else if (selected === 1) {
            return <h1>AAIJAIAI</h1>
        } else {
            return <h1>erererer</h1>
        }
    }

    return (
        <div>
            {Selector()}
        </div>
    )
}

export default Content