import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import File from './../../../../components/File'
import Req from '../../../../Req'
import NoFileError from '../../../../components/NoFilesError'

class General extends React.Component {
    state ={
        files : [],
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
                files : [],
                ready : true
            })
        })

        console.log(this.state.files)

    } 

    
    RenderFiles = () => {

        if(this.state.ready) {

            if(this.state.files.length === 0) {
                return (
                    <NoFileError />
                )

            } else if(this.state.files.length > 0) {
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