import React, {useEffect, useState} from 'react'
import { Link, Route } from 'react-router-dom'
import Folder from './general/Folder'

const General = props => {

    const [Items, setItems]= useState([])

    useEffect(() => {


        
    })

    const Folders =  (arr) => {
        const RenderFolder = arr.map(folder => {
            return (
                <Link to={"/Folder/" + folder.user.replace(/\s/g, '') + "/" + folder.name.replace(/\s/g, '') + ""}>
                    <Folder 
                        id={folder.id}
                        desc={folder.desc}
                        name={folder.name}
                    />
                </Link>
            )
        })

        return RenderFolder
    }

    return(
        <div>
            <div>
                <h1 className="title title-mb">
                    Visão Geral:
                </h1>
            </div>
            <div>
                <div className="folders-container" >
                    {Folders([
            {
                id : 1,
                user : 'wvxbs',
                name : 'Pasta 1',
                desc : 'Misc'
            },
            {
                id : 2,
                user : 'Maia',
                name : 'Pasta 2',
                desc : 'Fotos e Videos'
            },
        ])}
                </div>
            </div>
        </div>
    )
}

export default General