import React from 'react'
import Files from './trash/Files'

const General = props => {

        return (
            <div>
                <div>
                    <h1 className="title title-mb">
                        Lixeira:
                    </h1>
                </div>
                <div className="folder-container">
                    <Files />
                </div>
            </div>
        )
}

export default General