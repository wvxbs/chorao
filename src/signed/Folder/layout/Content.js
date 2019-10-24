import React from 'react'
import General from './content/General'
import File from './content/File'

const Content = props => {

    var Selector = () => {

        var selected = props.selected

        switch(selected) {
            case 1:
                return <General folder={props.folder} />
            break
            case 2 : 
                return <File folder={props.folder} />
            break
            default:
                return null
            break
        }


    } 

    return (Selector())
}

export default Content