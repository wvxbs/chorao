import React from 'react'
import Files from './recents/Files'

const General = props => {

        return (
            <div>
                <div>
                    <h1 className="title title-mb">
                        Recentes:
                    </h1>
                </div>
                <div className="folder-container">
                    <Files />
                </div>
            </div>
        )
}

export default General