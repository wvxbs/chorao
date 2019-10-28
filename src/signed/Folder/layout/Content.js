import React from 'react'
import General from './content/General'
import FileDetails from '../../../components/FileDetails'

const Content = props => {

    var Selector = () => {

        var selected = props.selected

        switch(selected) {
            case 1:
                return <General folder={props.folder} />
            break
            default :
                return null
            break
        }


    } 

    return (Selector())
}

export default Content