import React, {useState} from 'react'
import SignIn from './content/SignIn'
import SignUp from './content/SignUp'

const Content = props => {

    const Selector = () =>{

        const selected = props.selected

        if(selected === 1) {
            return <SignIn />
        } else if (selected === 2) {
            return <SignUp />
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