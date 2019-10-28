import React from 'react'
import File from '../../../../components/File'
import {Link} from 'react-router-dom'
import FileDetails from '../../../../components/FileDetails'

const General = props => {

    const RenderFiles = () => {

        let arr = [ 
            {
                id : 1,
                user : 'wvxbs',
                name : 'Bolas',
                ext : '.png'
            },
            {
                id : 2,
                user : 'wvxbs',
                name : 'maia',
                ext : '.exe'
            },
            {
                id : 3,
                user : 'wvxbs',
                name : 'Macarrão',
                ext : '.gif'
            },

        ]


        const files = arr.map(file => {
            return (
                <File 
                    name={file.name}
                    ext={file.ext}
                />
            )
        })

        return files
    }

        return (
            <div>
                <div>
                    <h1 className="title title-mb">
                        {props.folder}:
                    </h1>
                </div>
                <div className="folder-container">
                    {RenderFiles()}
                </div>
            </div>
        )
}

export default General