import React, {useState} from 'react'
import General from './content/General'
import Recents from './content/Recents'
import Trash from './content/Trash'

const Content = props => {

    var Selector = () => {

        var selected = props.selected

        switch(selected) {
            case 1:
                return <General />
            break
            case 2:
                return <Recents />
            break
            case 3:
                return <Trash />
            break
            default:
                return null
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