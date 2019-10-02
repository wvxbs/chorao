import React from 'react'

const Content = props => {

    const Selector = () =>{
        if(props === 0) {
            return <h1>AOAOAOO</h1>
        } else if (props === 1) {
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