import React from 'react';
import AuthController from '../controllers/AuthController';
import { Redirect } from "react-router-dom";
import ArtistList from './ArtistList';
import TrackList from './TrackList';
import SearchForm from './SearchForm';
import PlayListCollection from './PlayListCollection';
import {connect} from 'react-redux';


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
    name: 'playlist1',
    link: 'link',
    image: 'img',
    totalTracks: 12,
    ownerName: 'owner name'
    },
    {
    name: 'playlist1',
    link: 'link',
    image: 'img',
    totalTracks: 12,
    ownerName: 'owner name'
    }
 ]


const Home = class extends React.Component  {
    constructor() {
        super();
    }

    getDataFromStorage = () => { 
        console.log('ls', localStorage.getItem('accessToken'))
    }

    componentDidMount() {
        this.getDataFromStorage()
    }

    logOutBack = () => { 
       //this.props.tokenReducer.tokens.accessToken= '';
        // console.log('state', this.state)
        // localStorage.setItem('accessToken', '');
        // this.setState({isAuthenticatedWithSpotify: false, accessToken:''})
        console.log('tokenlogout', this.props.tokenReducer.tokens.accessToken)
    }

    render() {
        if(!this.props.tokenReducer.tokens) {
            return(
                <Redirect to='/' />
            )
            
        } else 
        return (
            <section className='homepage'>
            <p> you are logged in  Spotify <a className="homepage__logout" onClick={this.logOutBack}>LOG OUT</a></p>
       
              <SearchForm />
              <ArtistList />
              {/* <TrackList trackArray={trackArray} />
              <PlayListCollection playlistArray={playlistArray} /> */}
            </section>

        )
    }
   
}


const actionMaps = (dispatch) => ({
    insertTokens: (tokens) => dispatch({type: 'GET_TOKEN', tokens: tokens})
 });
 
 const propMaps = ({tokenReducer}) => ({
   tokenReducer
 })
 export default  connect(propMaps, actionMaps)(Home)