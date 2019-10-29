import React, {useState, useEffect} from 'react'
import File from '../../../../../components/File'
import axios from 'axios'
import Req from '../../../../../Req'
import NoFileError from '../../../../../components/NoFilesError'

const Files = props => {

    const [files, setFiles] = useState(undefined)   

    useEffect(() => {
        axios.get(Req.ListAll).then(res => {
            setFiles(JSON.stringify(res.data))
        }).catch(err =>{
            setFiles(undefined)
            console.log(JSON.stringify(err.message))
        })

    }) 

    const RenderFiles =  (arr) => {

        if(files === undefined) {
            return (
                <NoFileError />
            )

        } else {
            const RenderFile = files.map(File => {
                return (
                    <div>
                        <File 
                            id={File.id}
                            desc={File.desc}
                            title={File.name}
                        />
                    </div>
                )
            })

            return RenderFile
        }
    }

    return (
        <div className="folder-container">
            {RenderFiles()}
        </div>
    )
}

export default Files