import React from 'react'
import axios from 'axios'
import Req from '../Req'

const File = props => {

    const handleDownload = file => {
        axios({
            method: 'get',
            url: Req.ListAll + "?filename=" + file,
            responseType: 'blob'
        }).then((res)=> {
            const url = window.URL.createObjectURL(new Blob([ res.data ]))
            const link = document.createElement('a')
            
            link.href = url
            link.setAttribute('download', file)

            document.body.appendChild(link)

            link.click()
        })
    }
    

    const handleDelete = file => {
        axios({
            method: 'delete',
            url: Req.ListAll + "?filename=" + file
        }).then(()=> {
            window.location.reload();
        }).catch(() => {
            alert('Erro ao excluir arquivo')
        })
    }

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                </p>
                <a className="card-header-icon has-text-black" aria-label="more options" onClick={() => handleDownload(props.name)}>
                    <span className="icon">
                        <i className="fas fa-cloud-download-alt"></i>
                    </span>
                </a>
                <a className="card-header-icon has-text-black" aria-label="more options" onClick={() => handleDelete(props.name)}>
                    <span className="icon">
                        <i className="far fa-times-circle has-text-danger"></i>
                    </span>
                </a>
            </header>
            <div className="card-content" >
                <div className="content">
                    <h1 className="title card-formatted-text">{props.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default File