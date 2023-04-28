import React, {useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const logoutHandler = event =>{

        event.preventDefault()
        auth.logout()
        navigate('/')

    }
    
    return (
        
        <nav>
            <div class="nav-wrapper grey darken-4" style={{padding: '0 2rem'}}>
                <span class="brand-logo">Расим</span>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/create">Объявления</NavLink></li>
                    <li><NavLink to="/links">Разместить объявление</NavLink></li>
                    <li><a href="#" onClick={logoutHandler}>Выход</a></li>
                </ul>
            </div>
        </nav>


    )

}
