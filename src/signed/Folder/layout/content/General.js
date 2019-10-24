import React from 'react'
import File from '../../../../components/File'

const General = props => {

    const RenderFolders = () => {

        let arr = [ 
            {
                id : 1,
                user : 'wvxbs',
                name : 'AOSIDHAIUSHFDAUUSHDIUAHDIUASHDIUAHSIUDHAS   ',
                desc : 'Misc'
            },
            {
                id : 2,
                user : 'wvxbs',
                name : 'maia.exe',
                desc : 'Fotos e Videos'
            },
        ]

        const files = arr.map(file => {
            return (
                <File 
                    name={file.name}
                />
            )
        })

        return files
    }

    return (
        <div>
            <div>
                <h1 className="title">
                    {props.folder}
                </h1>
            </div>
            <div className="folder-container">
                {RenderFolders()}
            </div>
        </div>
    )
}

export default General