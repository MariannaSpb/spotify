import React from 'react';
import AuthController from '../controllers/AuthController';
import ArtistList from './ArtistList';


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
    render() {
        return (
            <section className='homepage'>
              <ArtistList artistArray={artistArray} />
            </section>

        )
    }
}
//<AuthController />