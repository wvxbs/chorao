    import React from 'react'
import {Link } from 'react-router-dom'

const SignIn = props => {
    return (
        <div className="no-header-margin">
            <h1 className="title">
                Cadastre-se:
            </h1>
            <div className="form-card">
                <div className="form-icon-container">
                    <div>
                        <h1 className="fas fa-address-card form-icon"></h1>
                    </div>
                </div>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input is-rounded" type="email" placeholder="Email" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input is-rounded" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="button is-primary" type="submit" placeholder="Password" />
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SignIn