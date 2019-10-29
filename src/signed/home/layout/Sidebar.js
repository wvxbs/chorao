import React from 'react'
import Button from './sidebar/Button'
import { Link } from 'react-router-dom'

const Sidebar = props => {

    const NavButton = props => {
        return (
            <div>
                <Link to="/Home">
                    <Button 
                        img="fas fa-home"
                        text="Geral"
                        selected={props.selected}
                    />
                </Link>
                <Button 
                    img="fas fa-history"
                    text="Recentes"
                    selected={props.selected}
                />
                <Button 
                    img="fas fa-trash-alt"
                    text="Lixeira"
                    selected={props.selected}
                />
            </div>
        )
    }

    const Buttons = props => {

        let buttons = [
            {
                text : "Geral",
                img : 'fas fa-home',
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
                    <NavButton />
                </ul>
            </div>
        </div>
    )

}

export default Sidebar