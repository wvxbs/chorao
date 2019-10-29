import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Req from '../Req'
import { Redirect } from 'react-router-dom'

const CreateFile = props => {

    const [active, setActive] = useState("")
    const [fileName, setFileName] = useState("")
    const [file, setFile] = useState("")
    const [button, setButton] = useState("")

    useEffect(() => {
        setActive(props.active)
    })

    const ConfirmUpload = (oFile) => {

        setButton("is-loading")

        console.log("start")

        console.log(oFile)

        var fd = new FormData();

        fd.append('data', oFile); 

        console.log(fd)

        axios.post(Req.CreateFile, fd)
        .then(res => {
            alert("Arquivo enviado com sucesso!")
            console.log("end")
            setButton("")
        })
        .catch(err => {
            alert(err.message)
            console.log("end")
            setButton("")
        })
    }

    const FileUploader = file => {
        setFileName(file.name)
        setFile(file)

    }
    
    const FileUpload = props => {
        return (
            <div className="field">
                <div className="file is-large is-boxed has-name">
                    <label className="file-label">
                        <input 
                            className="file-input" 
                            type="file" 
                            accept=""
                            onChange={e => FileUploader(e.target.files[0])}
                        />
                        <span className="file-cta">
                            <span className="file-icon">
                            <i className="fas fa-upload"></i>
                            </span>
                        </span>
                    </label>
                </div>
            </div>
        )
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title has-text-black"><b>Enviar Arquivo</b></p>
                    <Link to="/">
                        <button className="delete" aria-la  bel="close" />
                    </Link>
                </header>
                <section className="modal-card-body">
                    <div className="columns">
                        <div className="column">
                            <FileUpload 
                            
                            />
                        </div>
                        <div className="column">
                            <h1 className="title is-4">
                                {fileName}
                            </h1>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button 
                        className={"button is-primary" + " " + button}
                        onClick={() => ConfirmUpload(file)}
                    >
                        Enviar
                    </button>
                    <Link to="/">
                        <button className="button is-white">
                            <b>
                                Cancelar
                            </b>
                        </button>
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default CreateFile