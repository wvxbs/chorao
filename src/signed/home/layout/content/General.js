import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import File from './../../../../components/File'
import Req from '../../../../Req'
import NoFileError from '../../../../components/NoFilesError'

const General = props => {

    const [files, setFiles] = useState(undefined)

    useEffect(() => {
        axios.get(Req.ListAll).then(res => {
            setFiles(JSON.stringify(res.data))
        }).catch(err =>{
            setFiles(undefined)
            console.log(JSON.stringify(err.message))
        })

    }) 

    const Files =  (arr) => {

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

    return(
        <div>
            <div>
                <h1 className="title title-mb">
                    Visão Geral:
                </h1>
            </div>
            <div>
                <div className="File-container" >
                    {Files()}
                </div>
            </div>
        </div>
    )
}

export default General