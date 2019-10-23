import React from 'react'
import Button from './sidebar/Button'
import { Link } from 'react-router-dom'

const Sidebar = props => {

    const NavButton = props => {
        return (
            <Link to={props.to}>
                <Button 
                    img={props.img}
                    text={props.text}
                    selected={props.selected}
                />
            </Link>
        )
    }

    const Buttons = props => {

        let buttons = [
            {
                text : "Geral",
                img : 'fas fa-trash',
                to : '/Home',
                selected : false
            },
            {
                text : "Recentes",
                img : 'fas fa-history',
                to : "/Recents",
                selected : false
            },
            {
                text : "Lixeira",
                img : 'fas fa-trash-alt',
                to : "/Trash",
                selected : false
            }
        ]

        const render = buttons.map(button => (
            <li>
            <NavButton
                text={button.text}
                img={button.img}
                to={button.to}
                selected={button.selected}
            />
            </li>
        ))

        return render
    }

    return (
        <div>
            <div>
                <ul id="buttonsList">
                    <Buttons />
                </ul>
            </div>
        </div>
    )

}

export default Sidebar