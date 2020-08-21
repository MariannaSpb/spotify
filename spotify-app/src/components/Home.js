import React from 'react';
import AuthController from '../controllers/AuthController';
import { Redirect } from "react-router-dom";
import ArtistList from './ArtistList';
import SearchForm from './SearchForm';


//mockData
const artistArray = [
    {
        name: 'Muse',
        spotifyLink: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
        genres: ["modern rock", "permanent wave", "rock"],
        image : ['https://i.pinimg.com/564x/d6/d6/5a/d6d65ae9a1afb39b58b2fa3463c68e99.jpg'],
        id: 1
    },
    {
        name: 'Muse-2',
        spotifyLink: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
        genres: ["modern rock", "permanent wave"],
        image : ['https://i.pinimg.com/564x/d6/d6/5a/d6d65ae9a1afb39b58b2fa3463c68e99.jpg'],
        id: 2
    },
    {
        name: 'Muse-2',
        spotifyLink: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
        genres: ["modern rock", "permanent wave"],
        image : ['https://i.pinimg.com/564x/d6/d6/5a/d6d65ae9a1afb39b58b2fa3463c68e99.jpg'],
        id: 3
    },
    {
        name: 'Muse-2',
        spotifyLink: 'https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI',
        genres: ["modern rock", "permanent wave"],
        image : ['https://i.pinimg.com/564x/d6/d6/5a/d6d65ae9a1afb39b58b2fa3463c68e99.jpg'],
        id: 4
    }
]


export default class Home extends React.Component  {
    constructor() {
        super();
        this.state = {
            isAuthenticatedWithSpotify: true,
            accessToken: localStorage.getItem('accessToken')
          }
    }

    getDataFromStorage = () => { 
        console.log('ls', localStorage.getItem('accessToken'))
    }

    componentDidMount() {
        this.getDataFromStorage()
    }

  logOutBack = () => { 
    localStorage.setItem('accessToken', '');
      this.setState({isAuthenticatedWithSpotify: false, accessToken:''})
      console.log('state', this.state)
  }

    render() {
        const { isAuthenticatedWithSpotify  } = this.state;
        if(!isAuthenticatedWithSpotify) {
            return(
                <Redirect to='/' />
            )
            
        } else 
        return (
            <section className='homepage'>
            <p>you are logged in  Spotify <button onClick={this.logOutBack}>LOG OUT</button></p>
            {/* <NavLink className="homepage__link-back" to='/home'>Go to your page </NavLink> */}
              <SearchForm accessToken = {this.props.accessToken}/>
              <ArtistList artistArray={artistArray} />
            </section>

        )
    }
}
