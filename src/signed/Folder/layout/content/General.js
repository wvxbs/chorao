import React from 'react'
import File from '../../../../components/File'
import {Link} from 'react-router-dom'

const General = props => {

    const RenderFolders = () => {

        let arr = [ 
            {
                id : 1,
                user : 'wvxbs',
                name : 'Bolas',
                ext : '.png',
                desc : 'Misc'
            },
            {
                id : 2,
                user : 'wvxbs',
                name : 'maia',
                ext : '.exe',
                desc : 'Fotos e Videos'
            },
            {
                id : 3,
                user : 'wvxbs',
                name : 'Macarrao',
                ext : '.gif',
                desc : 'Fotos e Videos'
            },

        ]


        const files = arr.map(file => {
            return (
                <Link to={"/Folder/" + props.folder + "/" + file.name +""} >
                    <File 
                        name={file.name}
                        ext={file.ext}
                    />
                </Link>
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
                {RenderFolders()}
            </div>
        </div>
    )
}

export default General