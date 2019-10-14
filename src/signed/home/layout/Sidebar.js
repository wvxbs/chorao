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
                img : '',
                to : '/Home',
                selected : false
            },
            {
                text : "Recentes",
                img : '',
                to : "/Recents",
                selected : false
            },
            {
                text : "Lixeira",
                img : '',
                to : "/Trash",
                selected : false
            }
        ]

        const render = buttons.map(button => (
            <NavButton
                text={button.text}
                img={button.img}
                to={button.to}
                selected={button.selected}
            />
        ))

        return render
    }

    return (
        <div>
            <div>
                <div id="buttons">
                    <Buttons />
                </div>
            </div>
        </div>
    )

}

export default Sidebar