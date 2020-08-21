import React from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../images/logo.svg';
import SearchForm from "./SearchForm";
import SpotifyAu from "../controllers/AuthController";


export  default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log('token', this.props.accessToken)
        return (
            <header className="header">
                <div className='header__logo'>
                <NavLink className='header__logo-link' to='/home' exact>
                    <img className='header__logo-img' src={logo} alt='logo' />
                </NavLink>
                </div>
                <NavLink className="header_button" to='/home'>Go to your page </NavLink>
                {/* <SearchForm accessToken = {this.props.accessToken}/> */}

            </header>
        )
    }
}