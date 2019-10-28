import React from 'react'
import File from '../../../../../components/File'

const Files = props => {

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
        <div className="folder-container">
            {RenderFiles()}
        </div>
    )
}

export default Files