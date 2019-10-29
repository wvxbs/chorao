import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import File from './../../../../components/File'
import Req from '../../../../Req'
import NoFileError from '../../../../components/NoFilesError'

class General extends React.Component {
    state ={
        files : undefined,
        ready : false
    }

    componentDidMount () {
        axios.get(Req.ListAll).then(res => {
            this.setState({
                files : res.data,
                ready : true
            })
        }).catch(err =>{
            alert(err.message)  
            this.setState({
                files : undefined,
                ready : true
            })
        })

        console.log(this.state.files)

    } 

    
    RenderFiles = () => {

        if(this.state.ready) {

            if(this.state.files === undefined) {
                return (
                    <NoFileError />
                )

            } else {
                return this.state.files.map(e => {
                    return (
                        <File 
                            key={e}
                            name={e}
                        />
                    )
                })
            }
        } else if(!this.state.ready) {
            return (
                <div><h1>...</h1></div>
            )
        }
    }

    render () {

        const {files, ready} = this.state

        return (
            <div>
                <div>
                    <h1 className="title title-mb">
                        Visão Geral:
                    </h1>
                </div>
                <div>
                    <div className="folder-container" >
                        {this.RenderFiles()}
                    </div>
                </div>
            </div>
        )
    }


}

export default General