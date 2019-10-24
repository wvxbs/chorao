import React, {useEffect, useState} from 'react'
import { Link, Route } from 'react-router-dom'
import Folder from './../../../../components/Folder'

const General = props => {

    const [Items, setItems]= useState([])

    const Folders =  (arr) => {
        const RenderFolder = arr.map(folder => {
            return (
                <div>
                    <Link 
                        to={{
                            pathname :"/Folder/" + folder.name.replace(/\s/g, '')
                        }}
                    >
                        <Folder 
                            id={folder.id}
                            desc={folder.desc}
                            title={folder.name}
                        />
                    </Link>
                </div>
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
                <div className="folder-container" >
                    {Folders([
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
                            name : 'Pasta 2',
                            desc : 'Fotos e Videos'
                        },
                        {
                            id : 1,
                            user : 'wvxbs',
                            name : 'Pasta 1',
                            desc : 'Misc'
                        },
                        {
                            id : 2,
                            user : 'wvxbs',
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