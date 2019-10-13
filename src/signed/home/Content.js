import React, {useState} from 'react'
import General from './content/General'

const Content = props => {

    var Selector = () => {

        var selected = props.selected

        switch(selected) {
            case 1:
                return <General />
            break
        }


    } 

    return (
        <div>
            {Selector()}
        </div>
    )
}

export default Content