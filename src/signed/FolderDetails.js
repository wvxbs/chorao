import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

const FolderDetails = props => {

    const [logged, setLogged] = useState(true)


    if(logged === true) {
        return (
            <div>
                <h1 className="title">
                    {props.selected}
                </h1>
            </div>
        )
    } 

    else 

    if(logged === false) {
        return <Redirect to="/" />
    }
}

export default FolderDetails