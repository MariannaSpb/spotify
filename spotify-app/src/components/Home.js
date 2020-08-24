import React from 'react';
import AuthController from '../controllers/AuthController';
import { Redirect } from "react-router-dom";
import ArtistList from './ArtistList';
import TrackList from './TrackList';
import SearchForm from './SearchForm';
import PlayListCollection from './PlayListCollection';


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
];

const trackArray = [
    {
        name: 'Moon river',
        spotifyLink: 'https://open.spotify.com/track/4hZ5hltXes2wInBl7EGpCP?si=85ZGstoeQuGtYfrVmmZ3CA',
        duration: 120,
        popularity : 123,
        albumName: 'name album',
        albumSpotifyLink: 'https://open.spotify.com/album/0iqqnLXoocsMeCYlTw3Q2q?si=AeO0OgrTQ9KGy50KdxmrLw',
        artistName: 'Andy Williams',
        artistSpotifyLink: 'https://open.spotify.com/artist/4sj6D0zlMOl25nprDJBiU9'
    },
    {
        name: 'Moon river',
        spotifyLink: 'https://open.spotify.com/track/4hZ5hltXes2wInBl7EGpCP?si=85ZGstoeQuGtYfrVmmZ3CA',
        duration: 120,
        popularity : 123,
        albumName: 'name album',
        albumSpotifyLink: 'https://open.spotify.com/album/0iqqnLXoocsMeCYlTw3Q2q?si=AeO0OgrTQ9KGy50KdxmrLw',
        artistName: 'Andy Williams',
        artistSpotifyLink: 'https://open.spotify.com/artist/4sj6D0zlMOl25nprDJBiU9'
    },
];
 const playlistArray = [
    {
    name: 'name',
    link: 'link',
    image: 'img',
    totalTracks: 12,
    ownerName: 'owner name'
    },
    {
    name: 'name',
    link: 'link',
    image: 'img',
    totalTracks: 12,
    ownerName: 'owner name'
    }
 ]


export default class Home extends React.Component  {
    constructor() {
        super();
        this.state = {
            //isAuthenticatedWithSpotify: localStorage.getItem('isAuthenticatedWithSpotify'),
            accessToken: localStorage.getItem('accessToken'),
            isAuthenticatedWithSpotify: true
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
        console.log('props', this.props) //token
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
              <TrackList trackArray={trackArray} />
              <PlayListCollection playlistArray={playlistArray} />
            </section>

        )
    }
}
