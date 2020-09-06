import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../images/logo.svg';



export  default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="header">
                <div className='header__logo'>
                <NavLink className='header__logo-link' to='/' exact>
                    <img className='header__logo-img' src={logo} alt='logo' />
                </NavLink>
                </div>
            </header>
        )
    }
}